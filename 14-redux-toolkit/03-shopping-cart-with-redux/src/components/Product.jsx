import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Product.module.css";
import { toast } from "react-toastify";
import { addItemToCart } from "../features/cart/cartSlice";
function Product({ id, title, price, img }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    function handleAdd() {
        for (let item of cart) {
            if (item.id === id) {
                toast.error("Item already added to cart");
                return;
            }
        }

        const newCartItem = {
            id: id,
            price: price,
            title: title,
            img: img,
            quantity: 1,
        };
        dispatch(addItemToCart(newCartItem));
        toast.info("Item added!!");
    }
    return (
        <div className={styles.product}>
            <img src={img} alt={title} className={styles.productImage} />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>&#8377;{price}</p>

            <button onClick={handleAdd} className={styles.addToCartBtn}>
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
