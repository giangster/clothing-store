import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ collections }) => {
  return (
    <div>
      <CollectionOverview collections={collections} />
    </div>
  );
};

export default ShopPage;
