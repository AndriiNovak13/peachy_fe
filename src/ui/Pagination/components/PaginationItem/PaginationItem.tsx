import { Flex, Icon } from "@chakra-ui/react";

import { PaginationItemProps } from "./PaginationItem.types";
import { PaginationType } from "../../Pagination.types";

import { ChevronDownIcon } from "@/assets/icons";

const DISABLED_CONTROL_STYLES = {
  cursor: "not-allowed",
  sx: {
    "& > svg path": {
      fill: "darkGray.200"
    }
  },
  _hover: {
    backgroundColor: "transparent"
  }
};

const renderPaginationValue = (type: PaginationType, value: number) => {
  switch (type) {
    case "page":
      return value;

    case "jump-prev":
    case "jump-next":
      return "...";

    case "prev":
    case "next":
      return (
        <Icon
          as={ChevronDownIcon}
          boxSize="24px"
          transform={`rotate(${type === "prev" ? "90" : "-90"}deg)`}
        />
      );

    default:
      return null;
  }
};

const PaginationItem = ({
  type,
  value,
  currentPage,
  totalPages
}: PaginationItemProps) => {
  const isPrevControl = type === "prev";
  const isNextControl = type === "next";

  const isActivePage = type === "page" && currentPage === value;

  return (
    <Flex
      position="relative"
      zIndex={isActivePage ? "1" : "0"}
      alignItems="center"
      justifyContent="center"
      width="36px"
      height="36px"
      backgroundColor={isActivePage ? "mintGreen.1000" : "transparent"}
      border="1px solid"
      borderColor={isActivePage ? "mintGreen.1000" : "gray"}
      marginLeft="-1px"
      fontWeight="bold"
      fontSize="14px"
      color={isActivePage ? "white" : "primary.text"}
      lineHeight="24px"
      cursor="pointer"
      userSelect="none"
      _hover={{
        backgroundColor: isActivePage ? "tealGreen" : "lightGray.200"
      }}
      {...(isPrevControl && {
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        ...(currentPage === 1 && DISABLED_CONTROL_STYLES)
      })}
      {...(isNextControl && {
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        ...(currentPage === totalPages && DISABLED_CONTROL_STYLES)
      })}
    >
      {renderPaginationValue(type, value)}
    </Flex>
  );
};

export default PaginationItem;
