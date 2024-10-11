import {
  Icon,
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";

import { MenuProps } from "./Menu.types";

const Menu = ({
  icon,
  menuLabel,
  autoSelect = false,
  placement = "top-end",
  value,
  menuItems,
  children
}: MenuProps) => {
  const handleMenuClick: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = (event) => {
    event.stopPropagation();
  };

  return (
    <ChakraMenu
      isLazy
      placement={placement}
      autoSelect={autoSelect}
      computePositionOnMount
    >
      {({ isOpen }) => (
        <Box position="relative">
          {icon ? (
            <MenuButton
              as={menuLabel ? Button : IconButton}
              flexShrink="0"
              width={menuLabel ? "fit-content" : "32px"}
              height={menuLabel ? "40px" : "32px"}
              background={isOpen ? "gray" : "transparent"}
              borderRadius={menuLabel ? "12px" : "8px"}
              {...(menuLabel
                ? {
                    leftIcon: (
                      <Icon as={icon} boxSize="24px" color="darkGray.500" />
                    ),
                    border: "1px solid",
                    borderColor: "gray",
                    color: "primary.text"
                  }
                : {
                    icon: <Icon as={icon} boxSize="24px" color="darkGray.500" />
                  })}
              _active={{ background: menuLabel ? "transparent" : "gray" }}
              _hover={{ background: "gray" }}
              onClick={handleMenuClick}
            >
              {menuLabel}
            </MenuButton>
          ) : (
            <MenuButton
              type="button"
              fontWeight="700"
              borderBottom="2px dashed"
              color="mintGreen.1000"
            >
              {menuLabel}
            </MenuButton>
          )}

          {!children ? (
            <MenuList onClick={handleMenuClick}>
              {menuItems?.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  value={value}
                  icon={
                    menuItem.icon ? (
                      <Icon as={menuItem.icon} boxSize="20px" />
                    ) : undefined
                  }
                  color={menuItem.color}
                  onClick={menuItem.onClick}
                  background={
                    value === menuItem.label ? "lightGray.300" : "background"
                  }
                >
                  {menuItem.label}
                </MenuItem>
              ))}
            </MenuList>
          ) : (
            children
          )}
        </Box>
      )}
    </ChakraMenu>
  );
};

export default Menu;
