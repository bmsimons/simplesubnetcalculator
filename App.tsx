import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { ISubnetInput } from './interfaces/SubnetInput';

import SubnetInputElement from './components/SubnetInputElement';
import NetworkDetailsElement from './components/NetworkDetailsElement';

const App = () => {
  const [ subnetInput, setSubnetInput ] = useState<ISubnetInput>({ address: '0.0.0.0', mask: 24})

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = isDarkMode ? styles.darker : styles.lighter;

  return (
    <SafeAreaView style={[backgroundStyle, styles.flex]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={[backgroundStyle, styles.inputContainer]}>
          <SubnetInputElement isDarkMode={isDarkMode} setSubnetInput={setSubnetInput}/>
        </View>
        <View style={[backgroundStyle, styles.inputContainer]}>
          <NetworkDetailsElement subnetInput={subnetInput} />
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
    margin: 24,
    marginTop: 32
  }
});

export default App;
