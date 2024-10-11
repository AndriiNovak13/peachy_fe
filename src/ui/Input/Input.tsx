import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Icon,
  forwardRef,
  InputLeftElement,
  Text,
  Box,
  Flex
} from "@chakra-ui/react";

import { FormField } from "../FormField";
import { If } from "@/components";

import { AlertIcon, ClosedEyeIcon, OpenedEyeIcon } from "@/assets/icons";

import { useBoolean } from "@/shared/hooks";

import { InputProps, TextareaProps } from "./Input.types";

const Input = forwardRef(
  (
    {
      value,
      onChange,
      label,
      errorMessage,
      size = "sm",
      asTag: Tag = ChakraInput,
      maxLength,
      isDisabled,
      isPassword = false,
      icon = null,
      warningInfo,
      ...props
    }: InputProps | TextareaProps,
    ref
  ) => {
    const { value: showPassword, toggle: toggleShowPassword } =
      useBoolean(false);

    const valueLength = value?.length ?? 0;

    return (
      <FormField label={label} errorMessage={errorMessage}>
        <InputGroup>
          {icon ? (
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          ) : null}

          <Tag
            ref={ref}
            type={!isPassword || showPassword ? "text" : "password"}
            size={size}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            isDisabled={isDisabled}
            isInvalid={maxLength && valueLength >= maxLength}
            {...props}
          />

          <If condition={isPassword}>
            <InputRightElement
              cursor={isDisabled ? "not-allowed" : "pointer"}
              onClick={!isDisabled ? toggleShowPassword : undefined}
            >
              <Icon
                as={showPassword ? OpenedEyeIcon : ClosedEyeIcon}
                boxSize="20px"
                color={isDisabled ? "darkGray.200" : "darkGray.300"}
              />
            </InputRightElement>
          </If>
        </InputGroup>
        <If condition={!!maxLength}>
          <Text
            width="100%"
            textAlign="right"
            fontSize="10px"
            lineHeight="12px"
            color={
              maxLength && valueLength >= maxLength
                ? "red.1000"
                : "darkGray.200"
            }
            padding="5px 0 0"
          >
            {valueLength}/{maxLength}
          </Text>
        </If>

        <If
          condition={!!warningInfo && !!maxLength && valueLength >= maxLength}
        >
          <Flex
            borderRadius="12px"
            bg="orange.300"
            flex="1"
            gap="10px"
            fontSize="14px"
            lineHeight="20px"
            alignItems="center"
            padding="12px 16px"
            marginTop="8px"
          >
            <Icon as={AlertIcon} boxSize="20px" color="darkOrange" />

            <Box fontWeight="400" color="darkOrange">
              {warningInfo}
            </Box>
          </Flex>
        </If>
      </FormField>
    );
  }
);

export default Input;
