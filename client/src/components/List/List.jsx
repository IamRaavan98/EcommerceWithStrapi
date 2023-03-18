import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ maxPrice, selectedSubCats, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${catId}${selectedSubCats.map((t)=>`&[filters][sub_categories][id][$eq]=${t}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
