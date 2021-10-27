class BotonDOM extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    addCounter(){
        this.setState(oldState => {
            return {counter: oldState.counter +1}
        })
    }


    render(){
        return(
            <React.Fragment>
                <p>{this.state.counter}</p>
                <button onClick={()=> {this.addCounter()}}>sumar</button>
                <Contador jacobo={this.state.counter}></Contador>
            </React.Fragment>
        )
    }
}