import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";


const Cart = () => {

  const data = useSelector(state => state.cart.products)
  const dispatch  = useDispatch()
  const totalPrice = ()=>{
    let total = 0;

    data && data.map((t)=>(total+=t.quantity*t.price))  
 
      return total;
  }
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        
        <div className="item" key={item.id}>

          <img src={process.env.REACT_APP_API_URL+item.img} alt="" />

          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>

          <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeFromCart(item.id))} />

        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span onClick={()=>dispatch(resetCart())} className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
