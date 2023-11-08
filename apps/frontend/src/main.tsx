import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, ToastContainerProps, toast } from 'react-toastify';
import App from './app';
import './styles.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

const toastDefaultProps: ToastContainerProps = {
  autoClose: 5000,
  position: toast.POSITION.BOTTOM_RIGHT,
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer {...toastDefaultProps} />
    </QueryClientProvider>
  </StrictMode>
);
