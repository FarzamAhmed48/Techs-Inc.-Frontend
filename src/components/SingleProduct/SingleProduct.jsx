import "./SingleProduct.scss";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus } from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-3.webp"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react";
import { AppContext } from "../../utils/Context";


const SingleProduct = () => {
    const [quantity,setQuantity]=useState(1)
    const {id}=useParams()
    const {handleAddToCart}=useContext(AppContext)
    console.log(id)
    const {data}=useFetch(`/api/products?populate=*&filters[id]=${id}`)
    console.log(data?.data[0].attributes.categories.data[0].id)
    console.log(data?.data[0])

    const increment = ()=>{
        setQuantity(prev => prev+1)
    }

    const deccrement = ()=>{
        if(quantity>1){
            setQuantity(prev => prev - 1)
        }
        
    }
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={import.meta.env.VITE_BASE_URL + data?.data[0].attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{data?.data[0].attributes.title}</span>
                        <span className="price">{data?.data[0].attributes.price}</span>
                        <span className="desc">{data?.data[0].attributes.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={deccrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span> 
                            </div>
                            <button className="add-to-cart-button" onClick={()=>{
                                handleAddToCart(data?.data[0],quantity);
                                setQuantity(1)
                                }}>
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"/>

                        <div className="info-item">
                            <span className="text-bold">Category:        
                                <span>{data?.data[0].attributes.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">Share:        
                                <span className="social-icons">

                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts id={id} catID={data?.data[0].attributes.categories.data[0].id}/>
            </div>
        </div>
    );
};

export default SingleProduct;
