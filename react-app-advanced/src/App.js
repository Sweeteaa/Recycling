import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const App = ()=>{
  return (
      <Layout>
          <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/profile"} element={<ProfilePage/>}/>
                <Route path={"/authform"} element={<AuthPage/>}/>
            </Routes>
      </Layout>
  )
}

export default App;
