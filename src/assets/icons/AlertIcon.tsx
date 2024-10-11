import { Icon } from "@chakra-ui/react";

const AlertIcon = ({ ...props }) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99935 2.83341C6.04131 2.83341 2.83268 6.04204 2.83268 10.0001C2.83268 13.9581 6.04131 17.1667 9.99935 17.1667C13.9574 17.1667 17.166 13.9581 17.166 10.0001C17.166 6.04204 13.9574 2.83342 9.99935 2.83341ZM1.16602 10.0001C1.16602 5.12157 5.12083 1.16675 9.99935 1.16675C14.8779 1.16675 18.8327 5.12157 18.8327 10.0001C18.8327 14.8786 14.8779 18.8334 9.99935 18.8334C5.12083 18.8334 1.16602 14.8786 1.16602 10.0001ZM9.99935 14.0001C9.53911 14.0001 9.16601 13.627 9.16601 13.1667V13.1316C9.16601 12.6714 9.53911 12.2983 9.99935 12.2983C10.4596 12.2983 10.8327 12.6714 10.8327 13.1316V13.1667C10.8327 13.627 10.4596 14.0001 9.99935 14.0001ZM9.99935 11.0001C9.53911 11.0001 9.16601 10.627 9.16601 10.1667L9.16602 6.16675C9.16602 5.70651 9.53911 5.33341 9.99935 5.33341C10.4596 5.33341 10.8327 5.70651 10.8327 6.16675L10.8327 10.1667C10.8327 10.627 10.4596 11.0001 9.99935 11.0001Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default AlertIcon;
