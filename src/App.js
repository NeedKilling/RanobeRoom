import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'


import {Header, Footer} from './component';
import { Home, Profile, Catalog, Popular, Subscription,BookPage,Text, LogIn, Register} from './Pages'; 

import { AuthProvider } from './hoc/AuthProvider';

function App(){
  const dispatch = useDispatch();
 

  return(
    
    <div className="wrap">
     
      
      <AuthProvider>
      <Header/>
        <Routes>
              <Route  path="/" element={<Home/>}/>
              <Route  path="Catalog" element={<Catalog/>} exact/>
              <Route  path="Profile" element={
              
                  <Profile/>
              
              }/>
              <Route  path="Popular" element={<Popular/>}/>
              <Route  path="Subscription" element={<Subscription/>}/>
              <Route path='Book/:id' element={<BookPage/>}/>
              <Route path='Book/:id/:name' element={<Text/>}/>
              <Route path='LogIn' element={<LogIn/>}/>
              <Route path='Register' element={<Register/>}/>
          </Routes>
        <Footer/>
      </AuthProvider>
      
      
     
      </div>   
  );
};


export default App;
