


class Visible extends React.Component{

    constructor(props){
        super(props)

        this.changeVisibilityState = this.changeVisibilityState.bind(this)
        this.state = {
            isVisible: false
        }
    }

    changeVisibilityState(){
        this.setState( (prevState) =>{
            return{
                isVisible: !prevState.isVisible
            }
        })

    }

    render(){
        return (
            <div>
                <h1>Visbility Toggle</h1>
                <button onClick={this.changeVisibilityState}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.isVisible && <p>This is some secret fbi nsa illuminati shit</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'))



// const appRoot = document.getElementById('app')

// let visible = false;




// const renderApplication = ()=>{
//     const template = 
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={changeVisibilityState}>{visible ? 'Hide Details': 'Show Details'}</button>
//      {visible && <p>This is some secret fbi nsa illuminati shit</p>}
//     </div>

//     ReactDOM.render(template, appRoot)
// }


// const changeVisibilityState = ()=>{
//     visible = !visible

//     renderApplication();
// }






// renderApplication()
