"use client";

import { ReactNode } from "react";
import { Button } from "antd";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const ZButton = ({ children, className, appName }: ButtonProps) => {
  return (
    <Button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </Button>
  );
};
