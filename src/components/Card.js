import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

// if we pass one comp to another, it will show in the parent as props.children

const styles = {
    containerStyle: {
        borderWidth: 1, // 1 pixel width border
        borderRadius: 2, // rounded corers
        borderColor: '#ddd',    // light grey
        borderBottomWidth: 0,   // for the bottom, no border
        shadowColor: '#000',  // gives definition
        shadowOffset: { width: 0, height: 2 }, //none on left and right, height yes
        shadowOpacity: 0.1, // from 0 to 1
        shadowRadius: 2,    // rounds corners, like border
        elevation: 1,
        marginLeft: 5,  // space between l and r
        marginRight: 5,
        marginTop: 10   // space between cards
    }
};

export default Card;
