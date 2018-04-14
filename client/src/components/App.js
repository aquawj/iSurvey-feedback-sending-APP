import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';

const Landing = () => <div>landing</div>;
const Dashboard = () => <div>dashboard</div>;
const SurveyNew = () => <div>surveyNew</div>;


const App = () => {
    return (
        <div calssName="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing}/>
                    <Route exact path='/surveys' component={Dashboard}/>
                    <Route path='/surveys/new' component={SurveyNew}/>

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
