import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const InnerHead = ({ navigation }) => {
  return (
    <View className="items-center py-3 px-3 flex-row justify-between border-b-2 border-[#e6e6e6]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../Images/icons/left-arrow.png')}
          className="w-7 h-7"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          source={require('../Images/icons/online-shopping.png')}
          className="w-7 h-7"
        />
      </TouchableOpacity>
    </View>
  );
};

export default InnerHead;

const styles = StyleSheet.create({});
