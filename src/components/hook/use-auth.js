const useAuth = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    return isLoggedIn === '1';       
}

export default useAuth;