/* eslint-disable @typescript-eslint/unbound-method */

import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tableAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  thead: {
    height: "36px",
    background: "lightGray.200",
    borderBottom: "none",

    tr: {
      th: {
        border: "none",
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: "10px",
        color: "primary.text",
        lineHeight: "12px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        padding: "8px"
      },

      "th:first-of-type": {
        borderLeftRadius: "8px",
        padding: "8px 8px 8px 12px"
      },

      "th:last-of-type": {
        borderRightRadius: "8px",
        padding: "8px 12px 8px 8px"
      }
    }
  },

  tbody: {
    tr: {
      td: {
        borderBottom: "1px solid",
        borderColor: "gray",
        fontFamily: "body",
        fontWeight: "normal",
        fontSize: "14px",
        color: "primary.text",
        lineHeight: "20px",
        padding: "12px 8px"
      },

      "td:first-of-type": {
        padding: "12px 8px 12px 12px"
      },

      "td:last-of-type": {
        padding: "12px 12px 12px 8px"
      }
    }
  }
});

export const TableTheme = defineMultiStyleConfig({
  baseStyle
});
