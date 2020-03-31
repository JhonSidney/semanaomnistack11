import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';//importando cada uma das rotas

import Logon from './pages/Logon';//importando paginas de logon
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incident/new" component={NewIncident}/>

            </Switch>
        </BrowserRouter>
    );
}
/** O switch vai permitir que uma rota seja chamada por momento,nunca chama mais de uma rota */