// const element = document.querySelector('.product')

// const requestServerJSON = axios.get('http://localhost:3001/main')

// const getElements = (array) => {
//   let elementUl = document.createElement('ul');
//   elementUl.className = 'product-items'

//   array.forEach(el => {
//     const elementLi = document.createElement('li');
//     const elementLink = document.createElement('a');
//     elementLink.setAttribute('href', el)
//     elementLink.innerHTML = el
//     elementLi.insertAdjacentElement('beforeend', elementLink )
//     elementUl.insertAdjacentElement('beforeend', elementLi )
    
//   })
//  return elementUl;
// }

// requestServerJSON.then(res => {
  
//   let findProducts = Object.keys(res.data)
 
//   const elements = getElements(findProducts)

//   element.insertAdjacentElement('beforeend', elements )

// })



//!!! Дз з формою 
const loginForms = document.forms.person;
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const years = document.querySelector('#years');


loginForms.addEventListener('submit',  (ev) => {
  ev.preventDefault();

  const elmentsForm = ev.target.elements

  // const data = new FormData(loginForms);
  const data = {}

  Array.from(elmentsForm)
        .forEach((element) => {
          const { name, value } = element
          data[name] = value
        })
  console.log(data)

  // console.log(Array.from(data.entries()))
  const responce =  axios.post('http://localhost:3001/test', {
    'name': data.name,
    'surname': data.surname,
    'age': data.age,
  });


  responce.then(res => {
    console.log(res)
  })
 
})




