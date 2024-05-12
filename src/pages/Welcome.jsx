import React, { memo } from "react";
import { Alert } from "jecyu-design";
function Welcome() {
  return (
    <div>
      <h1>Hello World</h1>
      <Alert kind="warning">这是一条警告提示</Alert>
    </div>
  );
}

export default memo(Welcome);
