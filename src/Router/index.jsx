import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Repository } from "../pages/Repository";

export function Router(){
   return(
      <Routes>
         <Route path="/" element={ <Dashboard />} />
         <Route path="/repositorios" element={ <Repository />} />
      </Routes>
   )
}