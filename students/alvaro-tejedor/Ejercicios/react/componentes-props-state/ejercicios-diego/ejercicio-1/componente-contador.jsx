class Contador extends React.Component{
    constructor(props){
        super(props);   
    }

    render(){
        return(
            <React.Fragment>
                <p>Has pulsado {this.props.jacobo} veces</p>
            </React.Fragment>
        )
    }
}