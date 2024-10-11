import { defineStyleConfig } from "@chakra-ui/react";

export const FormLabelTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "primary.text",
    margin: "0 0 8px 0"
  }
});

export const FormErrorTheme = defineStyleConfig({
  baseStyle: {
    text: {
      whiteSpace: "pre-wrap",
      fontWeight: "normal",
      fontSize: "12px",
      color: "red.1000",
      lineHeight: "16px",
      marginTop: "5px"
    }
  }
});
