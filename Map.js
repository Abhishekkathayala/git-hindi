//Map function

const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.
map((num) => num+10)
.map((num) => num*2)
.filter((num) => num>30)

// console.log(newNums)


// const myArr = [3,5,7,4,45,65,65,65,65,65,34,32,];

// const total = myArr.reduce((acc,currVal) => (acc+currVal),0)

// console.log(total);



const shoppingCart = [
    {
        course:'js',
        price: 499
    },
    {
        course:'python',
        price: 999
    },
    {
        course:'ruby',
        price: 1499
    }
]

const total = shoppingCart.reduce((acc,item) => (acc+item.price),0)
console.log(`Price to pay:${total}`)