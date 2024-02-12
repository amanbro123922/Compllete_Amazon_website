const axios = require("axios")
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./Amazon_Products.html");

const URL = "https://www.amazon.com/s?k=boys+mask+&ref=nb_sb_noss&page=3"

axios.get(URL).then((response) => {
     console.log(response.data);
     fs.writeFileSync(filePath, response.data);
     console.log("Source code added sucessfully...");
});