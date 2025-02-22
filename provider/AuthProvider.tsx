import { PropsWithChildren, createContext } from "react";
import { useEffect , useState,useContext} from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";


type AuthData = {
    session: Session | null
};
export const AuthContext = createContext<AuthData>({

    session:null,
});


export default function AuthProvider({children}: PropsWithChildren<{}>){
const [session,setSession] = useState<Session | null>(null);
    useEffect(()=>{

        const fetchSession = async () => {

            const {data} = await supabase.auth.getSession();
setSession(data.session);
        };

        fetchSession();
    },[])
    return <AuthContext.Provider value={{session}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);