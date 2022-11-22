import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import "./AppButton.scss";

const AppButton = (props) => {
  const {
    text,
    color,
    style,
    type,
    lg,
    disabled,
    loading,
    // LoadingOutlined,
    children,
  } = props;
  return (
    <button
      {...props}
      style={{ ...style }}
      // type="button"
      className={`app-btn normal ${type} ${lg} ${props.className}`}
      disabled={disabled || loading}
     
    >
      {loading && <LoadingOutlined style={{ marginRight: 10 }} />}
      {children}
    </button>
  );
};

export default AppButton;
