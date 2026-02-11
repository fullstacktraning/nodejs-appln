import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard"
import Error from "./Error";
import Laptops from "./Laptops";
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                        <Route path="dashboard/laptops" element={<Laptops></Laptops>}></Route>
                    </Route>
                    <Route path="/error" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;