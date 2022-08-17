const express = require('express');
const path = require('path')
const server = express();

server.set('view engine', 'ejs');
const port = 3000;

server.use(express.static(path.join(__dirname, 'publick')))
server.use('/css', express.static(path.join(__dirname + 'publick/css')))
// server.use('/img', express.static(path.join(__dirname + 'publick/img')))
server.use('/js', express.static(path.join(__dirname + 'publick/js')))

const products = {
    books: [
      {id: 1, author: 'Джордж Орвелл',  name: '1984' },
      {id: 2, author: 'Джон П. Стрелекі', name: 'Кафе на краю світу' },
      {id: 3, author: 'Френк Герберт',  name: 'Дюна' },
      {id: 4, author: 'Стівен Кінг',  name: 'Аутсайдер' },
      {id: 5, author: 'Томас Кинилли',  name: 'Список Шиндлера' },
    ],
    auto: [
      {id: 1, name: 'Ferarri',  model: '458 Italia' },
      {id: 2, name: 'Lamborgini', model: 'Huracan' },
      {id: 3, name: 'BMW',  model: 'M2' },
      {id: 4, name: 'Audi',  model: 'R8' },
      {id: 5, name: 'Lincoln',  model: 'Navigator' },
    ],
}

// !!!! тут стилі працють 
// server.get('/main', (req,res) => {

// //   res.json(products)
//   res.render('main')
// })


// !!!! тут стилі не працють
server.get('/:product/:id', (req,res) => {

  res.render('main')
})



server.get('/:product/:id', (req,res) => {
  let productURL = req.params.product
  let params = +req.params.id -1;


  let findProducts = Object.keys(products)
  let product = [];

  findProducts.forEach(el => {
    
    if (productURL === el) {
      product = [];
      product.push(products[productURL][params]) 
    }

  })

  console.log(product)

  res.render('index', {
    url: productURL,
    product: product,
    id: params, 
    params: params,
  })
  // res.render('index', {   
  //   name: 'vova',
  //   // author: `${findProduct.author}`,
  //   // // model: `${findProduct.model}`,
  //   // name: `${findProduct.name}`,
  //   // id: `/img/${productURL}/${findProduct.id}.jpg`,
  // })
})

server.listen(port, () => {
  console.log(`Listenning ${port} ---`);
});