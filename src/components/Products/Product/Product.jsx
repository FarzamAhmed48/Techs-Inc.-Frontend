import "./Product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({id,title,price,img}) => {
    const navigate= useNavigate()
    return (
        <div className="product-card" onClick={()=> navigate("/product/" + id)}>
            <div className="thumbnail">
                <img src={import.meta.env.VITE_BASE_URL + img} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">{`Rs ${price}`}</span>
            </div>
        </div>
    );
};

export default Product;
