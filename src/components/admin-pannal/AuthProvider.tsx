"use client";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>

    )
}

export default AuthProvider