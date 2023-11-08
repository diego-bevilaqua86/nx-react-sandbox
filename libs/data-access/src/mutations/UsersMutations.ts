import { ErrorMessage } from '@nx-react-sandbox/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { USERS_QUERIES_KEYS } from '../queries/UsersQueries';
import { add } from '../services/UsersServices';
import {
  OnMutateHandler,
  OnMutationErrorHandler,
  OnMutationSettledHandler,
  OnMutationSuccessHandler,
} from '../types/API';
import { AddUserDTO, User } from '../types/User';

export type UseAddUserOptions = {
  onMutate?: OnMutateHandler<AddUserDTO>;
  onSuccess?: OnMutationSuccessHandler<User, AddUserDTO>;
  onError?: OnMutationErrorHandler<Error, AddUserDTO>;
  onSettled?: OnMutationSettledHandler<User, Error, AddUserDTO>;
};

const defaultAddUserSuccess: OnMutationSuccessHandler<User, AddUserDTO> = (data) => {
  toast.success(`Sucesso ao adicionar usuário ${data.name}.`);
};

const defaultAddUserError: OnMutationErrorHandler<Error, AddUserDTO> = (error, variables) => {
  toast.error(ErrorMessage({ error, message: `Erro ao adicionar usuário ${variables.name}` }));
};

export const useAddUser = ({
  onSuccess = defaultAddUserSuccess,
  onError = defaultAddUserError,
  onSettled,
  onMutate,
}: UseAddUserOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: AddUserDTO) =>
      add(user).then((response) => {
        queryClient.invalidateQueries({
          queryKey: USERS_QUERIES_KEYS.fetchAll(),
        });

        return response;
      }),
    onSuccess,
    onError,
    onSettled,
    onMutate,
  });
};
