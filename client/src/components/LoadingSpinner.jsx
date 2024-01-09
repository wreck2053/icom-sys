import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LoadingSpinner({ loading }) {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"#36D7B7"}
        loading={loading}
        css={override}
        size={50}
      />
    </div>
  );
}

export default LoadingSpinner;
