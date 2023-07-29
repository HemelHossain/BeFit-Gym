import React, { createContext, useEffect, useState } from 'react';
import app from '../../Component/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, sendEmailVerification, updateProfile, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const userSignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const facebookSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const emailVerification = () =>{
        return sendEmailVerification(auth.currentUser);

    }

    const profileUpdate = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    

    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged
        (auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified === true || currentUser.providerData[0].providerId === 'facebook.com'){
                setUsers(currentUser);
            }
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, []);

    const logOut = () =>{
        return signOut(auth);
    } 
    




    const authInfo= {
        createUser,
        userSignIn,
        signInWithPopup,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        logOut,
        users,
        setUsers,
        loading,
        emailVerification,
        profileUpdate,
        setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;