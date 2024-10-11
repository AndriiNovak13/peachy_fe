import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

import { If } from "@/components";

import { FormFieldProps } from "./FormField.types";

const FormField = ({ children, label, errorMessage }: FormFieldProps) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <If condition={!!label}>
        <FormLabel>{label}</FormLabel>
      </If>

      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
