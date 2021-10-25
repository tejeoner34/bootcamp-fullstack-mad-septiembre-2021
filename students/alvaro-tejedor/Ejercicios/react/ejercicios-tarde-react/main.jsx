class App extends React.Component{
    render(){
        return (
            <div>
                <Header></Header>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)