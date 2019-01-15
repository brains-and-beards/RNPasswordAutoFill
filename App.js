/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          value={this.state.value}
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          textContentType='username'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          value={this.state.value}
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          textContentType='password'
          secureTextEntry={true}
          autoCapitalize='none'
        />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./background.png')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#ffea00',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'center',
    paddingTop: 40
  },
  logo: {
    width: 240,
    height: 240,
  },
  textInput: {
    height: 36,
    borderColor: '#00000033',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8
  },
  text: {
    paddingVertical: 8
  }
});
