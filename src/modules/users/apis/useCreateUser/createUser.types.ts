export interface CreateUserRequest {
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

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile: {
    id: string;
    address: string | null;
    company: string | null;
    education: string | null;
    bio: string | null;
  };
}

export interface CreateUserResponse {
  user: IUser;
}
