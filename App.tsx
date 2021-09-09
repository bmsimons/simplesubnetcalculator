import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Platform
} from 'react-native';

import { ISubnetInput } from './interfaces/SubnetInput';

import SubnetInputElement from './components/SubnetInputElement';
import NetworkDetailsElement from './components/NetworkDetailsElement';

const App = () => {
  const setSubnetAddress = (input: string): void => {
    const newSubnetInput: ISubnetInput = { address: input, mask: subnetInput.mask }
    setSubnetInput(newSubnetInput);
  }

  const setSubnetMask = (input: number): void => {
    const newSubnetInput: ISubnetInput = { address: subnetInput.address, mask: input }
    setSubnetInput(newSubnetInput);
  }

  const [ subnetInput, setSubnetInput ] = useState<ISubnetInput>({ address: '0.0.0.0', mask: 24})

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = isDarkMode ? styles.darker : styles.lighter;

  return (
    <SafeAreaView style={[backgroundStyle, styles.flex]}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={[backgroundStyle, styles.inputContainer]}>
          <SubnetInputElement isDarkMode={isDarkMode} setSubnetAddress={setSubnetAddress} setSubnetMask={setSubnetMask} />
        </View>
        <View style={[backgroundStyle, styles.inputContainer, styles.networkDetails]}>
          <NetworkDetailsElement isDarkMode={isDarkMode} subnetInput={subnetInput} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  lighter: {
    backgroundColor: '#F3F3F3'
  },
  darker: {
    backgroundColor: '#222'
  },
  inputContainer: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 12,
    marginTop: 32
  },
  networkDetails: {
    paddingLeft: 12
  }
});

export default App;
