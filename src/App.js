
import { Switch } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FallBackFazy from './assets/FallBackLazy/FallBackFazy';
import Loadding from './components/Loading/Loadding';
import MainTemplate from './templates/MainTemplate/MainTemplate';


const RouterLazy = React.lazy(() => import('./routers/Router'))



function App() {
  return (
    <BrowserRouter >
      <Loadding></Loadding>
      <Suspense fallback={<FallBackFazy></FallBackFazy>} >
        <RouterLazy></RouterLazy>
        
      </Suspense>

    </BrowserRouter>

  );
}

export default App;
