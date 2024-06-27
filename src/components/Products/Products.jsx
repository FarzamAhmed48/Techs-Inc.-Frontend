import "./Products.scss";
import Product from "./Product/Product"
const Products = ({products,innerPage,headingText}) => {
    console.log(products)
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data.map((item)=>(
                    
                    <Product key={item.id} id={item.id} title={item.attributes.title}  price={item.attributes.price} img={item.attributes.img.data[0].attributes.url}/>
                ))
                    
                }
                
                
            </div>
        </div>
    );
};

export default Products;
