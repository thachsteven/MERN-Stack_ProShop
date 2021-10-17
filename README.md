<h1>ProShop eCommerce</h1>
<h4>Front End: Reactjs</h4>
<h4>Back End: Nodejs, Express, Mongodb</h4>
<h4>Source: https://github.com/thachsteven/MERN-Stack_ProShop</h4>

<img src="./images/proshopreadme.png" alt="proshop" />

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

<hr/>
<h2>Setting up development environment 🛠</h2>
### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev
```

# Run backend only
```
npm run server
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
1234

<hr/>
