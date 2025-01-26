import { createFileRoute } from '@tanstack/react-router';
import App from '../App';
import { getData } from '../api';
import { showToast } from '../showToast';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    return await getData();

    // ⚠️ here if I use try catch Then I am able
    // showToast without any console error.

    // try {
    //   return await getData();
    // } catch (error) {
    //   const err = error as Error;
    //   showToast(err);
    // }
  },
  errorComponent: () => {
    return <h1>Error</h1>;
  },
  onCatch: (error) => {
    showToast(error);
  },
});

function RouteComponent() {
  return <App />;
}
