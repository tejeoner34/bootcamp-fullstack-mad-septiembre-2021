class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : null
        }

    }

    


    render(){
        return(
            <button
             className='square'
             onClick={()=> {this.props.value === null? 'X': 'O'}}>{this.props.value}</button>
        )
    }
}