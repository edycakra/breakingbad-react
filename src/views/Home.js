import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import CharacterList from '../components/Characters/CharacterList'
import CharacterDetail from '../components/Characters/CharacterDetail'

export default function Home() {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/characters'>
                        <CharacterList />
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/characters' />
                    </Route>
                    <Route exact path='/:id'>
                        <CharacterDetail />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
