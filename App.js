import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <Button1>I <Heart/> React</Button1>
    }
}

class Button1 extends React.Component {
    render() {

        return <button>{this.props.children}</button>
    }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

export default App
