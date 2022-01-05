const cart = {
    item: [],
    getItems() {
      return this.item; 
    },
    add(product) {
        for (const key of this.item) {
            if (key.name === product.name){
               key.quantity += 1;
               return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }

        this.item.push(newProduct);
    },
    remove(productName) {
        for (const product of this.item) {
            if (product.name === productName){
                this.item.splice(this.item.indexOf(product), 1);
            }
        }
    },
    clear() {
        this.item = [];
    },
    countTotalPrice(){
       let total = 0;

       for (const product of this.item) {
           total += product.price * product.quantity;
       }

       return total;
    },
    increaseQuantity(productName){
        for (const key of this.item) {
            if(key.name === productName){
                key.quantity += 1;
            }
        }
    },
    decreaseQuantity(productName){
        for (const key of this.item) {
            if(key.name === productName && key.quantity === 1){
                this.item.splice(this.item.indexOf(key), 1);               
            } else if(key.name === productName) {
                key.quantity -= 1;
            }
        }
    },
}

const apple = {
    name: 'apple',
    price: 50,
}
const lemon = {
    name: 'lemon',
    price: 45,
}
const kiwi = {
    name: 'kiwi',
    price: 74,
}


cart.add(apple);
cart.add(lemon);
cart.add(kiwi);
cart.add(apple);
cart.decreaseQuantity("apple");
cart.decreaseQuantity("apple");
cart.add(lemon);
cart.decreaseQuantity("lemon");
cart.decreaseQuantity("lemon");
console.table(cart.item);

console.log(cart.countTotalPrice());
// cart.remove("lemon");
// console.table(cart.item);
// console.log(cart.countTotalPrice());
// cart.remove('apple');
// console.log(cart.item);
// console.log(cart.countTotalPrice());
// cart.clear();
// console.log(cart.item);
// console.log(cart.countTotalPrice());