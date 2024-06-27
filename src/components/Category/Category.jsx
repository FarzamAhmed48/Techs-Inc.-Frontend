import "./Category.scss";
import Products from "../Products/Products"
import {useNavigate, useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const {id}=useParams();
    console.log(id)
    const {data}=useFetch(`/api/products?populate=*&filters[categories]=${id}`)
    console.log(data?.data[0].attributes.categories.data[0].attributes.title)
    const navigate=useNavigate()
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {data?.data[0].attributes.categories.data[0].attributes.title}
                </div>
                <Products innerPage={true} products={data}/>
            </div>
        </div>
    );
};

export default Category;
