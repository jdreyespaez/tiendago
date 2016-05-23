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
        underlayColor={'green'}
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
    flex: 2.5,
    backgroundColor: '#21C064',
  },
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 23,
    fontFamily: 'OpenSans',
    color: '#fff',
  }
});
