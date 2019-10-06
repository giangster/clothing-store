import React from "react";
import { withRouter } from "react-router-dom";
import {
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
  BackgroundImageContainer,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer className="subtitle">SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
