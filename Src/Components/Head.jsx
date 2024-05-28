import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Head = ({ navigation }) => {
  return (
    <View className="items-center py-3 px-2 flex-row justify-between">
      <Text className="text-lg text-black font-bold">PHARMA</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          source={require('../Images/icons/online-shopping.png')}
          className="w-7 h-7"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({});
