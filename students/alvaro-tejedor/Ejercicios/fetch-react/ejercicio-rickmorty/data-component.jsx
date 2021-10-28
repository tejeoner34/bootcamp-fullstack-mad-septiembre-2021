class Data extends React.Component{
    constructor(){
        super();
        this.state = {
            data:{
                results:[]
            },
            dataOriginal: {
                results:[]
            }
        }
    }

    async componentDidMount(){
        const r = await fetch('https://rickandmortyapi.com/api/character');
        const d = await r.json();
        this.setState({data: d, dataOriginal: d});
        console.log(this.state.data.results)
    }

    filtrador(e){
        const item = e.target.value.toLowerCase();
        const filtrados = this.state.dataOriginal.results.filter(i=> i.name.toLowerCase().includes(item));
        this.setState({data: {results: filtrados}})
        console.log(filtrados)


    }

    render(){
        return (
            <React.Fragment>
                <div className='searchbar-container'>
                    <input onChange={(e)=>{this.filtrador(e)}} type="text" placeholder='filtra por personaje' />
                </div>
                <div className='container'>
                {this.state.data.results.map(i=> <Card data={i}></Card> )}
                </div>
            </React.Fragment>
        )
    }
}