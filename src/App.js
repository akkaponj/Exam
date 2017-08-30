import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.components';
import Footer from './Components/Footer.components';
import Calculator from './Components/Calculator.components';
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
				<div class="App-header">
					<div className="App">
						<div className="App-header">
							<img src={logo} className="App-logo" alt="logo"/>
							<h2>Welcome to React</h2>
						</div>
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
					</div>
					<div className="App-header1">
						<div>Hello ,{myname}</div>
						<div>Calculate 3+2 = {3 + 2}</div>
						<div>Call function {(() => {
                            return 1234
                        })()}</div>
						<div>{this.getVal}</div>
						<div>{this.age}</div>
						<div>
							<input onChange={this.setAge.bind(this)}></input><br/>
							<button onClick={this.onClick.bind(this)}>Rename</button>
							<Header title="Test title ^_^"/>
							<Header title="Keng ^_^"/>
							<Header title={this.state.name}/>

						</div>
						<div>
							<Header/>
						</div>

						<div>
							<Footer/>
						</div>
						<div>
							<Calculator/>
						</div>
						<div>Myname : {this.state.name}<br/> Age : {this.state.age}</div>
					</div>

				</div>
            );
        }

}

export default App;
