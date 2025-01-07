import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { OtherProduct } from "../components/Product/OtherProductSection";
import { MainSection } from "../components/Product/MainSection";
import { addToCart } from "../services/handleCart";

const ProductPage = () => {
  const { id } = useParams();
  const { product, _, handleFetchData } = useProduct(id);
  const [dataProduct, setDataProduct] = useState({
    product: 0,
    quantity: 0,
  });

  useEffect(() => {
    handleFetchData();
  }, [id]);

  const fetchImageAsBlob = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
  };

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1]; // Strip out the header data:image/jpeg;base64,
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  }
  const priceFix = Number(product.price) * 9000;

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const imageBlob = await fetchImageAsBlob(product.thumbnail);
      const imageBase64 = await convertBlobToBase64(imageBlob);

      const updatedProductData = {
        product_id: product.id,
        quantity: 1,
      };

      setDataProduct(updatedProductData);

      // Log the data to be sent
      console.log("Updated Product Data:", { updatedProductData });

      const response = await addToCart(updatedProductData);
      console.log("Add to cart response:", response.data);
      // Display success notification or message
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Display error message
    }
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <MainSection
        thumbnail={product.thumbnail}
        category={product.category}
        price={product.price}
        rating={product.rating}
        description={product.description}
        title={product.title}
        addToCart={handleAddToCart}
      />

      <OtherProduct />
      {/* Comment Section */}
      {/* <Komentar /> */}
    </div>
  );
};

export default ProductPage;
