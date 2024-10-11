export const FIELD_REQUIRED_ERROR_MESSAGE = (fieldName: string = "Field") =>
  `${fieldName} is required!`;

export const FIELD_INCORRECT_ERROR_MESSAGE = (fieldName: string = "Field") =>
  `${fieldName} is incorrect`;

export const EMAIL_ERROR_MESSAGE =
  "Invalid email format. Please use the standard format (e.g., username@example.com)";

export const NO_SPACES_EMAIL_ERROR_MESSAGE = "Email should not contain spaces.";

export const PASSWORD_ERROR_MESSAGE =
  "Password should include at least one uppercase letter, one lowercase letter, one number, and one special symbol.";

export const PASSWORD_LENGTH_ERROR_MESSAGE =
  "The Password field should be at least 8 characters.";

export const REPEAT_PASSWORD_ERROR_MESSAGE =
  "The Repeat Password field should match the data entered in the Password field.";
