class App extends React.Component{

    render(){
        return(
            <Board></Board>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('tic-tac-toc')
)