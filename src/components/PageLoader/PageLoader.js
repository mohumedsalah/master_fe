import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2d8eb8;
`;

const PageLoader = ({ loading }) => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={150}
        //size={"150px"} this also works
        color={"#2d8eb8"}
        loading={loading}
      />
    </div>
  );
};
export default PageLoader;
