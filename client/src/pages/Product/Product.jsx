import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartReducer";
import { addtoLikedProduct } from "../../redux/likedReducer";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [wishList, setWishList] = useState(true);
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/api/products/${id}?populate=*`);
  const dispatch = useDispatch();

  const handleSelectImage = () => {
    selectedImage === "img"
      ? setSelectedImage("img2")
      : setSelectedImage("img");
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            onMouseEnter={handleSelectImage}
            src={
              process.env.REACT_APP_API_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
          <img
            onMouseEnter={handleSelectImage}
            src={
              process.env.REACT_APP_API_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="mainImg">
          <img
            src={
              process.env.REACT_APP_API_URL +
              data?.attributes[selectedImage]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">{data?.attributes?.price}$</span>
        <p>{data?.attributes?.des}</p>

        <div
          onClick={(event) =>
            event.target.className === "increment"
              ? setQuantity(quantity + 1)
              : setQuantity(quantity ? quantity - 1 : 0)
          }
          className="quantity"
        >
          <button className="decrement">-</button>
          {quantity}
          <button className="increment">+</button>
        </div>

        <button
          onClick={() =>
            dispatch(
              addtoCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                img: data.attributes.img.data.attributes.url,
                price: data?.attributes?.price,
                quantity,
              })
            )
          }
          className="add"
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>

        <div  className="links">
          <div
            onClick={() => {
              setWishList(wishList ? false : true);

              dispatch(
                addtoLikedProduct({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  img: data.attributes.img.data.attributes.url,
                  price: data?.attributes?.price,
                  quantity,
                })
              );
            }}
            className="item"
          >
            <span className={`${wishList ? "" : "inactive"}`}>
              <FavoriteBorderIcon />
            </span>
            <span
              className={`${wishList ? "inactive" : ""}`}
              style={{ color: "#2879fe" }}
            >
              <FavoriteIcon />
            </span>
            ADD TO WISH-LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
