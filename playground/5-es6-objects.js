// Object property shorthand

const name = 'Arthur'
const userAge = '27'

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2,
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 5, random } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)
// console.log(random) // Does not exist so it returns undefined, unless we have a default

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
