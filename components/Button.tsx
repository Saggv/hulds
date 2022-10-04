import { Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { COLORS, SIZES, FONTS } from '../constants/theme';

export const CircleButton = ({imageUrl, handlePress, ...prods}) => {
  return (
    <TouchableOpacity style={{
        width: 40,
        height: 40,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...prods
    }}
     onPress={handlePress}
    >
      <Image source={imageUrl} resizeMode="cover" style={{
          width: 24,
          height: 24
      }} />
    </TouchableOpacity>
  )
};

export const ReactButton = ({ title, handlePress, ...prods}) => {
    return (
      <TouchableOpacity style={{
          borderRadius: SIZES.extraLarge,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          ...prods,
          paddingHorizontal: SIZES.extraLarge,
          paddingVertical: SIZES.base
      }}
       onPress={handlePress}
      >
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.white,
            textAlign: 'center'
        }}>{title}</Text>
      </TouchableOpacity>
    )
  };
  
  