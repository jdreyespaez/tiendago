import React from 'react';

import {
  Text,
  StyleSheet,
  TouchablHighlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchablHighlight
        style={styles.button}
        underlayColor={'green'}
        onPress={this.props.onPress}
        >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchablHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 5,
    borderColor: 'green'
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});
