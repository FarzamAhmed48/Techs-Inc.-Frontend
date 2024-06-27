import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AppContext =createContext();
export const AppProvider=({children})=>{
    const [categories,setCategories]=useState();
    const [products,setProducts]=useState();
    const [isLoading,setIsLoading]=useState(true)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [cartSubTotal,setCartSubTotal]=useState(0)

    
    useEffect(()=>{
        let count=0 
        cartItems.map((item)=> count += item.attributes.quantity)
        let subtotal=0
        cartItems.map((item)=> subtotal+= item.attributes.price * item.attributes.quantity)
        setCartSubTotal(subtotal)
        setCartCount(count)
    },[cartItems])

    const handleAddToCart=(product,quantity)=>{
        console.log(product,quantity)
        let items=[...cartItems]
        let index=items.findIndex((p)=> p.id === product.id)
        if (index !==-1){
            items[index].attributes.quantity+=quantity
        }
        else{
            product.attributes.quantity=quantity
            items=[...items,product]
        }
        setCartItems(items)
    }
    const handleRemoveFromCart=(product)=>{
        let items=[...cartItems]
        items=items.filter((p)=> p.id !==  product.id)
        setCartItems(items)
    }
    const handleCartProductQuantity=(type,product)=>{
        let items=[...cartItems]
        let index=items.findIndex((p)=> p.id === product.id)

        if( type === "inc"){
            items[index].attributes.quantity+=1
        }else if(type === "dec"){
            if(items[index].attributes.quantity===1){
                return
            }else{
                items[index].attributes.quantity-=1
            }
        }
        setCartItems(items)
    }
        
    const params = {
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_ECOM_KEY
        },
    }


    const fetchDataFromApi = async (url)=>{
        // const {setCategories}=useContext(AppContext)
        try {
            const {data}=await axios.get(import.meta.env.VITE_BASE_URL + url,params)
            setIsLoading(false)
            return data
            
        } catch (error) {
            console.log(error)
        }
    }

    const makePaymentRequest=axios.create({
        baseURL:import.meta.env.VITE_BASE_URL,
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_ECOM_KEY
        }
    })
    return (
        <AppContext.Provider value={{categories,isLoading,setCategories,products,setProducts ,fetchDataFromApi,setIsLoading,cartItems,setCartItems,cartCount,setCartCount,cartSubTotal,setCartSubTotal,handleAddToCart,handleRemoveFromCart,handleCartProductQuantity,makePaymentRequest}}>
            {children}
        </AppContext.Provider>
    )
}

