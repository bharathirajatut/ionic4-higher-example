# Add To Cart Example Using PHP, MySQL 

It is a simple example of add to cart using Ionic 4 with PHP, MySQL. It contains PHP REST-API. 
It had four different cart features. They are

1. Save cart info
2. Update cart info
3. Delete cart info
4. List cart info

You can use this to your real time projects. 
# How to?
## Step1.

1. Just copy the home.html and home.ts file or code inside those files in the cart-ui folder.
2. Run and preview it

## Step2:

1.Copy the php api files folder to your XAMPP htdocs and rename it to cart
2. Inside the folder, you can find dbconn.php file. In the file, change database username,password,database name of yours.

## Step3:
1. Create table in MySQL using the below code.

```
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `qty` varchar(45) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `customer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;
```

Here I passed customer name manually. Instead you can pass the session user name in add-cart.php file. 
As per billing logic, we always pass bill no as reference, not customer name. Why because, one customer can have multiple carts.
So if you want to develop better cart, please pass bill id instead customer. Just for the demo, I created like this.
Will post more tutorials like this asap.

## Demo


### List of Cart and Validation Example

<img 
src="https://raw.githubusercontent.com/bharathirajatut/ionic4-higher-example/master/cart-crud-php-mysql-example/images/sc1.png" 
width="650px" height="500px">

<br> <br><br>

### Edit Cart

<img src="https://raw.githubusercontent.com/bharathirajatut/ionic4-higher-example/master/cart-crud-php-mysql-example/images/sc2.png" 
width="650px" height="500px">
<br> <br><br>
### Delete Cart

<img src="https://raw.githubusercontent.com/bharathirajatut/ionic4-higher-example/master/cart-crud-php-mysql-example/images/sc3.png" 
width="650px" height="500px">
