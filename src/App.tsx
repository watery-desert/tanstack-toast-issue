// import { useEffect } from 'react';
// import { showToast } from './showToast';
// import { getData } from './api';
import { getRouteApi } from '@tanstack/react-router';

const App = () => {
  // ⚠️ Fetching data using useEffect
  // uncomment this to see my desired result

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       await getData();
  //     } catch(error) {
  //       const err = error as Error
  //       console.log(err.message)
  //       showToast(err.message)
  //     }
  //   };
  //   fetch();
  // }, []);

  const routeApi = getRouteApi('/');
  const data = routeApi.useLoaderData();

  return (
    <>
      <h1>Data from API {data}</h1>
    </>
  );
};

export default App;
