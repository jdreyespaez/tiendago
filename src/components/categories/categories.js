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
              style={[styles.toolbarButton]} />
          </TouchableHighlight>
          <Text style={[styles.toolbarTitle]}>Categorías</Text>
          <Image
            source={require('../../../images/menu.png')}
            style={[styles.toolbarButton]} />
        </View>

        <View style={[styles.searchBarContainer]}>
          <View style={[styles.searchBar]}>
            <Image
              source={require('../../../images/search-icon.png')}
              style={[styles.searchIcon]} />
            <TextInput
              placeholder={'¿Qué producto buscas?'}
              style={[styles.searchInput]}
              />
          </View>
        </View>

        <View style={[styles.categoriesContainer]}>
          <View style={[styles.frame]}>
            <View style={[styles.item, this.border('yellow')]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/shopping-cart.png')}
                  style={[styles.icon]} />
              </View>
              <Text style={[styles.itemText]}>MERCADO</Text>
            </View>
            <View style={[styles.item, this.border('blue')]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/coffee.png')}
                  style={[styles.icon]} />
              </View>
                <Text style={[styles.itemText]}>DESAYUNOS</Text>
            </View>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={this.onPress}
              style={[styles.button, this.border('black')]}>
              <View style={[styles.item, this.border('red')]}>
                <View style={[styles.itemImage]}>
                  <Image
                    source={require('../../../images/beer.png')}
                    style={[styles.icon]} />
                </View>
                <Text style={[styles.itemText]}>BEBIDAS</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={[styles.frame]}>
            <View style={[styles.item]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/heartbeat.png')}
                  style={[styles.icon]} />
              </View>
              <Text style={[styles.itemText]}>ASEO PERSONAL</Text>
            </View>
            <View style={[styles.item]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/home.png')}
                  style={[styles.icon]} />
              </View>
                <Text style={[styles.itemText]}>ASEO HOGAR</Text>
            </View>
            <View style={[styles.item]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/glass.png')}
                  style={[styles.icon]} />
              </View>
              <Text style={[styles.itemText]}>RUMBA</Text>
            </View>
          </View>

          <View style={[styles.frame]}>
            <View style={[styles.item]}>
              <View style={[styles.itemImage]}>
                <Image
                  source={require('../../../images/birthday-cake.png')}
                  style={[styles.icon]} />
              </View>
              <Text style={[styles.itemText]}>SNACK Y DULCES</Text>
            </View>
            <View style={[styles.item]}>
              <View style={[styles.itemImage, this.border('white')]}></View>
              <Text style={[styles.itemText]}></Text>
            </View>
            <View style={[styles.item]}>
              <View style={[styles.itemImage, this.border('white')]}>

              </View>
              <Text style={[styles.itemText]}></Text>
            </View>
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
      borderWidth: 1
    }
  },
  onPress: function() {
    this.props.navigator.push({name: 'products'});
  }
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  searchBarContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: 330,
    height: 35,
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    margin: 7,
  },
  searchInput: {
    width: 200,
    fontFamily: 'OpenSans',
    fontSize: 14,
  },
  categoriesContainer: {
    flex: 14,
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
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
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
  },
  button: {
    flex: 1
  },
  item: {
    flex: 1,
  },
  itemChild: {
    flex: 1,
    alignItems: 'flex-start',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  itemText: {
    height: 15,
    textAlign: 'center',
    fontSize: 10,
    color: '#333333',
    fontFamily: 'OpenSans',
    marginTop: 5
  },
  itemImage: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 70,
    height: 70,
    borderColor: '#C2C2C2',
    borderWidth: 1,
  }
});
