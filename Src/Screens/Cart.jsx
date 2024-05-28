import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InnerHead from '../Components/InndeHead'

const Cart = ({navigation}) => {
  return (
    <View>
        <InnerHead navigation={navigation}/>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})