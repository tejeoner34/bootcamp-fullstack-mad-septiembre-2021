class PokemonCard extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className='card'>
                <div className='info'>
                    <div className='img-container'>
                    <img src={this.props.data.sprites.front_default} alt=""/>
                    </div>
                    <h1 className='name'>{this.props.data.name}</h1>
                    <p>{this.props.data.id}</p>
                    {/* <p className='localizacion'>{this.props.data.location.name}</p> */}
                </div>
                
            </div>
        )
    }
}