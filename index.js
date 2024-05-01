const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT ||5000;

app.use(cors());

const categories = require ('./data/categories.json');
const classes = require ('./classes.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/categories', (req, res) => {
  res.send(categories)
});


app.get('/classes-categories', (req, res) => {
  res.send(categories);
});


app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if(id === '8') {
    res.send(classes);
    }
 
else{
  const category_classes = classes.filter( classes => classes.category_id === id);
  res.send(category_classes);
}
})



app.get('/classes', (req, res) => {
    res.send(classes);
})


app.get('/classes/:id', (req, res) => {
  const id = req.params.id;
  const selectedClasses = classes.find( classes=> classes._id === id);
  res.send(selectedClasses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})