import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class ButtonSignin extends React.Component{
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
        >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    padding: 15,
    borderColor: '#21C064',
    marginTop: 30,
    backgroundColor: '#21C064',
    width: 230
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'OpenSans',
    color: 'white'
  }
});
