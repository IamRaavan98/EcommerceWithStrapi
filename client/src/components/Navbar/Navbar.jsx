import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import LikeProduct from "../LikedProduct/LikeProduct";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openlikeproduct, setOpenlikeproduct] = useState(false);
  const product = useSelector((state) => state.cart.products);
  const likeProducts = useSelector((state) => state.like.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <div className="item">
            <Link className="link" to="/product/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            Honey Bee
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <div className="likedProduct">
              <FavoriteBorderOutlinedIcon
                onClick={() => (setOpenlikeproduct(!openlikeproduct),
                setOpenCart(openCart?false:openCart)
                )}



                className="likedProduct"
              />
              <span className="value">{likeProducts.length}</span>
            </div>
            <div
              onClick={() => (
                setOpenCart(!openCart),
                  setOpenlikeproduct(openlikeproduct ? false : openlikeproduct))
              }
              className="cartIcon"
            >
              <ShoppingCartOutlinedIcon className="cartIcon" />
              <span>{product.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
      {openlikeproduct && <LikeProduct />}
    </div>
  );
}
