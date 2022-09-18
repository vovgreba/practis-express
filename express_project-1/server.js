const express = require('express');
const path = require('path');
const server = express();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

server.set('view engine', 'ejs');
const port = 3001;

server.use(express.static(path.join(__dirname, 'publick')))
server.use('/css', express.static(path.join(__dirname + 'publick/css')))
server.use('/img', express.static(path.join(__dirname + 'publick/img')))
server.use('/js', express.static(path.join(__dirname + 'publick/js')))

server.use(express.urlencoded({extended: false}));

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

// server.get('/main', (req,res) => {

//   res.json(products)
  
// })

server.post('/test', upload.none(), (req,res) => {

  console.log(req.body)
  res.redirect('/')
  
})


server.get('/', (req,res) => {

  res.render('main')
})


// server.get('/:product', (req,res) => {
//   let productURL = req.params.product

//   let findProducts = Object.keys(products)
//   let product = null;

//   findProducts.forEach(el => {
    
//     if (productURL === el) {
//       product = products[productURL]
//     }

//   })


//   console.log(productURL)
//   res.render('index', {
//     url: productURL,
//     product: product,
//     img: `/img/${productURL}/`,
//   })

// })

server.listen(port, () => {
  console.log(`Listenning ${port} ---`);
});