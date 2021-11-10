import React, { useContext } from 'react'
import AuthContext from " ./Stella should provide the route for this file"
import {Redirect, Route} from "react-router-dom"

const PrivateRoute = ({components: PropsComp, ...rest}) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route
        {...rest}
        render={(Props) => {
            return currentUser ? <PropsComp {...Props}/> : <Redirect to="/"/>
        }}
        />
    )
}

export default PrivateRoute
