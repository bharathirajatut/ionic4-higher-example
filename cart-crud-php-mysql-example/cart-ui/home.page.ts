import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {
      this.getCartList()
    }
  

   
  product_name:any=''
  price:any=''
  qty:any=''
  product_list=[]
  error_msg=''
  btn='Add'
  edit_index=-1
  reset()
  {
    this.btn="Add"
    this.product_name=''
    this.price=''
    this.qty=''
  }
  edit(x,index)
  {
    this.product_name=x.product_name
    this.price=x.price
    this.qty=x.qty
    this.edit_index=index
    this.btn="Update"
  }
  getCartList()
  {
    this.http.get('http://localhost/cart/get-cart-list.php').subscribe(data=>{
    this.product_list=<Array<any>>data
    })
  }
  async update()
  {

    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.product_list[this.edit_index].id
    //make http request
    let prms:any={product_name:this.product_name,qty:this.qty,price:this.price,id:id}
    this.http.get('http://localhost/cart/update-cart.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getCartList()
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })

  }
  add_update()
  {
    if(this.edit_index!=-1)
    {
this.update()
    }else{
      this.add()
    }
  }

  async add()
  {
    if(this.product_name.length==0)
    {
      this.error_msg="Please enter product name"
      this.showToast("Please enter product name","danger")
    }else if(this.price.length==0)
    {
      this.error_msg="Please enter product price"
      this.showToast("Please enter product price","danger")
    }else if(this.qty.length==0)
    {
      this.error_msg="Please enter qty"
      this.showToast("Please enter qty","danger")
    }else{

      const loading = await this.loadingController.create({
        message: 'Saving. Please wait..',
      });
      await loading.present();
  
      //make http request
      let prms:any={product_name:this.product_name,qty:this.qty,price:this.price}
      this.http.get('http://localhost/cart/add-cart.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Saved","secondary")
          this.getCartList()
          this.reset()
        }else{
          this.showToast("Unable to save.","danger")

        }
      })

    }
  }
  
  async remove(id)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={id:id}
    this.http.get('http://localhost/cart/delete-cart.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.product_list.splice(index,1)
        this.getCartList()
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async delete(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove(this.product_list[index].id)
          //
         // this.showToast("Deleted Product","success")
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }
}
