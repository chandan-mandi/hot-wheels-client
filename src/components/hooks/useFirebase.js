import initializeAuthentication from "../../pages/Login/firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const createUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                
                setAuthError('')
                // const newUser = {email, displayName : name}

                setUser(user)
                saveUser(email, name, 'POST');
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
    }

    // sign in using email & password
    const loginUsingPassword = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/dashboard'
                history.replace(destination)
                setAuthError("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }

    // state ta dhore rakhar jonno
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                // User is signed out
                // ...
                setUser({})
            }
            setIsLoading(false);
        });

    }, [])

    // logout
    const Logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          }).catch((error) => {
            // An error happened.
          });          
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users' , {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        createUser,
        authError,
        loginUsingPassword,
        user,
        isLoading,
        Logout
    }
}

export default useFirebase;