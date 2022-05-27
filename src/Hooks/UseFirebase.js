import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";



const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    useEffect(() => {

    }, []);
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
        // .then(() => { })

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return {
        user,
        signInWithGoogle,
        handleSignOut
    };
}
export default useFirebase;