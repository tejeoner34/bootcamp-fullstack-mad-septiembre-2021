class PokemonList extends React.Component{
    constructor(){
        super();
        this.state= {
            data: {
             sprites:{}   
            }
        }

        
    }

    async componentDidMount(){
        const array = [];
        for(let i = 0; i<1000; i++){
            array.push(i)
        }
        const randomPokemon = Math.floor(Math.random() * array.length);

        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
        const d = await r.json();
        this.setState({data:d})

    }


    render(){
        return(
            <React.Fragment>
                <PokemonCard data={this.state.data}></PokemonCard>
            </React.Fragment>
        )
    }
}