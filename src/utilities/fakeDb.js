const addToDb = (id) => {
    let shoppingCart = {}

    // get previously stored cart from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    // get the quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }

    // set shopping cart to localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// get previously stored cart from localStorage
const getStoredCart = () => {
    let shoppingCart = {}

    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

// remove a specific item form localStorage
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
       }
    }
}

const deleteCartFromDb = () => {
    localStorage.removeItem('shopping-cart')
}

export {addToDb, getStoredCart, removeFromDb, deleteCartFromDb}