import Button from "react-bootstrap/Button";

import React from "react";

function ButtonComp(props: any) {
  return <Button {...props}>{props.children}</Button>;
}

export default ButtonComp;
