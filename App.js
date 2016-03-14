import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state',
            catDog: 0
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
                <Widget txt={this.state.txt} update={this.update}/>
            </div>
        )
    }
}

const Widget = (props) => {
    return (
        <div>
            <input type="text"
                   onChange={props.update}/>
            <h1>{props.txt}</h1>
        </div>
    )
}

// Kinda a type definition
App.propTypes = {
    cat: React.PropTypes.number.isRequired
}

// just some sensible defaults for props
App.defaultProps = {
    cat: 23
}


ReactDOM.render(
    <App cat={12} txt="this is the props value"/>,
    document.getElementById('app')
)

// has no state!
//const App = () => <h1>Hello Eggheads</h1>

export default App