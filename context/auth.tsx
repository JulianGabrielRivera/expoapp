// import { createContext, useContext,useState,useEffect } from "react";
// import { useSegments,useRouter } from "expo-router";
// const AuthContext = createContext<any>(null);



// const AuthProvider =({children}:React.PropsWithChildren)=>{

//     const rootSegment = useSegments()[0];
//     // allows us to navigate between screens and replace segment, it will tell which segment to render
//     const router = useRouter();
// const [user,setUser]= useState<string | undefined>("")
// useEffect(()=>{

//     if(user === undefined)return;

//     if(!user && rootSegment !== "(auth)"){
//         router.replace("/(auth)/login")
//     }
//     else if(user && rootSegment !== "(app)")
//     {
//         router.replace("/")
//     }
//     // validate this everytime user changes and rootSegment changes.
// },[user,rootSegment])
// const signIn = ()=>{
//     setUser("Beto")
// }


// const signOut = ()=>{
//     setUser("")
// }
// return (
//     <AuthContext.Provider value={{user, signIn,signOut}}>

// {children}

//     </AuthContext.Provider>

// )

// }

// export {AuthContext,AuthProvider};