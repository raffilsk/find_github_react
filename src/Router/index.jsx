import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { User } from "../pages/User";

export function Router(){
   return(
      <Routes>
         <Route path="/" element={ <Dashboard />} />
         <Route path="/users/:user" element={ <User />} />
      </Routes>
   )
}