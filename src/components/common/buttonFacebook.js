import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'blue'}
        onPress={this.props.onPress}
        >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#1452E1',
    padding: 5,
    height: 45,
    width: 270,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 6,
    color: '#1452E1',
    fontSize: 15,
    fontFamily: 'OpenSans',
  },
});
