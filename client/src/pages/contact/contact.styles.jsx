import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 30px;

  @media screen and (max-width: 600px) {
    width: 450px;
    display: block;
  }
`;

export const AppInfoContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 20px;
    text-align: justify;
    line-height: 1.6;

    a {
      color: blue;
    }
  }
`;

export const TitleContainer = styled.h1`
  margin: 10px 0;
`;

export const ContactInfoContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const ContactFormContainer = styled.form`
font-size: 20px;

textarea {
  font-family: "Open Sans Condensed";
  background: none;
  background-color: white;
  color: grey;
  font-size: 17px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
}
}`;
