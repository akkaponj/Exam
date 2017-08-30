import React from 'react';

class Calculator extends React.Component{
    constructor() {
        super();
        this.state={num1:"",num2:""}

    }
    setNum1(N1){
        const NUM1 = N1.target.value;
        this.setState({num1: NUM1});
    }
    setNum2(N2){
        const NUM2 = N2.target.value;
        this.setState({num2: NUM2});
    }
    render(){
        return(
            <div >
                <div>
                    <h1>Calculator</h1><br/>
                    <h1>Num 1 </h1><input onChange={this.setNum1.bind(this)}/><br/>
                    <h1>Num 2 </h1> <input onChange={this.setNum2.bind(this)}/><br/>
                    <h1>Sum = {this.state.num1                                  + this.state.num2}</h1>
                </div>

            </div>
        )
    }
}
export default Calculator;