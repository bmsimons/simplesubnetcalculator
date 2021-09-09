import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Netmask } from 'netmask';

import { ISubnetInput } from '../interfaces/SubnetInput';
import Globals from '../globals';

interface Props {
    isDarkMode: boolean;
    subnetInput: ISubnetInput;
}

const NetworkDetailsElement = ({isDarkMode, subnetInput}: Props): JSX.Element => {
    const net = new Netmask(subnetInput.address + '/' + subnetInput.mask);

    const textStyle = isDarkMode ? { color: Globals.lightFontColor } : { color: Globals.darkFontColor };

    return (
        <View>
            <View style={styles.row}>
                <Text style={[styles.header, textStyle]}>Base address:</Text>
                <Text style={[styles.text, textStyle]}>{net.base}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.header, textStyle]}>Subnet mask:</Text>
                <Text style={[styles.text, textStyle]}>{net.mask}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.header, textStyle]}>Broadcast address:</Text>
                <Text style={[styles.text, textStyle]}>{net.broadcast}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.header, textStyle]}>First address:</Text>
                <Text style={[styles.text, textStyle]}>{net.first}</Text>
            </View>
            <View>
                <Text style={[styles.header, textStyle]}>Last address:</Text>
                <Text style={[styles.text, textStyle]}>{net.last}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingBottom: 26
    },
    header: {
        fontSize: 17,
        fontWeight: '700',
        paddingBottom: 3,
        fontFamily: 'Lato-Bold'
    },
    text: {
        fontSize: 21,
        fontFamily: 'Lato-Regular',
        fontWeight: '400'
    }
});

export default NetworkDetailsElement;