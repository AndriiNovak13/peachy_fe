import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "12px",

    _hover: {
      _disabled: {
        background: "lightGray.200",
        color: "darkGray.300"
      }
    },

    _disabled: {
      background: "lightGray.200",
      opacity: 1,
      color: "darkGray.300"
    }
  },

  sizes: {
    xl: {
      minWidth: "none",
      height: "56px",
      paddingX: "16px",
      fontSize: "16px",
      width: "100%"
    },

    lg: {
      minWidth: "none",
      height: "48px",
      paddingX: "20px",
      fontSize: "16px",
      width: "100%"
    },

    md: {
      minWidth: "none",
      height: "40px",
      paddingX: "16px",
      fontSize: "14px"
    },

    sm: {
      minWidth: "none",
      height: "32px",
      paddingX: "8px",
      fontSize: "12px",
      borderRadius: "8px"
    }
  },

  variants: {
    primary: {
      bgGradient: "linear(to-r, mintGreen.800, mintGreen.400)",
      color: "white",
      transition: "all 0.3s",

      _hover: {
        bgGradient: "linear(to-r, mintGreen.400, mintGreen.800)",

        _disabled: {
          bgGradient: "linear(to-r, mintGreen.400, mintGreen.800)",
          color: "white"
        }
      },

      _disabled: {
        bgGradient: "linear(to-r, mintGreen.400, mintGreen.800)",
        opacity: 0.8,
        color: "white"
      }
    },

    outline: {
      background: "transparent",
      color: "primary.text",
      borderColor: "gray",

      _hover: {
        background: "lightGray.200",
        color: "darkGray.400",

        _disabled: {
          background: "transparent",
          color: "darkGray.300"
        }
      },

      _disabled: {
        background: "transparent",
        color: "darkGray.300"
      }
    },

    default: {
      background: "gray",
      color: "primary.text",

      _hover: {
        color: "darkGray.400"
      }
    }
  }
});
