export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type AddUserDTO = Omit<User, 'id'>;

export type PatchUserDTO = Partial<User>;
