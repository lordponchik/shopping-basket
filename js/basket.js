const cart = {
    item: [],
    getItems() {
        return this.item;
    },
    add(product) {
       
        for (const items of this.item) {
            if (items.name === product.name){
                items.quantity += 1;
                return;
            }
        }
       
        const newProduct = {
            ...product,
            quantity: 1,
        };
        
        this.item.push(newProduct);
        

    },
    remove(productName) {
        const {item} = this;

        for(let i=0; i<item.length; i += 1){
            if(productName === item[i].name){
                item.splice(i, 1);
            }
        }     
    },
    clear() {
        this.item = [];
    },
    countTotalPrice(){
        const {item} = this;
        let total = 0;

        for (const {price, quantity} of this.item)
        {
            total += price*quantity;
        }

        return total;        
    },
    increaseQuantity(productName){},
    decreaseQuantity(productName){},
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
cart.add(apple);
cart.add(apple);
cart.add(lemon);
cart.add(kiwi);
cart.add(apple);
cart.add(lemon);
cart.add(kiwi);
console.table(cart.item);
console.log(cart.countTotalPrice());
// cart.remove('apple');
// console.log(cart.item);
// console.log(cart.countTotalPrice());
// cart.clear();
// console.log(cart.item);
// console.log(cart.countTotalPrice());