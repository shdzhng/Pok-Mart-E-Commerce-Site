import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore';
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
  const userRef = currentUser ? doc(db, 'users', currentUser.uid) : null;

  useEffect(() => {
    if (userRef) {
      const unsub = onSnapshot(userRef, (doc) => {
        setUserData(doc.data());
      });
      return unsub;
    }
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

  async function addFavorite(item) {
    await updateDoc(userRef, {
      favorites: arrayUnion(item.name),
    });
  }
  async function removeFavorite(item) {
    await updateDoc(userRef, {
      favorites: arrayRemove(item.name),
    });
  }
  async function addToShoppingCart(item) {
    await updateDoc(userRef, {
      shoppingCart: arrayUnion(item.name),
    });
  }
  async function removeFromShoppingCart(item) {
    await updateDoc(userRef, {
      shoppingCart: arrayRemove(item.name),
    });
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
