// import logo from './logo.svg';
// import './App.css';


import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FallBackFazy from './assets/FallBackLazy/FallBackFazy';
import Loadding from './components/Loading/Loadding';
import Router from "./routers/Router"


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
