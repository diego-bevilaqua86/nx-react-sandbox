import { AddUserDTO, useAddUser } from '@nx-react-sandbox/data-access';
import { Modal } from 'react-bootstrap';
import AddUserForm from '../AddUserForm/AddUserForm';
import './AddUserModal.scss';

export type AddUserModalProps = {
  isShowing: boolean;
  onClose: () => unknown | Promise<unknown>;
};

export function AddUserModal({ isShowing, onClose }: AddUserModalProps) {
  const handleAddUserSettled = () => onClose();

  const { mutateAsync: addUser } = useAddUser({ onSettled: handleAddUserSettled });

  const handleSubmit = (event: AddUserDTO) => addUser(event);

  return (
    <Modal show={isShowing} backdrop={'static'} centered={true} size={'lg'} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddUserForm onSubmit={handleSubmit} onReset={onClose} />
      </Modal.Body>
    </Modal>
  );
}

export default AddUserModal;
