class Data extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                
            
            
            ],
            searchBarItems: ''
        }
    }

    async componentDidMount(){
        const r = await fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json');
        const d = await r.json();
        this.setState({data: d});
    }




    editSearchItems(e){
        this.setState({searchBarItems: e.target.value})
    }

    render(){
        return(
            <React.Fragment>
                <input  type="text" value={this.state.searchBarItems} onChange={this.editSearchItems()} placeholder="escribe un aeropuerto" />
                <div className='container'>
               {this.state.data.map(i=> <PrintAirport data={i}></PrintAirport>)}
               </div>
            </React.Fragment>
        )
    }
}