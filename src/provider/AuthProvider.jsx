import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // set observer 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const googleProvider=new GoogleAuthProvider()
    // creating or register user 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // register using google 
    const createGoogleUser=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // update name and photo 
    const updateNamePhoto=(name,photo)=>{
        
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo,
        })
    }
    // login user 
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signout a user 
    const userSignOut=()=>{
        return signOut(auth)
    }
    // forget password 
    const passwordReset=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    // emailREf 
    const [forgetEmail,setForgetEmail]=useState("")
    const emailGetter=(email)=>{
        setForgetEmail(email);
    }
    // context info 
    const info = {
        createUser,
        createGoogleUser,
        userLogin,
        user,
        userSignOut,
        updateNamePhoto,
        passwordReset,
        emailGetter,
        forgetEmail,
        loading,
    }
    


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;