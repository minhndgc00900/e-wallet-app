import { Container, Text, Content } from 'native-base';
import React, { Component } from 'react'
import { Image, View, ScrollView, Alert, TouchableOpacity } from 'react-native';

import CommonStyle from "../../../utils/styles/common";
import { SLOGAN } from '../../../constants/'
import styles from './style'

export class signup extends Component {
    render() {
        return (
            <Container>
                <Content style={CommonStyle.content}>
                    <View style={styles.container}>
                        <View style={styles.slogan}>
                            <Image source={require('./../../../utils/images/turtle.jpg')} style={styles.sloganLogo} />
                            <Text style={styles.sloganText}>{SLOGAN}</Text>
                        </View>
                    </View>
                </Content>


            </Container>
        )
    }
}

export default signup
