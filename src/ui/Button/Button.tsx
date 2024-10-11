import { Button as ChakraButton } from "@chakra-ui/react";

import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  size = "md",
  variant = "primary",
  block = false,
  danger = false,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      size={size}
      variant={variant}
      width={block ? "100%" : "fit-content"}
      {...(danger
        ? {
            background: "red.1000",
            color: "white",
            _hover: {
              opacity: "0.7",
              _disabled: {
                background: "red.1000",
                opacity: "1"
              }
            },
            _disabled: {
              background: "red.1000"
            }
          }
        : null)}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
