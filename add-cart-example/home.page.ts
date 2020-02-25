import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ac:AlertController,
    public toastController: ToastController) {}
  
  product_name=''

  product_list=[]
  error_msg=''
  btn='Add'
  reset()
  {
    this.btn="Add"
    this.edit_index=-1
    this.product_name=''
  }
  update()
  {
    this.product_list[this.edit_index]=this.product_name
    this.product_name=''
    this.edit_index=-1
    this.btn="Add"
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
  add()
  {
    if(this.product_name.length!=0)
    {
      this.error_msg=''
    this.product_list.push(this.product_name)
    this.product_name=''
    }else{
      this.error_msg="Please enter product name"
      this.showToast("Please enter product name","danger")
    }
  }
  edit_index=-1
  edit(v,i)
  {
    this.product_name=v
    this.edit_index=i
    this.btn="Update"
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
          this.product_list.splice(index,1)
          this.showToast("Deleted Product","success")
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
