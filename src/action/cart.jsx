import { ADD_CART, DEL_CART, UPD_CART } from "../const/index"

// Add cart
export const addCart = (product) => {
    return {
        type: ADD_CART,
        product
    }
}

// Update cart
export const updateCart = (cart) => {
    return {
        type: UPD_CART,
        cart
    }
}

// Delete cart
export const deleteCart = (cart) => {
    return {
        type: DEL_CART,
        cart
    }
}