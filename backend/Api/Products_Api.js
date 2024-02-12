const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;


// Enable CORS for all routes
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
     res.header("Access-Control-Allow-Headers", "Content-Type");
     next();
});


let productData = [];

// Function to read product data from file
const readProductDataFromFile = () => {
     fs.readFile('../../frontend/src/components/images/All_products_Info.json', 'utf8', (err, data) => {
          if (err) {
               console.error('Error reading product data:', err);
               return;
          }
          productData = JSON.parse(data);
          console.log('Product data reloaded.');
     });
};

// Read product data from file initially
readProductDataFromFile();

// Watch for changes to the JSON file and reload product data when it changes
fs.watch('../../frontend/src/components/images/All_products_Info.json', (eventType, filename) => {
     console.log(`File ${filename} changed. Reloading product data...`);
     readProductDataFromFile();
});

app.get('/', (req, res) => {
     res.send("Welcome to the api..");
});

app.get('/api/v1/products', (req, res) => {
     res.send(productData);
});

app.get('/api/v1/products/:category', (req, res) => {
     const { category } = req.params;

     const filterCategoryProducts = productData.filter((element) => {
          return element.category === category;
     });

     res.send(filterCategoryProducts);
});

app.get("/api/v1/products/query/:productQuery", (req, res) => {
     const { productQuery } = req.params;
     const filterQueryProducts = productData.filter((element) => {
          return element.title.toLowerCase().includes(productQuery.toLowerCase());
     });

     res.send(filterQueryProducts);
});

// Starting the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
