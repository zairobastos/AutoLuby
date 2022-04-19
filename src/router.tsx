import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {GlobalStyle} from './config/global';
import { Home } from './views/home';

import Login from './views/login';

export const Routers = () =>{ 
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}