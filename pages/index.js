import Home from './home';

/* 
  Dynamic import example for future reference
  import dynamic from 'next/dynamic';

  const Home = dynamic(() => import('./home'), {
    loading: () => <div>loading...</div>,
  });
*/

export default () => {
  return <Home />;
};
