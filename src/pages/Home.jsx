import React, { useState, useEffect } from "react";
import PromoSection from "../components/Home/PromoSection";
import SweaterBrandSection from "../components/Home/SweaterBrandSection";
import Header from "../components/Home/Header";
import { usePromoSection } from "../hooks/usePromoSection";
import { useBrandSection } from "../hooks/useBrandSection";

const Home = () => {
  const { diskonsproducts, error, handleFetchData } = usePromoSection();
  const { sweatersProduct, error2, handleFetchDataUnsplash } =
    useBrandSection();

  useEffect(() => {
    handleFetchData();
    handleFetchDataUnsplash();
  }, []);

  return (
    <>
      <Header />
      <main className="md:pt-8 flex flex-col gap-5">
        <PromoSection products={diskonsproducts} error={error} />
        <SweaterBrandSection productsSweater={sweatersProduct} error={error2} />
      </main>
    </>
  );
};

export default Home;
