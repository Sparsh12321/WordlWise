import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {CitiesProvider} from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthenticationContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import Product from "./pages/Product"
// import Pricing from "./pages/Pricing"
// import HomePage from "./pages/homepage"
// import PageNotFound from "./pages/PageNotFound"
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
const HomePage=lazy(()=>import("./pages/Homepage"));
const Product=lazy(()=>import("./pages/Product"));
const Pricing=lazy(()=>import("./pages/Pricing"));
const PageNotFound=lazy(()=>import("./pages/PageNotFound"));
const AppLayout=lazy(()=>import("./pages/AppLayout"));
const Login=lazy(()=>import("./pages/Login"));

import CityList from "../components/CityList";
import Form from "../components/Form";

import City from "../components/City";

import CountryList from "../components/CountryList";
import SpinnerFullPage from "../components/SpinnerFullPage";

export default function App(){
   
 
    return( 
        <AuthProvider>
    <CitiesProvider>
         <BrowserRouter>
         <Suspense fallback={<SpinnerFullPage/>}>
 <Routes>
  <Route path="product" element={<Product/>}/>
 <Route path="pricing" element={<Pricing/>}/>
 <Route index element={<HomePage/>}/>
  <Route path="app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>

  <Route  index element={<Navigate replace to="cities"/>}/>
  <Route path="cities" element={<CityList/>}/>
  
  <Route path="cities/:id" element={<City/>}></Route>
  <Route path="countries" element={<CountryList />}/>


  <Route path="form" element={<Form/>}/>
  </Route>
  <Route path="login" element={<Login/>}/>
 <Route path="*" element={<PageNotFound/>}/>
 </Routes>
 </Suspense>
 </BrowserRouter>
 </CitiesProvider>
 </AuthProvider>);
}
// dist/assets/index-7783c38f.css   30.25 kB │ gzip:   5.08 kB
// dist/assets/index-b93453a3.js   509.49 kB │ gzip: 148.67 kB