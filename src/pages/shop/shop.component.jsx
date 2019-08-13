import React, { Component } from "react";
import { SHOP_DATA } from "./shop.data.jsx";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    let collections = [...this.state.collections];
    return (
      <div>
        <h1>SHOP PAGE</h1>
        {collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
export default ShopPage;
