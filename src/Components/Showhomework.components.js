import React from 'react';

class Showhomework extends React.Component {
    render() {
        const location = this.props.location;
        const params = this.props.match.params;

        var myObject = JSON.parse(JSON.stringify(location, null, 2));

        return (
            <div>
                <h1>This is Show Homework</h1>



                {location.search !== "" ?
                    <div>
                        <h2>
                            Text your insert is :<font color="#1e90ff">{JSON.stringify(location.param, null, 2)}</font>
                        </h2>

                    </div>
                    :null}

            </div>
        );
    }
}

export default Showhomework;