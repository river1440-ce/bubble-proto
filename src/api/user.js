const userRequest = axios.create({
  baseURL: 'https://api/user/'
})

export const postUserLogin = data => userRequest.post('/signIn', data)
export const postUserLogout = data => userRequest.post('/signOut', data)
export const postUserSignUp = data => userRequest.post('/signUp', data)