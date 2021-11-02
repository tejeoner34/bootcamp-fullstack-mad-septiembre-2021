class Header extends React.Component{

    render(){
        return(
            <div className='header'>
                <div className='header__img-container'>
                    <img className='header__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />
                </div>
                <nav className='header__nav'>
                    <ul className='header__list'>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/home">Home</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/pokemon">Pokemon</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/Rick">Rick and Morty</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}