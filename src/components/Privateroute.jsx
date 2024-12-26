import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "./Authprovider";
import Load from "./Load";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation()
    if(loading){
        return <Load></Load>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default Privateroute;