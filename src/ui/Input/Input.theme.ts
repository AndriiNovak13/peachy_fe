import {
  createMultiStyleConfigHelpers,
  defineStyle,
  defineStyleConfig
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: "12px",
    fontWeight: "normal",
    fontSize: "14px",
    color: "primary.text",
    caretColor: "#15C0AC",

    _placeholder: {
      color: "darkGray.200"
    },

    _invalid: {
      caretColor: "#EE3148"
    }
  },
  element: {
    height: "100%"
  }
});

const variantOutline = definePartsStyle({
  field: {
    bg: "transparent",
    borderColor: "darkGray.100",

    _focus: {
      borderColor: "primary.color",
      boxShadow: "green"
    },

    _hover: {
      borderColor: "darkGray.100"
    },

    _invalid: {
      borderColor: "red.1000",
      boxShadow: "red",
      caretColor: "#EE3148",

      _hover: {
        borderColor: "red.1000",
        boxShadow: "red"
      },

      _focus: {
        borderColor: "red.1000",
        boxShadow: "red"
      },

      _disabled: {
        borderColor: "darkGray.100"
      }
    },

    _disabled: {
      bg: "lightGray.200",
      opacity: 1,

      _hover: {
        borderColor: "darkGray.100"
      }
    }
  }
});

export const InputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline
  },
  sizes: {
    sm: {
      field: {
        height: "40px"
      }
    },
    md: {
      field: {
        height: "48px"
      }
    }
  },
  defaultProps: {
    variant: "outline"
  }
});

const outlineTextareaVariant = defineStyle({
  position: "relative",
  color: "primary.text",
  borderRadius: "12px",
  fontSize: "14px",
  lineHeight: "20px",
  borderColor: "darkGray.100",
  caretColor: "#15C0AC",
  resize: "none",
  overflowY: "scroll",
  padding: "10px 12px",

  _placeholder: {
    color: "darkGray.200"
  },

  _hover: {
    borderColor: "darkGray.100"
  },

  _focus: {
    borderColor: "primary.color",
    boxShadow: "green"
  },

  _invalid: {
    borderColor: "red.1000",
    boxShadow: "red",
    caretColor: "#EE3148",

    _hover: {
      borderColor: "red.1000",
      boxShadow: "red"
    },

    _focus: {
      borderColor: "red.1000",
      boxShadow: "red"
    },

    _disabled: {
      borderColor: "darkGray.100"
    }
  },

  _disabled: {
    bg: "lightGray.200",
    opacity: 1,

    _hover: {
      borderColor: "darkGray.100"
    }
  },

  "&::-webkit-scrollbar": {
    width: "8px"
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: "6px",
    margin: "6px 0"
  },

  "&::-webkit-scrollbar-thumb ": {
    backgroundColor: "darkGray.100",
    borderRadius: "6px",
    border: "3px solid",
    borderColor: "#FFFFFF"
  }
});

export const TextareaTheme = defineStyleConfig({
  variants: {
    outline: outlineTextareaVariant
  },
  sizes: {
    sm: {
      height: "100px"
    },
    md: {
      height: "178px"
    },
    lg: {
      height: "190px"
    },
    xl: {
      height: "228px"
    }
  }
});
