import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};
export default ShopPage;
