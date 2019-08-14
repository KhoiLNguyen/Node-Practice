import { isUndefined } from "util";

// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Texas'
}

console.log(user)

// object destructuring

const product = {
  label: 'Blue notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 10
}

const { label: productLabel, price, stock, salePrice, rating = 5 } = product
console.log(productLabel, price, stock, salePrice)
console.log(rating)

const transaction = (type, { label, stock }) => {
  // const { label } = myProduct 

  console.log(type, label, stock)
}

transaction('order', product)