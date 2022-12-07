import { combineReducers } from "redux";
import { usersRed } from "./usersRed";
import { productRed } from "./productRed";
import { cartRed } from "./cartRed";


export default combineReducers({
    users: usersRed,
    products: productRed,
    cart: cartRed
})