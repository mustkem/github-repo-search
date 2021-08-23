import Button from "react-bootstrap/Button";

import React from "react";

function ButtonComp(props) {
  return <Button {...props}>{props.children}</Button>;
}

export default ButtonComp;
