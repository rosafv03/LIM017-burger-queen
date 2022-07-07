export const signInWithEmailAndPassword = async (auth, email, password) => Promise.resolve({ user: { email: email, password: password } });

export const getAuth = () => Promise.resolve({});