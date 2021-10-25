

class Card extends React.Component{
    render(){
        return(
           <div className='card__container'>
            {Array(7).fill(
            <div className='card'>
                <div className={'div-img'}>
                    <img className={'img'} src="./pexels-carolina-castilla-arias-1716861.jpg" alt="" />
                </div>
                <div>
                    <h2>Pikachu</h2>
                    <p>Fiel compañero de Ash Ketchum</p>
                </div>
            </div>)}
            </div>
        )
    }
}


