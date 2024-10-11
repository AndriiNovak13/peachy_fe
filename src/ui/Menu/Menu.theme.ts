/* eslint-disable @typescript-eslint/unbound-method */

import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    minWidth: "fit-content",
    background: "background",
    columnGap: "3px",
    boxShadow: "0px 5px 60px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    border: "1px solid",
    borderColor: "lightGray.300",
    padding: "8px",
    zIndex: 10
  },

  item: {
    background: "transparent",
    fontWeight: "bold",
    borderRadius: "8px",
    fontSize: "14px",
    color: "primary.text",
    lineHeight: "20px",
    padding: "8px 10px 8px 8px",

    _hover: {
      background: "lightGray.100"
    },

    _focus: { background: "lightGray.300" }
  }
});

export const MenuTheme = defineMultiStyleConfig({ baseStyle });
