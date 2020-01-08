


class Counter extends React.Component{

    constructor(props){
        super(props)

        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            }
        })
    }

    handleMinusOne(){
        this.setState( (prevState) => {
            return {
                count: --prevState.count
            }
        })
    }
    handleReset(){
        this.setState( () => {
            return{
                count: 0
            }
        })
    }


    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps={
    count: 0
}

ReactDOM.render(<Counter count={300} />, document.getElementById('app'))





// let count = 0
// let multiplicand = 1
// let dividend = 1;

// const addOne = () =>{
//     count++
//     renderCounterApp()
// }

// const multiplyByTwo = ()=>{
//     multiplicand*=2
//     renderCounterApp()
// }

// const divideByTwo = () => {
//     dividend/=2
//     renderCounterApp()
// }



// const appRoot = document.getElementById('app')


// const renderCounterApp = () =>{
//     const templateTwo =
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
    
//         <h1>MultiplyByTwo: {multiplicand}</h1>
//         <button onClick={multiplyByTwo}>*2</button>
    
//         <h1>divideByTwo: {dividend}</h1>
//         <button onClick={divideByTwo}>/2</button>
//     </div>

//     ReactDOM.render(templateTwo, appRoot)

// }

// renderCounterApp();