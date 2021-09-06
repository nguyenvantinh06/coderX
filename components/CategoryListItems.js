import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import SkiiImage from '../assets/ski.png';

export default function CategoryListItems(props){
    return (
    <View style={styles.container}>
        <Text style={styles.title}>CategoryListItems</Text>
        <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
    );
}

const styles = StyleSheet.create({
    categoryImage : {
        width: 64, 
        height: 64,
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: 'grey',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 0, 
        fontWeight: '700',
    }

});