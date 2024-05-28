import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import products from '../Data/Data';
import imp_para from '../Constants/constants';

import Head from '../Components/Head';

const Home = ({navigation}) => {
  const renderProduct = ({item}) => {
    return (
      <View className="flex-1 px-1 py-2 ">
        <View className=" py-2 px-2  h-64 bg-white items-center border border-[#e6e6e6] rounded-xl ">
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SingleProduct')}>
              <Image className=" w-28 h-28" source={item.image} />
            </TouchableOpacity>
          </View>
          <View className="mt-3 ">
            <Text className="text-black text-base">{item.title}</Text>
            <Text className="text-gray text-xs mt-1">
              {item.descriptions.slice(0, 50)}...
            </Text>

            <Text className=" text-2xl text-black mt-3">
              {imp_para.rupees} {item.price}
            </Text>
          </View>
          <TouchableOpacity className=" absolute bottom-0 right-0 px-3 py-3 rounded-lg bottom-2 right-2 bg-[#28bc63]">
            <Image
              source={require('../Images/icons/plus.png')}
              className="w-5 h-5"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="px-3 bg-white">
      <Head navigation={navigation} />
      <View className="mt-2 flex-row items-center border border-[#f1f1f1] bg-[#f2f5f9] rounded-lg px-3">
        <Image
          source={require('../Images/icons/magnifying-glass.png')}
          className=" w-7 h-7"
        />

        <TextInput placeholder="Search Products Here" className="flex-1 " />
      </View>
      <FlatList
        className="mt-2"
        data={products}
        renderItem={renderProduct}
        numColumns={2}
        ListHeaderComponent={
          <Text className="text-black text-xl font-bold px-2">
            All Products
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
