
class Boton extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            saludo: 'hola',
        }
    }


    // render(){
    //     return(<React.Fragment>
    //         <p>{this.state.saludo}</p>
    //         <button onClick= {() => {this.setState({saludo: 'adios'})}}>Click</button>
    //         </React.Fragment>
    //     )
    // }

    updateSaludo(){ // podemos crear funciones antes del render para luego pasarlas en el render
        this.setState(oldState =>{
            return{
                saludo: oldState.saludo.toLowerCase() === 'hola'? 'adios':'hola'
            }
        })
    }

    render(){
        return(
            <div>
            <p>{this.state.saludo}</p>
            <button onClick= {() => this.updateSaludo()}>Click</button> {/* pasamos la funcion que hemos creado */}
            </div>
        )
    }
}