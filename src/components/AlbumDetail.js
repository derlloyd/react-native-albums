import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    // instead of props as argument, use destructured album (props.album)
    const { title, artist, thumbnail_image } = album;
    // optionally could also destructure styles object
    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50, // need to specify or will not show
        width: 50
    }
};

export default AlbumDetail;
