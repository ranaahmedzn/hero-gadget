import { getStoredCart } from "../utilities/fakeDb";

const productsAndCartData = async() => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const storedCart = getStoredCart()
    const newCart = []

    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            newCart.push(addedProduct)
        }
    }

    return [newCart, products];
}

export default productsAndCartData;