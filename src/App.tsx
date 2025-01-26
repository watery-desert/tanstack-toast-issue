import { useEffect } from 'react';
import { showToast } from './showToast';
import { getData } from './api';

function App() {


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

  return (
    <>
      <h1>Child component</h1>
    </>
  );
}

export default App;
