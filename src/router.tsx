import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { SimulationFormPage } from './pages/SimulationFormPage';
import { SimulationHistory } from './pages/SimulationHistory';
import { SimulationResultPage } from './pages/SimulationResultsPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistory />,
      },
    ],
  },
]);
