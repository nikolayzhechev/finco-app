import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const register = (email, password) => {
  const auth = getAuth();
  try {
    const userCredentials = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredentials;
  } catch (error) {
    const errorCode = error.errorCode;
    const errorMessage = error.meesage;
    console.log(errorCode, errorMessage);
  }
};

export const login = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredentials;
  } catch (error) {
    const errorCode = error.errorCode;
    const errorMessage = error.meesage;
    console.log(errorCode, errorMessage);
  }
};

// export const getUserState = async () => {
//   const auth = getAuth();

//   const userResopsne = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       return user;
//     } else {
//       return user;
//     }
//   });
// };

export const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
};
