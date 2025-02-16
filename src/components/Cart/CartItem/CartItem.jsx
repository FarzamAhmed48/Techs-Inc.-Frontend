import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { AppContext } from "../../../utils/Context";
const CartItem = () => {
    const {cartItems,handleRemoveFromCart,handleCartProductQuantity}=useContext(AppContext)
    return (
        <div className="cart-products">
                {console.log(cartItems)}
                {cartItems.map((item)=>(
                     <div className="cart-product">
                        <div className="img-container">
                            <img src={import.meta.env.VITE_BASE_URL + item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
                            <div className="quantity-buttons">
                                <span onClick={()=> handleCartProductQuantity("dec",item)}>-</span>
                                <span>{item.attributes.quantity}</span>
                                <span onClick={()=> handleCartProductQuantity("inc",item)}>+</span> 
                            </div>
        
        
                            <div className="text">
                                <span>{item.attributes.quantity}</span>
                                <span>x</span>
                                <span className="highlight">{item.attributes.price * item.attributes.quantity}</span>
        
                            </div>
                        </div>
                 </div>
                ))}
        </div>
    );
};

export default CartItem;
