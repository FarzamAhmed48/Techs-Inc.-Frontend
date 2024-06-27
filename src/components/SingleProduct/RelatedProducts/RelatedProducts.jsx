import  Products from "../../Products/Products"
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({id,catID}) => {
    const {data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][id]=${catID}`)
    console.log(data)
    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data}/>
        </div>
    );
};

export default RelatedProducts;
