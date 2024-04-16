import { StoreProvider } from "app/StoreProvider";
import React, { FC } from "react";

interface TestComponentWrapperProps {
  children: JSX.Element[] | JSX.Element;
}

const TestComponentWrapper: FC<TestComponentWrapperProps> = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default TestComponentWrapper;
