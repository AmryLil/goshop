import { useState } from "react"
import { deleteCart, readCart } from "../services/handleCart"

export const useCart=()=>{
  const [product, setProduct]=useState([])
  const handleFetchCart=async()=>{
    try{
      const res = await readCart()
      
      setProduct(res.data.cart.CartItems)
      console.log(res.data.cart.CartItems
      )
    }catch(err){
      console.log(err)
    }
  }
  const handleDeleteCart = async (id) => {
    try {
      const res = await deleteCart(id);
      setProduct((prevProducts) => prevProducts.filter(product => product.Id !== id));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return{
    product,
    handleFetchCart,
    handleDeleteCart

  }
}