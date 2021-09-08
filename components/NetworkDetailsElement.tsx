import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Netmask } from 'netmask';

import { ISubnetInput } from '../interfaces/SubnetInput';

interface Props {
    subnetInput: ISubnetInput;
}

const NetworkDetailsElement = ({subnetInput}: Props): JSX.Element => {
    const net = new Netmask(subnetInput.address + '/' + subnetInput.mask);

    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.header}>Base address:</Text>
                <Text style={styles.text}>{net.base}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.header}>Subnet mask:</Text>
                <Text style={styles.text}>{net.mask}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.header}>Broadcast address:</Text>
                <Text style={styles.text}>{net.broadcast}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.header}>First address:</Text>
                <Text style={styles.text}>{net.first}</Text>
            </View>
            <View>
                <Text style={styles.header}>Last address:</Text>
                <Text style={styles.text}>{net.last}</Text>
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