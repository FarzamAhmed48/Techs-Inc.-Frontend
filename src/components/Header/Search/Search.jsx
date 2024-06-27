import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useState } from "react";
import useFetch from "../../../hooks/useFetch"
import { useNavigate } from "react-router-dom";
const Search = ({setShowSearch}) => {
    const [query,setQuery]=useState()
    const navigate=useNavigate()

    let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
    console.log(data?.data)
    return (
        <div className="search-model">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search for products" value={query} onChange={(e)=>{setQuery(e.target.value)}} />
                <MdClose onClick={()=>{setShowSearch(false)}}/>
            </div>

            <div className="search-result-content">
                <div className="search-results">
                    {data?.data.map((prod)=>(

                        <div className="search-result-item" onClick={()=>{
                            navigate("/product/"+ prod.id)
                            setShowSearch(false)
                            }}>
                            <div className="img-container">
                                <img src={import.meta.env.VITE_BASE_URL+prod.attributes.img.data[0].attributes.url} alt="" />
                            </div>

                            <div className="prod-details">
                                <span className="name">{prod.attributes.title}</span>

                                <span className="desc">{prod.attributes.desc}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
