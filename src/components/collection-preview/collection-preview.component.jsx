import React from "react";

const CollectionPreview = ({ title, name }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{name}</div>
    </div>
  );
};

export default CollectionPreview;
