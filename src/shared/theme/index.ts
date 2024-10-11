import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { styles } from "./styles";
import { components } from "./components";
import { shadows } from "./shadows";
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
  semanticTokens: {
    colors
  },
  config,
  styles,
  fonts,
  components,
  shadows,
  breakpoints
});
