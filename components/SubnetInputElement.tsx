import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { IPv4 } from 'ipaddr.js';

import { ISubnetInput } from '../interfaces/SubnetInput';

interface Props {
    isDarkMode: boolean;
    setSubnetInput: React.Dispatch<React.SetStateAction<ISubnetInput>>;
}

const SubnetInputElement = ({isDarkMode, setSubnetInput}: Props): JSX.Element => {
    const [ borderStyle, setBorderStyle ] = useState(isDarkMode ? { borderColor: '#D6DBDF' } : { borderColor: '#85929E' });

    const setError = (isError: boolean): void => {
        if (isError) {
            console.log('error!');
            setBorderStyle({ borderColor: '#FE2E2E' });
        } else {
            setBorderStyle(isDarkMode ? { borderColor: '#D6DBDF' } : { borderColor: '#85929E' });
        }
    }

    const subnetInput: ISubnetInput = {address: '0.0.0.0', mask: 24}

    const validateAddress = (input: string): boolean => {
        return IPv4.isValid(input);
    }

    const processAddress = (input: string): void => {
        if (validateAddress(input)) {
            setError(false);

            subnetInput.address = input;
            setSubnetInput(subnetInput);
        } else {
            setError(true);
        }
    }

    const validateSubnet = (input: number): boolean => {
        if (input >= 8 && input <= 30) return true; else return false;
    }

    const processSubnet = (input: number): void => {
        if (validateSubnet(input)) {
            setError(false);

            subnetInput.mask = input;
            setSubnetInput(subnetInput);
        } else {
            setError(true);
        }
    }

    return (
        <View style={[styles.inputElement, borderStyle]}>
            <View style={[styles.flexRow, {flex: 1, flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}]}>
                <TextInput style={styles.text} placeholder="0.0.0.0" onChangeText={(text: string): void => { processAddress(text) } }/>
            </View>
            <View style={styles.flexRow}>
                <Text style={[styles.text, {marginRight: 4}]}>/</Text>
                <TextInput style={styles.text} placeholder="24" onChangeText={(text: string): void => { processSubnet(parseInt(text)) } }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    inputElement: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 4,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addressInputParent: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 18
    }
});

export default SubnetInputElement;