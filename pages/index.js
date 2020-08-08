import Home from './home';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

/* 
  Dynamic import example for future reference
  import dynamic from 'next/dynamic';

  const Home = dynamic(() => import('./home'), {
    loading: () => <div>loading...</div>,
  });
*/
const store = createStore(reducer);

export default () => {
  return(
  		<Provider store={store} >
  			<Home />
  		</Provider>	
  );
};
