import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform
} from 'react-native';

import { IPv4 } from 'ipaddr.js';

import Globals from '../globals'

interface Props {
    isDarkMode: boolean;
    setSubnetAddress: (input: string) => void;
    setSubnetMask: (input: number) => void;
}

const SubnetInputElement = ({isDarkMode, setSubnetAddress, setSubnetMask}: Props): JSX.Element => {
    const [ borderStyle, setBorderStyle ] = useState(isDarkMode ? { borderColor: '#D6DBDF' } : { borderColor: '#85929E' });
    const textStyle = isDarkMode ? { color: Globals.lightFontColor } : { color: Globals.darkFontColor };

    const setError = (isError: boolean): void => {
        if (isError) {
            setBorderStyle({ borderColor: '#FE2E2E' });
        } else {
            setBorderStyle(isDarkMode ? { borderColor: '#D6DBDF' } : { borderColor: '#85929E' });
        }
    }

    const validateAddress = (input: string): boolean => {
        return IPv4.isValid(input);
    }

    const processAddress = (input: string): void => {
        if (validateAddress(input)) {
            setError(false);

            setSubnetAddress(input);
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

            setSubnetMask(input);
        } else {
            setError(true);
        }
    }

    return (
        <View style={[styles.inputElement, borderStyle]}>
            <View style={[styles.flexRow, {flex: 1, flexDirection: 'column', flexGrow: 1, alignItems: 'stretch'}]}>
                <TextInput style={[styles.text, textStyle]} placeholder="0.0.0.0" onChangeText={(text: string): void => { processAddress(text) } }/>
            </View>
            <View style={styles.flexRow}>
                <Text style={[styles.text, styles.separator, textStyle]}>/</Text>
                <TextInput style={[styles.text, textStyle]} placeholder="24" onChangeText={(text: string): void => { processSubnet(parseInt(text)) } }/>
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
        fontSize: 24,
        fontFamily: 'Lato',
        fontWeight: '400'
    },
    separator: {
        marginRight: 4,
        marginTop: Platform.OS === 'android' ? 9 : 0
    }
});

export default SubnetInputElement;