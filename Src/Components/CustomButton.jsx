import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import imp_para from '../Constants/constants';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = '#28bc63',
  fontColor = '#FFFFFF',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}
      className=" px-11 py-2  rounded ">
      <Text
        className="text-white font-semibold text-base"
        style={[{color: fontColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
