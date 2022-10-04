import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({handleSearch}) => {
  return (
    <View style={{
      padding: SIZES.font
    }}>
       <View style={{
         justifyContent: 'space-between',
         alignItems: 'center',
         flexDirection: 'row',
         backgroundColor: COLORS.primary
       }}>
         <Image source={assets.logo} resizeMode="cover" style={{
           width: 90,
           height: 25
         }} />

         <View>
           <Image source={assets.person03} style={{
             width: 40,
             height: 40
           }} />

           <View style={{
             position:'absolute',
             right: 10,
             bottom: -2,
             width: 10,
             height: 10,
             backgroundColor: COLORS.gray,
             borderRadius: SIZES.extraLarge
           }}></View>
         </View>
       </View>

       <View style={{
         marginVertical: SIZES.font
       }}>
         <Text style={{
           color: COLORS.white,
           fontFamily: FONTS.regular,
           fontSize: SIZES.small
         }}>Hello, Victoria 👋</Text>

          <Text style={{
              color: COLORS.white,
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              marginTop: SIZES.base / 2
            }}>Let's find the masterpice</Text>
       </View>

       <View style={{
         marginTop: SIZES.base,
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: COLORS.gray,
         paddingVertical: SIZES.base / 2,
         paddingHorizontal: SIZES.base,
         borderRadius: SIZES.base / 2
       }}>
         <Image source={assets.search} resizeMode="cover" style={{
           width: 20,
           height: 20
         }} />

         <TextInput placeholder='Search NFTs' style={{
           flex: 1,
           marginLeft: SIZES.base,
           fontSize: SIZES.font,
         }} 
         onChangeText={handleSearch} />
       </View>
    </View>
  )
}

export default HomeHeader