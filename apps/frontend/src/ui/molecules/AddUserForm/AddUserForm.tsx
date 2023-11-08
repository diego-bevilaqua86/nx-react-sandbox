import { AddUserDTO } from '@nx-react-sandbox/data-access';
import { Button, FloatingLabel, Form, FormControl } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AddUserForm.scss';

const defaultValues: AddUserDTO = {
  name: '',
  email: '',
  phone: '',
};

/* eslint-disable-next-line */
export interface AddUserFormProps {
  onSubmit: SubmitHandler<AddUserDTO>;
  onReset?: () => unknown | Promise<unknown>;
}

export function AddUserForm({ onSubmit, onReset }: AddUserFormProps) {
  const { register, getFieldState, formState, handleSubmit } = useForm({ defaultValues });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <FloatingLabel label={'Nome'} controlId={'user-name'}>
        <FormControl
          type='text'
          {...register('name', { required: { value: true, message: 'Insira um nome de usuário.' } })}
        />
        <FormControl.Feedback tooltip type={getFieldState('name').invalid ? 'invalid' : 'valid'}>
          {getFieldState('name').error?.message}
        </FormControl.Feedback>
      </FloatingLabel>
      <FloatingLabel label={'E-mail'} controlId={'user-email'}>
        <FormControl
          type='email'
          {...register('email', { required: { value: true, message: 'Insira o e-mail do usuário.' } })}
        />
        <FormControl.Feedback tooltip type={getFieldState('email').invalid ? 'invalid' : 'valid'}>
          {getFieldState('email').error?.message}
        </FormControl.Feedback>
      </FloatingLabel>
      <FloatingLabel label={'Celular'} controlId={'user-phone'}>
        <FormControl
          type='tel'
          {...register('phone', { required: { value: true, message: 'Insira o celular do usuário.' } })}
        />
        <FormControl.Feedback tooltip type={getFieldState('phone').invalid ? 'invalid' : 'valid'}>
          {getFieldState('phone').error?.message}
        </FormControl.Feedback>
      </FloatingLabel>
      <div className={'d-grid gap-3'} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Button variant={'outline-warning'} type={'reset'}>
          Cancelar
        </Button>
        <Button
          variant={'success'}
          type={'submit'}
          disabled={!formState.isDirty || !formState.isValid || formState.isLoading}
        >
          Cadastrar
        </Button>
      </div>
    </Form>
  );
}

export default AddUserForm;
