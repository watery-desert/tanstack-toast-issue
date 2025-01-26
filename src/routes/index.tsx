import { createFileRoute } from '@tanstack/react-router';
import App from '../App';
import { getData } from '../api';
import { showToast } from '../showToast';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    await getData();

    // ⚠️ here if I use try catch Then I am able 
    // showToast without any console error.

    // try {
    //   await getData();
    // } catch (error) {
    //   showToast(error.message);
    // }
  },
  errorComponent: () => {
    return <h1>Error</h1>;
  },
  onCatch: (error) => {
    showToast(error.message);
  },
});

function RouteComponent() {
  return <App />;
}
