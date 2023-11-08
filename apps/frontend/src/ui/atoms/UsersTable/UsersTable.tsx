import { useFetchAllUsers } from '@nx-react-sandbox/data-access';
import './UsersTable.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
export type UsersTableProps = {};

export function UsersTable(props: UsersTableProps) {
  const { data } = useFetchAllUsers();

  return (
    <table className={'table table-info'}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
