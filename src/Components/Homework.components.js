import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Homework extends React.Component {

    constructor(){
        super();
        this.state={
            Param : "",
        };
    }
    setParam(p){
        const param = p.target.value;
        this.setState({Param : param});
    }
    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>Please insert text</h1>
                <div>
                    <input onChange={this.setParam.bind(this)}/>
                </div>
                <div>
                    <ul>
                        <li><Link to={{pathname: "Showhomework/level4", search: '?erer:1234' ,
                            param : this.state.Param}} className="active">Insert</Link>
                        </li>
                    </ul>
                </div>
                <div className="rightContent">
                    <Route path="/Showhomework" component={Content} />
                </div>
            </div>
        );
    }
}

export default Homework;