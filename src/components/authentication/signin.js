import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';

import ButtonFacebook from '../common/buttonFacebook';
import ButtonBottom from '../common/buttonBottom';

module.exports = React.createClass ({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../images/back.png')}
            style={styles.back}
            onPress={this.onPress}
            >
          </Image>
          <Text style={styles.title}>Iniciar Sesión</Text>
        </View>


          <Text style={styles.label}>EMAIL</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>CONTRASEÑA</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            />

          <ButtonFacebook text={'Conéctate con Facebook'} />
          <ButtonBottom text={'ENTRAR'} />

      </View>
    );
  }
  // onEnterPress: function() {
  //   this.props.navigator.immediatelyResetRouteStack([{name: 'categories'}]);
  // }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    alignItems: 'flex-start'
  }
});
