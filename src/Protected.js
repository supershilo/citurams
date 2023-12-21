import { Navigate } from "react-router-dom";

const Protected = ({isUserAuthenticated, children})=>{
    if(!isUserAuthenticated){
        return <Navigate to="/" replace />;
    }
    return children;
};

export default Protected;