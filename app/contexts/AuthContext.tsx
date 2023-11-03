import { createContext, useContext, useEffect,useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: {token:string | null; authenticated: boolean | null};
    onLogin?: (email: string,password:string) => Promise<any>;
    onLogout?: () => Promise<any>;

}

const TOKEN_KEY = 'my_jwt';
export const API_URL = 'https://ryyjfkjn7qiiwjsbybwatujpn40ioygy.lambda-url.us-east-1.on.aws/';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState,setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadToken =async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                    token: token,
                    authenticated: true,
                });
            }
            
        }
        loadToken();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const result = await axios.post(`${API_URL}api/auth/login`,{email,password})
            console.log("Wow",result);
            setAuthState({
                token: result.data.token,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY,result.data.token);

            return result;
        } catch (error) {
            return { error: true,msg: (error as any).response.data.msg};
        }
    };

    const logout = async () => {
        //Delete token
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        //Update HTTP headers
        axios.defaults.headers.common['Authorization'] = '';
        //Reset Auth State
        setAuthState({
            token: null,
            authenticated: false,
        });
    };


    const value = {
        onLogin: login,
        onLogout: logout,
        authState
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}