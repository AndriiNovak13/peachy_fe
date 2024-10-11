import { IUser } from "../../apis";

export interface AddUserModalProps {
  userData?: IUser;
  isOpen: boolean;
  onClose: () => void;
}

export interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  profile: {
    address?: string | null;
    company?: string | null;
    education?: string | null;
    bio?: string | null;
  };
}
