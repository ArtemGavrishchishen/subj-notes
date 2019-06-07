const getToken = state => state.auth.token;
const getIsAuthenticated = state => state.auth.isAuthenticated;

export default { getIsAuthenticated, getToken };
