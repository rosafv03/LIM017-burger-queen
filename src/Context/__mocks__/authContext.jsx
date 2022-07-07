export const signInWithEmailAndPassword = (auth, email, password) => Promise.resolve({ user: { email: email, password: password } });
export const getAuth = () => Promise.resolve({});