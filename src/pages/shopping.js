import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout/Layout";
import ShoppingCardList from "../components/ShoppingCardList/ShoppingCardList";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledBody, StyledFontAwesomeIcon } from "./shopping.styles";

const handleClick = () => {
  navigate("/", { replace: true });
};

const shopping = (props) => {
  return (
    <Layout>
      <StyledBody>
        <StyledFontAwesomeIcon icon={faArrowLeft} onClick={handleClick} />
        <ShoppingCardList />
      </StyledBody>
    </Layout>
  );
};

export default shopping;
