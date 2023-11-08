// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense, lazy, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorCard from './ui/atoms/ErrorCard/ErrorCard';

const UsersTable = lazy(() => import('./ui/atoms/UsersTable/UsersTable'));
const AddUserModal = lazy(() => import('./ui/molecules/AddUserModal/AddUserModal'));

export function App() {
  const [isShowing, setShowing] = useState(false);
  return (
    <ErrorBoundary fallbackRender={(props) => <ErrorCard message={'Erro ao buscar dados de usuários:'} {...props} />}>
      <Suspense fallback={<p>Carregando dados de usuários...</p>}>
        <Container>
          <Row className={'mb-3'}>
            <Col>
              <Button type={'button'} variant={'primary'} onClick={() => setShowing(true)}>
                Cadastrar usuário
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <UsersTable />
            </Col>
          </Row>
          <AddUserModal isShowing={isShowing} onClose={() => setShowing(false)} />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
