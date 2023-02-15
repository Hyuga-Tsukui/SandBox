import {ReactLocation, Router as RootRouter} from "@tanstack/react-location"
import {Home} from "./pages/Home";
import React from "react";
import {About} from "./pages/About";


type Props = {
    children: React.ReactNode
}

const location = new ReactLocation()
export const Router: React.FC<Props> = ({children}) => {
    return (
        <RootRouter
            location={location}
            routes={[
                {path: "/", element: <Home/>},
                {path: "about", element: <About/>}
            ]}
        >
            {children}
        </RootRouter>

    )
}