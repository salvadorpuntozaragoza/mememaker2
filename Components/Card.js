import React from 'react';
import { 
    Dimensions, 
    View, 
    Image, 
    StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 108) / 4;

class Card extends React.Component {

    // state = {
    //     shown: false,
    // };

    render() {
        return(
            <View style = {styles.container}>
                <Image 
                    source = {this.props.source} 
                    style = {[
                        styles.image,
                        this.props.shown && styles.imageShown,
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
    },
    image: {
        height: cardWidth,
        width: cardWidth,
        opacity: 0,
    },
    imageShown: {
        opacity: 1,
    }
});

export default Card;