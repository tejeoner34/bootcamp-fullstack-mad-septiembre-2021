let prueba = 0;
// if(localStorage.getItem('prueba') === null){
//     prueba = 0;
// }else{
//     prueba = localStorage.getItem('prueba');
// }

class App extends React.Component{

    render(){
        return <React.Fragment>
            <Header></Header>
            <BotonCreador></BotonCreador>
            <HolaMundo></HolaMundo>
            {prueba ===0? <Boton></Boton>: <ParrafoLike></ParrafoLike> } {/*hacemos un ternario, si prueba es igual a 0 que nos muestre el boton y sino el parrafo*/}
            <ContainerRed></ContainerRed>
            <Card></Card>
            <Footer></Footer>

        </React.Fragment>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('div-react')
);



// hacemos un evento seleccionando el boton creado en el componente button.
 document.querySelector('.buttonguay').addEventListener('click', e=> {
     prueba++; // sumamo 1 a prueba para que el resultado del condicional de arriba cambie
     ReactDOM.render( // volvemos a rederizar el contenido
        <App/>,
        document.getElementById('div-react')
    
    );
    // localStorage.setItem('prueba', prueba);

 })



