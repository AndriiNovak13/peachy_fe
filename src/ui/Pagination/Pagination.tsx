import { useMemo } from "react";
import RCPagination from "rc-pagination";
import { Flex, Text } from "@chakra-ui/react";

import { PaginationItem } from "./components";

import { PaginationProps, PaginationType } from "./Pagination.types";

import "./Pagination.scss";

const renderShowTotal = (total: number, range: [number, number]) => {
  return (
    <Flex
      gap="3px"
      fontSize="14px"
      color="secondary.text"
      lineHeight="20px"
      sx={{
        "& > span": {
          fontWeight: "bold"
        }
      }}
    >
      Showing <Text as="span">{range[0]}</Text> to{" "}
      <Text as="span">{range[1]}</Text> of <Text as="span">{total}</Text>
    </Flex>
  );
};

const Pagination = ({
  currentPage,
  perPage = 10,
  totalItems = 0,
  hideOnSinglePage = true,
  onChange
}: PaginationProps) => {
  const totalPages = useMemo(
    () => Math.ceil(totalItems / perPage),
    [totalItems]
  );

  const renderPaginationItem = (value: number, type: PaginationType) => {
    return (
      <PaginationItem
        type={type}
        value={value}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    );
  };

  if (hideOnSinglePage && totalPages <= 1) {
    return null;
  }

  return (
    <Flex width="100%" padding="16px 12px">
      <RCPagination
        current={currentPage}
        pageSize={perPage}
        total={totalItems}
        onChange={onChange}
        showTotal={renderShowTotal}
        itemRender={renderPaginationItem}
      />
    </Flex>
  );
};

export default Pagination;
