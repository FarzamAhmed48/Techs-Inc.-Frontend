import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import "./App.css";
import { AppContext, AppProvider } from "./utils/Context";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const {
    categories,
    setCategories,
    products,
    setProducts,
    fetchDataFromApi,
    isLoading,
    setIsLoading,
  } = useContext(AppContext);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getCategories = async () => {
    await fetchDataFromApi("/api/categories?populate=*", "categories").then(
      (res) => {
        setCategories(res);
        setIsLoading(false)
        ;
      }
    );
  };
  const getProducts = async () => {
    await fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  
  return (
    <>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Routes>
        <NewsLetter />
        <Footer />

    </>
  );
}

export default App;
