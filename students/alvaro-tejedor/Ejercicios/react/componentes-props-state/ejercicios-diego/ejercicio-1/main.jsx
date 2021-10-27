class App extends React.Component{

    render(){
        return(
            <React.Fragment>
                <BotonDOM></BotonDOM>
                <ButtonCards></ButtonCards>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)