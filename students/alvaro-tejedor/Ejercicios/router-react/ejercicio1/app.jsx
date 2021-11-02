class App extends React.Component{


    render(){
        return(
            <ReactRouterDOM.BrowserRouter>
                <Header></Header>

                <ReactRouterDOM.Switch>
                    
                    <ReactRouterDOM.Route path="/pokemon">
                        <PokemonList></PokemonList>
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/rick">
                        <Data></Data>
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/">
                    <Home></Home>
                    </ReactRouterDOM.Route>

                </ReactRouterDOM.Switch>

                <Footer></Footer>

                    



            </ReactRouterDOM.BrowserRouter>

        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)