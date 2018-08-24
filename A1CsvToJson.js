const  csvtojson = require('csvtojson')
const fs = require('fs')

csvtojson()
.fromFile('assets/customer-data.csv')
.then( (jsonObj) => {
  fs.writeFile('assets/customer-data.json', JSON.stringify(jsonObj), (err) => {
    if (err) throw err;
  })
})