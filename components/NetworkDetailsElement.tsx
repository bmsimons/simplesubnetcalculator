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

    console.log(subnetInput);
    console.log(net);

    return (
        <View>
            <View style={styles.row}>
                <Text>Base address:</Text>
                <Text>{net.base}</Text>
            </View>
            <View style={styles.row}>
                <Text>Subnet mask:</Text>
                <Text>{net.mask}</Text>
            </View>
            <View style={styles.row}>
                <Text>Broadcast address:</Text>
                <Text>{net.broadcast}</Text>
            </View>
            <View style={styles.row}>
                <Text>First address:</Text>
                <Text>{net.first}</Text>
            </View>
            <View>
                <Text>Last address:</Text>
                <Text>{net.last}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingBottom: 12
    }
});

export default NetworkDetailsElement;