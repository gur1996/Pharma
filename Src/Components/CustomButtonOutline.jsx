import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import imp_para from '../Constants/constants';

const CustomButtonOutline = ({
  title,
  onPress,
  border = '#28bc63',
  fontColor = '#28bc63',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {border}]}
      onPress={onPress}
      className=" px-11 py-2 border rounded border-[#28bc63]">
      <Text
        className="text-[#28bc63] font-semibold text-base "
        style={[{color: fontColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomButtonOutline;
