import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom';
import {Home,BasicRouting,Blocking,Miss,NoMatch,Recursive,QueryParams,Protected,Login,Homework,Showhomework} from './Components';
import fakeAuth from "./Auth";
import routes from './routing-config';


class App extends Component {
    constructor() {
        super();
        this.age = "21";
        this.state = {name: "Akkapon", age: "21"};
    }

    onClick() {
        this.setState({name: "Keng"})
    }

    setAge(e) {
        const age = e.target.value;
        this.setState({age: age});
    }

        getVal = () => {
            return "akkapon";
        }
        render()
        {

            const myname = "Akkapon"
            return (
                <BrowserRouter>
				{/*<div class="App-header">*/}
					<div className="App">
						<div className="App-header">
							<img src={logo} className="App-logo" alt="logo"/>
                            <ul>
                                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/BasicRouting" activeClassName="active">BasicRouting</NavLink></li>
                                <li><NavLink to="/Blocking" activeClassName="active">Blocking</NavLink></li>
                                <li><NavLink to="/Miss" activeClassName="active">Miss</NavLink></li>
                                <li><NavLink to="/Recursive" activeClassName="active">Recursive</NavLink></li>
                                <li><NavLink to="/Protected" activeClassName="active">Protected</NavLink></li>
                                <li><NavLink to="/Login" activeClassName="active">Login</NavLink></li>
                                <li><NavLink to="/Homework" activeClassName="active">Homework</NavLink></li>
                            </ul>
							{/*<h2>Welcome to React</h2>*/}
						</div>
						{/*<div className="App-intro">*/}
							{/*To get started, edit <code>src/App.js</code> and save to reload.*/}
						{/*</div>*/}
                        <div>
                            <switch>
                                {<div>
                                    <Route path="/" component={Home} exact={true} />
                                    <Route path="/BasicRouting" component={BasicRouting}/>
                                    <Route path="/Blocking" component={Blocking}/>
                                    <Route path="/Miss" component={Miss}/>
                                    <Route path="/Recursive" component={Recursive}/>
                                    <Route path="/QueryParams" component={QueryParams}/>
                                    <Route path="/Login" component={Login}/>
                                    <Route path="/Homework" component={Homework}/>
                                    <Route path="/Showhomework" component={Showhomework}/>

                                    <Route path="/Protected" component={() =>
                                        (fakeAuth.isAuthenticated ?
                                            (<Protected />) :
                                            (<Redirect to={{pathname: "/Login", state: {from: "/Protected"}}}/> ))} />
                                </div>}
                                {/*{routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}*/}
                                {/*<Route component={NoMatch}/>*/}
                            </switch>
                            {/*{routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}*/}
                        </div>
					</div>
					{/*<div className="App-header1">*/}
						{/*<div>Hello ,{myname}</div>*/}
						{/*<div>Calculate 3+2 = {3 + 2}</div>*/}
						{/*<div>Call function {(() => {*/}
                            {/*return 1234*/}
                        {/*})()}</div>*/}
						{/*<div>{this.getVal}</div>*/}
						{/*<div>{this.age}</div>*/}
						{/*<div>*/}
							{/*<input onChange={this.setAge.bind(this)}></input><br/>*/}
							{/*<button onClick={this.onClick.bind(this)}>Rename</button>*/}
							{/*<Header title="Test title ^_^"/>*/}
							{/*<Header title="Keng ^_^"/>*/}
							{/*<Header title={this.state.name}/>*/}

						{/*</div>*/}
						{/*<div>*/}
							{/*<Header/>*/}
						{/*</div>*/}

						{/*<div>*/}
							{/*<Footer/>*/}
						{/*</div>*/}
						{/*<div>*/}
							{/*<Calculator/>*/}
						{/*</div>*/}
						{/*<div>Myname : {this.state.name}<br/> Age : {this.state.age}</div>*/}
					{/*</div>*/}

				{/*</div>*/}
                </BrowserRouter>
            );
        }

}

export default App;
