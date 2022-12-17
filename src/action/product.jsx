import { ADD_PRODUCT, EDIT_PRODUCT, SEARCH_PRODUCT, DEL_PRODUCT } from "../const/index"

// Add product
export const addProduct = (products) => {
    return {
        type: ADD_PRODUCT,
        products
    }
}

// Edit product
export const editProduct = (id, contentProduct) => {
    return {
        type: EDIT_PRODUCT,
        id,
        contentProduct
    }
}

// Search product
export const searchProduct = (id) => {
    return {
        type: SEARCH_PRODUCT,
        id
    }
}

// Delete product
export const delProduct = (id) => {
    return {
        type: DEL_PRODUCT,
        id
    }
}