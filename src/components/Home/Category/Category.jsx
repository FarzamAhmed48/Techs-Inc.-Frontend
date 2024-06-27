import useFetch from "../../../hooks/useFetch";
import "./Category.scss";
const Category = ({categories}) => {
    
    console.log(categories?.data)
    console.log(import.meta.env.VITE_BASE_URL+categories?.data[0].attributes.img.data.attributes.url)
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data.map((item)=>(
                    <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
                        <img src={import.meta.env.VITE_BASE_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
                
                
            </div>
        </div>
    );
};

export default Category;
