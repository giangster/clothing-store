import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
