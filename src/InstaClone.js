import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { PostFeed } from './components/container'
class InstaClone extends Component {

    render () {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%' }}>
                <View style={style.tempNav}>
                    <Text style={{ marginLeft: 10 }}>
                        Instagram
                    </Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}
const style = StyleSheet.create({
    tempNav: {
        width: '100%',
        height: 50,
        marginTop: 20,
        backgroundColor: 'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center',
    },
})
export default InstaClone;