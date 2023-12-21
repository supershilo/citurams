const isAuthenticated = () =>{
    const userData = sessionStorage.getItem('userEmail');
    return userData !==null;
};

export {isAuthenticated};