

class Card extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
           
            <div className={`card ` + this.props.flip}>
                <div className={'div-img'}>
                    <img className={'img'} src="./pexels-carolina-castilla-arias-1716861.jpg" alt="" />
                </div>
                <div>
                    <h2>Pikachu</h2>
                    <p>Fiel compañero de Ash Ketchum</p>
                </div>
            </div>
            
        )
    }
}

