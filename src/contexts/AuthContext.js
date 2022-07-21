import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { doc, setDoc, getFirestore, getDoc } from 'firebase/firestore';
import app from '../firebase';

const AuthContext = React.createContext();
export const db = getFirestore(app);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userRef = currentUser ? doc(db, 'users', currentUser.uid) : null;

    const getUserData = async () => {
      if (userRef) {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };

    getUserData();
  }, [currentUser]);

  function signup(email, password, firstName, lastName) {
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      shoppingCart: [],
      orders: [],
      favorites: [],
      address: '',
    };

    auth.createUserWithEmailAndPassword(email, password).then(async (cred) => {
      const uid = cred.user.uid;
      await setDoc(doc(db, 'users', uid), newUserData);
    });
  }

  function addFavorite(item) {
    console.log(`Favorite: ${item}`);
  }
  function removeFavorite(item) {
    console.log(`Unfavorite: ${item}`);
  }
  function addToShoppingCart(item) {
    console.log(item);
    console.log(`Add to Cart: ${item}`);
  }
  function removeFromShoppingCart(item) {
    console.log(`Remove from Cart: ${item}`);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    //authentication
    login,
    signup,
    logout,
    currentUser,
    resetPassword,
    updateEmail,
    updatePassword,

    /// user data
    userData,
    addFavorite,
    removeFavorite,
    addToShoppingCart,
    removeFromShoppingCart,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
