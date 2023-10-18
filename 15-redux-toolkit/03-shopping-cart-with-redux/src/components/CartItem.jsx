import React from "react";

import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {
    increaseQty,
    decreaseQty,
    removeItemFromCart,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
function CartItem({ id, price, img, title, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.cartItem}>
            {/* left  */}
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={title} className={styles.cartImage} />
                </div>
                <h3>{title}</h3>
            </div>
            {/* right  */}
            <div className={styles.otherControls}>
                <div className={styles.qtyInput}>
                    <button
                        onClick={() => {
                            if (quantity <= 1) {
                                return;
                            }
                            dispatch(decreaseQty({ id }));
                        }}
                    >
                        <AiOutlineMinus />
                    </button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button
                        onClick={() => {
                            dispatch(increaseQty({ id }));
                        }}
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
                <p> &#8377;{price * quantity}</p>
                <button
                    className={styles.removeItemBtn}
                    onClick={() => {
                        dispatch(removeItemFromCart({ id }));
                    }}
                >
                    <ImCross />
                </button>
            </div>
            {/* ----------------- old ------------  */}
        </div>
    );
}

export default CartItem;
