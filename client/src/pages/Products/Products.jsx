import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Product.scss";
function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([])


  const { data, loading, error } = useFetch(
    `/api/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e)=>{
    const value = e.target.value;
    const checkbox = e.target.checked;
    checkbox?setSelectedSubCats([value,...selectedSubCats]):(setSelectedSubCats(selectedSubCats.filter((t=>
      t !== value
    ))))
  }


  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
            <div key={item.id} className="inputItem">
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item?.attributes?.title}</label>
            </div>

          ))
          }

          
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(event) => setMaxPrice(event.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={"asc"}
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value={"asc"}
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats}/>
      </div>
    </div>
  );
}
export default Products;
