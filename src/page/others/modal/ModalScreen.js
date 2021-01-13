import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { colors } from '../../../common/theme/color';
// import {StatusBarCommon} from '../../common/component/statusbar'

export class ModalScreen extends Component {
   
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Dismiss"
                />
            </View>
        );
    }
}