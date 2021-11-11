import initializeAuthentication from "../../pages/Login/firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                setUser(user)
            })
            .catch((error) => {

            })
    }

    // sign in using email & password
    const loginUsingPassword = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setUser(user)
                // ...
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

    return {
        createUser,
        loginUsingPassword,
        user,
        isLoading,
        Logout
    }
}

export default useFirebase;