import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

export default function FeaturedProducts({ type }) {
  const { data, error, loading } = useFetch(
    `/api/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          dolorum quae iure fugiat aliquid, repudiandae facere assumenda!
          Labore, molestiae corrupti blanditiis a maxime magni laborum quam,
          laboriosam explicabo ut illum?
        </p>
      </div>
      <div className="bottom">
        {error
          ? error
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}
