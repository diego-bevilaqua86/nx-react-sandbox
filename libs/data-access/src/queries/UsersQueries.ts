import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchAll } from '../services/UsersServices';

export const USERS_QUERIES_KEYS: Record<string, () => Array<string>> = {
  fetchAll: () => ['users', 'fetch', 'all'],
};

export const useFetchAllUsers = () => {
  const { data } = useSuspenseQuery({
    queryKey: USERS_QUERIES_KEYS.fetchAll(),
    queryFn: fetchAll,
  });

  return { data };
};
