/* eslint-disable @typescript-eslint/unbound-method */

import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { modalAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "overlay"
  },

  dialog: { background: "background", padding: "24px", gap: "24px" },

  header: {
    padding: "0"
  },

  body: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontWeight: "400",
    padding: "0"
  },

  footer: {
    padding: "0",
    gap: "10px"
  },

  closeButton: {
    top: "12px",
    right: "12px",
    background: "transparent",
    width: "32px",
    height: "32px",
    padding: "8px",
    borderRadius: "8px",
    borderWidth: "1px",
    borderColor: "gray",
    boxShadow: "none !important",

    _hover: {
      background: "transparent"
    }
  }
});

const danger = definePartsStyle({
  dialog: {
    padding: "24px",
    background: "background"
  }
});

export const ModalTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { danger }
});
