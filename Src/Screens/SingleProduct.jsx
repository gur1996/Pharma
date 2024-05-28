import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InnerHead from '../Components/InndeHead';
import imp_para from '../Constants/constants';
import Button from '../Components/CustomButton';
import CustomButton from '../Components/CustomButton';
import CustomButtonOutline from '../Components/CustomButtonOutline';

const SingleProduct = ({navigation}) => {
  return (
    <View>
      <View>
        <InnerHead navigation={navigation} />
      </View>
      <View className=" py-5 px-10">
        <View className="items-center">
          <Image
            source={require('../Images/product_1.png')}
            className=" w-64 h-64"
          />
        </View>
        <View className="mt-5 mb-5">
          <Text className="text-black text-2xl font-semibold">
            Love Botanica 600 ME2
          </Text>
          <Text className="text-gray text-xmd mt-1">
            Realistic colored organic cosmetics ingredients design. set isolated
            cosmetics tubes
          </Text>
          <Text className=" text-2xl text-black mt-3">
            Price: {imp_para.rupees} 200
          </Text>
        </View>
        <View className="flex-row justify-between">
          <CustomButtonOutline title="Wishlist" />
          <CustomButton title="Add To Cart" />
        </View>
        <View className="mt-5">
          <Text className="text-black text-xl font-semibold">Related</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({});
