import { PlacementWithLogical } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

export interface MenuProps {
  value?: string;
  icon?: ElementType;
  menuLabel?: string;
  autoSelect?: boolean;
  placement?: PlacementWithLogical;
  menuItems?: MenuItemProps[];
  children?: ReactNode;
}

export interface MenuItemProps {
  icon?: ElementType;
  label: string;
  color?: string;
  onClick: () => void;
}
