import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    incrementBy10: () => dispatch({ type: "INCREMENT BY 10" }),
    decrementBy10: () => dispatch({ type: "DECREMENT BY 10" }),
    reset: () => dispatch({ type: "RESET" })
});




const CounterContainer = ({ counter, increment, decrement, incrementBy10, decrementBy10, reset }) => (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementBy10}>Increment by 10</button>
        <button onClick={decrementBy10}>Decrement by 10</button>
        <button onClick={reset}>Reset</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);