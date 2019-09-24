import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends Component {
  render() {
    let collections = [...this.state.collections];
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
export default ShopPage;
