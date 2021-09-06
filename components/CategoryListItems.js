import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import SkiiImage from '../assets/ski.png';

export default function CategoryListItems(props){
    return (
    <View>
        <Text>CategoryListItems</Text>
        <Image source={SkiiImage} />
    </View>
    )
}