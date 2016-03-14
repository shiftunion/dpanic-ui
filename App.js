import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{this.props.txt}{this.props.cat}</h1>

    }
}

// Kinda a type definition
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

// just some sensible defaults for props
App.defaultProps = {
    txt: 'Default props val',
    cat: 23
}


ReactDOM.render(
    <App cat={12} txt="this is the props value" />,
    document.getElementById('app')
)

// has no state!
//const App = () => <h1>Hello Eggheads</h1>

export default App