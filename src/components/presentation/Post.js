import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width,
        }
    }

    likeToggled () {
        this.setState({
            liked: !this.state.liked
        })
    }

    render () {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageSelection = (this.props.item % 2 === 0) ? "https://lh3.googleusercontent.com/CvIw6J0n_Uf6PykpXmLZwHYTeAvtpqpcgcCu2OBJVyYmhQjZZp8ARHgV8D14TMa8yjNsvyRLV4GEq2kO4sMofBiW" : "https://lh3.googleusercontent.com/7go5QlvBqgJaeONDAw3TJEygJee8pinxR8H3z5SXEGizgt2A_54U1VHr0jYaQZn6LcCpJbbiQKplP_SWAiSPcRRzKA"
        const imageUri = imageSelection + '=s' + imageHeight + '-c'
        const heartColor = (this.state.liked) ? 'red' : null

        return (
            <View style={{ flex: 1, width: '100%' }}>
                <View style={style.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={style.userPicture}
                            source={{
                                uri: "https://lh3.googleusercontent.com/Ek078ju-wOprMPQN_Q9Kiz-kusGEDFJxMHeER6VbD88m9ut0g903zaAhCYkKJ-dCYnTHs5Nx12jM4W8d9hZnNqFu"
                            }} />
                        <Text>Gabriel F Luchtenberg</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={() => {
                        this.likeToggled()
                    }}>
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            uri: imageUri
                        }} />
                </TouchableOpacity>
                <View style={style.iconBar}>
                    <Text style={[style.icon, { height: 36, width: 36, color: heartColor }]}> Heart</Text>
                    <Text style={[style.icon, { height: 36, width: 36 }]}> Comment</Text>
                    <Text style={[style.icon, { height: 36, width: 36 }]}> Share</Text>
                </View>
                <View style={style.commentBar}>
                    <Text style={[style.icon, { height: 30, width: 30 }]}> Heart</Text>
                    <Text>128 Likes</Text>
                </View>
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
    userBar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPicture: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal: 10
    },
    iconBar: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: "center"
    },
    icon: {
        marginLeft: 5,
    },
    commentBar: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: "center"
    }
})
export default Post;