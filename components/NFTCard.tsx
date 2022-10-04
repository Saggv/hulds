import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CircleButton, ReactButton  } from './Button';
import { EthPrice, NFTTitle, SubInfo } from './SubInfo';

import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants';

const NFTCard = ({data}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={{
     backgroundColor: COLORS.white,
     borderRadius: SIZES.font,
     marginBottom: SIZES.extraLarge,
     margin: SIZES.base,
     ...SHADOWS.dark
     }}>
       <View style={{
         width: '100%',
         height: 250
       }}>
         <Image 
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
         ></Image>

         <CircleButton imageUrl={assets.heart} handlePress={()=> console.log('e')} top={10} right={10} />
       </View>
     
      <SubInfo />

      <View style={{
        width: '100%',
        padding: SIZES.font
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          marginTop: SIZES.base
        }}>
          <EthPrice price={data.price} />

          <ReactButton title="Place a bid" fontSize={SIZES.font} handlePress={()=> navigation.navigate("Detail", {data})} />
        </View>
      </View>
    </View>
  )
}

export default NFTCard
