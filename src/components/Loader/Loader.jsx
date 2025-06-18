import React from "react";

const Loader = () => {
  const loadingStyles = {
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: "50px", // In JSX, CSS properties like 'font-size' become 'fontSize' (camelCase)
    backgroundColor: "var(--movie-list-light)", // CSS variables are supported in inline styles
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <h1 style={loadingStyles}>loading...</h1>;
};

export default Loader;
