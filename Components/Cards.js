import React from 'react';
import {FlatList, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import meme0 from '../assets/0.jpg';
import meme1 from '../assets/1.jpg';
import meme2 from '../assets/2.jpg';
import meme3 from '../assets/3.jpg';
import meme4 from '../assets/4.jpg';
import meme5 from '../assets/5.jpg';
import meme6 from '../assets/6.jpg';
import meme7 from '../assets/7.jpg';
import meme8 from '../assets/8.jpg';
import meme9 from '../assets/9.jpg';
import Card from './Card';

const memes = [
    meme0,
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
];

const sources = [...memes, ...memes];

class Cards extends React.Component {

    state = {
        //allowPress: true,
        //prevPressedCard: null,
        shownCardsIndexes: [], //CARDS TO BE SHOWN
        tries: [], //TRIES PER TURN (MAX 2)
        correctGuesses: [],//CARDS GUESSED CORRECTLY(WILL ALWAYS BE SHOWN)
        countPressed: 0, //NUMBER OF TRIES (MAX 2 THEN RESETED)
        //update: true,
    };

    keyExtractor = (_item, index) => String(index);

    renderCard = ({index, item}) => {
        const onCardPress = () => {
            // if(this.state.prevPressedCard){
            //     if (item === this.state.prevPressedCard){
            //         setTimeout(() => {
            //             this.setState({
            //                 allowPress: true,
            //                 shownCardsIndexes: this.state.shownCardsIndexes.filter((idx) => {
            //                     return idx !== index;
            //                 }),
            //             });
            //         }, 3000);
            //     } else {    }
            // }

            if(!this.state.shownCardsIndexes.includes(index)){ //VALIDATE THAT THE IMAGES CAN ONLY BE PRESSED ONCE
                if(this.state.countPressed < 2){ //VALIDATE THE NUMBER OF TRIES IS LESS THAN 2
                    console.log('Touch ' + (this.state.countPressed+1));
                    this.setState({
                        shownCardsIndexes: [...this.state.shownCardsIndexes, index],
                        countPressed: this.state.countPressed + 1,
                        tries: [...this.state.tries, item-1], //ITEMS DIFFER BY 1 FROM THE INDEXES
                    });
                }

                if(this.state.countPressed == 2){//WHEN THE USER GUESSES THE TWO CARDS THEN THE THIRD PRESS WILL REVEAL THE RESULTS
                    if(this.state.tries[0] === this.state.tries[1]){
                        console.log('Guessed correctly');
                        this.setState({
                            correctGuesses: [...this.state.correctGuesses, this.state.tries[0], (this.state.tries[1] + 10)],
                            countPressed: 0,
                            tries: [],
                        }, () => this.setState({
                            shownCardsIndexes: this.state.correctGuesses,
                        }));
                    } else {
                        console.log('Guessed Incorrectly');
                        this.setState({
                            countPressed: 0,
                            tries: [],
                        },() => this.setState({
                            shownCardsIndexes: this.state.correctGuesses,
                        }));
                    }
                } 
            }
        };
        
        return (
        <TouchableWithoutFeedback onPress = {onCardPress}>
            <View>
                <Card 
                    shown = {this.state.shownCardsIndexes.includes(index)} 
                    source={item} 
                />
            </View>
        </TouchableWithoutFeedback>
        );
    };

    render() {
        return (
            <FlatList
                contentContainerStyle = {styles.cardsContainer}
                data = {sources}
                extraData = {this.state.shownCardsIndexes}
                keyExtractor = {this.keyExtractor}
                numColumns = {4}
                renderItem={this.renderCard}
            />
        )
    }
}

const styles = StyleSheet.create({
    cardsContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    }
});

export default Cards;