import { Link, Outlet } from "react-router-dom";

const Dashboard = ()=>{
    return(
        <>
             <Link to="dashboard/laptops">Laptops</Link>

             <br></br><br></br>

             <Outlet></Outlet>
        </>
    )
}
export default Dashboard;