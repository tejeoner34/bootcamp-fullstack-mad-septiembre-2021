class App extends React.Component{

    render(){
        return(
                <React.Fragment>
                    <DivColorComponent></DivColorComponent>
                </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)