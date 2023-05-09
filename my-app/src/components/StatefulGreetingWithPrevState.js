import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }, () => {
            console.log('new state',this.state.introduction);
            console.log('new state',this.state.buttonText);
        }
        );
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1,
        })
    }

    incrementByFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}!; {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <p>You've clicked {this.state.count} times!</p>
                <button onClick={() => this.incrementByFive()}>5 increment</button>
                <p>Increment by 5: {this.state.count}</p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;