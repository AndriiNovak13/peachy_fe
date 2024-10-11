import { Box, Flex } from "@chakra-ui/react";

import { ContentLayoutProps } from "./ContentLayout.types";

import { styles } from "./ContentLayout.styles";

const ContentLayout = ({
  size = "lg",
  children,
  title,
  subtitle,
  additional,
  additionalPosition = "flex-end",
  action = null
}: ContentLayoutProps) => {
  const { headerStyles, titleStyles } = styles[size];

  return (
    <Flex direction="column" padding="24px 32px">
      <Flex
        as="header"
        minHeight="40px"
        alignItems="center"
        justifyContent="space-between"
        gap="30px"
        {...headerStyles}
      >
        <Flex direction="column" {...titleStyles}>
          <Flex alignItems={additionalPosition} fontWeight="700" gap="10px">
            {title}

            <Box fontSize="18px" color="mediumGray" lineHeight="24px">
              {additional}
            </Box>
          </Flex>

          <Box
            as="span"
            fontWeight="normal"
            fontSize="12px"
            color="mediumGray"
            lineHeight="16px"
          >
            {subtitle}
          </Box>
        </Flex>

        <Flex flex={1} alignItems="center" justifyContent="flex-end" gap="30px">
          {action}
        </Flex>
      </Flex>

      {children}
    </Flex>
  );
};

export default ContentLayout;
