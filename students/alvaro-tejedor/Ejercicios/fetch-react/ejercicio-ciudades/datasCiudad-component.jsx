class DataCiudad extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    "city": "Álava",
                    "population": 321932,
                "utf": "%C3%81lava"
                },
                {
                    "city": "Ávila",
                    "population": 59258,
                "utf": "%C3%81vila"
                },
                {
                    "city": "Albacete",
                    "population": 172693,
                "utf": "Albacete"
                },
                {
                    "city": "Alicante",
                    "population": 335052,
                "utf":"Alicante"
                },
                {
                    "city": "Almería",
                    "population": 192697,
                "utf":"Almer%C3%ADa"
                },
                {
                    "city": "Asturias",
                    "population": 1062000,
                "utf":"Asturias"
                }
            ],



        }

        const dataFinal = JSON.parse(this.state.data);
        this.setState({data: dataFinal})

    }

    render(){
        return(
            <React.Fragment>
                {console.log(this.state.data)}
                {this.state.data.map(i=> {<City data={i}></City>})}
            </React.Fragment>
        )
    }
}