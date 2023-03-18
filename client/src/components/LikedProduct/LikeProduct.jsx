import React from "react";
import "./LikeProduct.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
import { removeFromLikedProduct, resetLikedCart } from "../../redux/likedReducer";


const LikeProduct = () => {

  const data = useSelector(state => state.like.products)
  const dispatch  = useDispatch()
  
  return (
    <div className="cart">
      {data?.map((item) => (
        
        <div className="item" key={item.id}>

          <img src={process.env.REACT_APP_API_URL+item.img} alt="" />

          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>

          <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeFromLikedProduct(item.id))} />

        </div>
      ))}
      <span onClick={()=>dispatch(resetLikedCart())} className="reset">Empty Cart</span>
    </div>
  );
};

export default LikeProduct;
