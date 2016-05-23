import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.onBackPress}>
            <Image
              source={require('../../../images/arrow_back.png')}
              style={[styles.toolbarButton, this.border('green')]} />
          </TouchableHighlight>
          <Text style={[styles.toolbarTitle, this.border('red')]}>Categorías</Text>
          <Image
            source={require('../../../images/menu.png')}
            style={[styles.toolbarButton, this.border('green')]} />
        </View>

        <View style={[styles.frame, this.border('black')]}>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/shopping-cart.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>MERCADO</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/coffee.png')}
                style={[styles.icon]} />
            </View>
              <Text style={[styles.itemText, this.border('green')]}>DESAYUNOS</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/beer.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>BEBIDAS</Text>
          </View>
        </View>

        <View style={[styles.frame, this.border('black')]}>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/shopping-cart.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>MERCADO</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/coffee.png')}
                style={[styles.icon]} />
            </View>
              <Text style={[styles.itemText, this.border('green')]}>DESAYUNOS</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/beer.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>BEBIDAS</Text>
          </View>
        </View>

        <View style={[styles.frame, this.border('black')]}>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/shopping-cart.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>MERCADO</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/coffee.png')}
                style={[styles.icon]} />
            </View>
              <Text style={[styles.itemText, this.border('green')]}>DESAYUNOS</Text>
          </View>
          <View style={[styles.item, this.border('yellow')]}>
            <View style={[styles.itemImage, this.border('black')]}>
              <Image
                source={require('../../../images/beer.png')}
                style={[styles.icon]} />
            </View>
            <Text style={[styles.itemText, this.border('green')]}>BEBIDAS</Text>
          </View>
        </View>



      </View>
    )
  },
  onBackPress: function() {
    this.props.navigator.pop();
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 1.5
    }
  },
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 162, 85, 0.5)',
    borderBottomWidth: 1,
  },
  toolbarButton: {
    width: 20,
    height: 15,
    marginRight: 10,
  },
  toolbarTitle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    flex: 1,
    fontSize: 18,
  },
  frame: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  item: {
    flex: 1,
    width: 40,
  },
  icon: {
    width: 25,
    height: 25,
  },
  itemText: {
    height: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans',
  },
  itemImage: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 80,
    height: 80,
  }
});
