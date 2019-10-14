import React from 'react';
import { Dimensions, View, Image, StyleSheet} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 108) / 4;

class Card extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <Image source = {this.props.source} style = {styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    image: {
        height: cardWidth,
        width: cardWidth,
    },
});

export default Card;