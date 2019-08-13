import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      {items.map(object => {
        return <div key={object.id}>{object.name}</div>;
      })}
    </div>
  );
};

export default CollectionPreview;
