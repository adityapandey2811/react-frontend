export const login = (username, password) => {
    const apiUrl = 'http://localhost:8077/authenticate/login';
  
    return async (dispatch) => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        const data = await response.json();
        const token = data.token; 
  
        if (!data.completed) {
          console.error('Authentication failed');
          return;
        }
  
        dispatch({ type: 'LOGIN_SUCCESS', payload: { username, token} });
        console.info("Logged in")
  
      } catch (error) {
        console.error('Error during authentication', error);
      }
    };
  };


//   {
//     "userLoginResponse": true,
//     "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmcyMCIsImlhdCI6MTcwMDAzOTcxOSwiZXhwIjoxNzAwMDQxNTE5fQ.WupxB9au05PF1ONV3tr9RhteB89QM3P95VeXOV4G9o8"
// }