// Chargement des dépendances (librairie React ici)
import React from 'react';
import { ButtonOnClick } from './ButtonOnClick';
import Cards from './Cards';
import {SelectCity} from './SelectCity';
import {SelectYear} from './SelectYear'
// import Cards from './Cards.jsx';


/*
 * API OpenData de la région Ile-de-France : 
 * https://data.iledefrance.fr/explore/dataset/evenements-publics-cibul/api
 *
 * URL finale à appeler en HTTP GET, récupère 36 résultats (paramètre rows)
 */


// Composant React de type classe : le plus simple lorsqu'il y a du state
export class Agenda extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataAPI: [],
            favCards: [],
            city:"Paris", 
            year:"2021"
        }
        this.fectchOnClick = this.fectchOnClick.bind(this)
        this.addFavCards = this.addFavCards.bind(this)
        this.selectCity = this.selectCity.bind(this)
        this.selectYear = this.selectYear.bind(this)
    }
    
    selectCity(eventCity){  
        this.setState({
            city: eventCity.target.value
        })
    }

    selectYear(eventYear){
        this.setState({
            year: eventYear.target.value
        })
    }

    fectchOnClick(){
        let fetchAPI = `https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=36&refine.date_start=${this.state.year}&refine.city=${this.state.city}`
        fetch(fetchAPI).then((response) => {
            console.log(response);
            // J'essaie de récupérer le bousin
            return response.json();
        }).then((data) => {
            this.setState({
                dataAPI: this.createCard(data.records)
            })
            console.log(this.state)
        })
    }

    createCard(records){
        return records.map((element, index)=>{
            return <Cards 
                key={index} 
                image={element.fields.image} 
                title={element.fields.title} 
                description={element.fields.description} 
                url={element.fields.link}
                id={element.fields.uid}
                addFavCards={this.addFavCards}
            />
        })
    }
    
    addFavCards(id){
        let idDesFavoris = this.state.favCards;
        //Initialise le tableau qu'on va filtrer
        let fav = [];
        //condition de départ, si le state contient l'id cliqué, on le filtre du tableau
        if (idDesFavoris.includes(id) === true ) {
            fav = idDesFavoris.filter(elementId => elementId !== id);
            this.setState({
                favCards: fav
            })
        }else {
            //On spread le tableau auquel on ajoute un nouvel id
            this.setState({
                favCards:[...idDesFavoris, id]
            })
        }
    }
    
    render() {
        return (
            <section className="card-list">
                {/* On passe la valeur de city (dans le state) avec la fonction a SelectCity  */}
                <div>
                    <SelectCity city={this.state.city} selectCity={this.selectCity}/>
                    <SelectYear year={this.state.year} selectYear={this.selectYear}/>
                    <ButtonOnClick fectchOnClick={this.fectchOnClick}/>
                </div>
                {this.state.dataAPI}
            </section>
        );
    }
}

export default Agenda;