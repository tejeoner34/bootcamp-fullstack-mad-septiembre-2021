class ButtonCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            verticalFlip : 'flip-vertical',
            flipStatus: 'vertical'

        }
    }

    changeFlip(){
        this.setState(oldState=>{
            return{
                verticalFlip: oldState.verticalFlip === 'flip-vertical'? 'flip-horizontal' : 'flip-vertical'
            }
        })
    }

    changeFlipStatus(){
        this.setState(oldState => {
            return{
                flipStatus: oldState.flipStatus === 'vertical'? 'horizontal':'vertical'
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{
                    this.changeFlip();
                    this.changeFlipStatus();
                    }}>Flip {this.state.flipStatus}</button>
                <Card flip={this.state.verticalFlip}></Card>
            </React.Fragment>
        )
    }
}

