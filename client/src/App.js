import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Main from "./components/Main";

const App = () => {
    return (
        <div>
<Switch>
    <Route exact path ="/" component = {() => <Main/>} />
    <Redirect to ="/" />
</Switch>
        </div>
    )
}

export default App;