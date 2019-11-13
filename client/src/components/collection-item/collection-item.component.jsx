import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import {
  CollectionItemContainer,
  CollectionFooter,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
