import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { AppContext } from "../../utils/Context";
import axios from "axios";

const Home = ({refs}) => {
   const {categories,products}=useContext(AppContext)
    return (
        <div >
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>   
                    <Products  products={products} headingText="Popular Products"/>  
                </div>
            </div>
        </div>
        
    );
};

export default Home;
