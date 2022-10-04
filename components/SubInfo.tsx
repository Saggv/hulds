import { View, Text, Image } from 'react-native';
import React from 'react';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';


export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) =>{
    return(
        <View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                fontSize: titleSize
            }}>{title}</Text>

            <Text style={{
                fontFamily: FONTS.regular,
                color: COLORS.primary,
                fontSize: subTitleSize
            }}>{subTitle}</Text>
        </View>
    )
};

export const EthPrice = ({price}) =>{
    return(
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image source={assets.eth} resizeMode="cover" style={{
                width: 20,
                height: 20
            }} />
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.primary
            }}>{price}</Text>
        </View>
    )
};

export const Imagecmp = ({imageUrl, index}) =>{
    return(
        <View>
            <Image source={imageUrl} style={{
                width: 48,
                height: 48,
                marginLeft: index == 0 ? 0 : -SIZES.font
            }} />
        </View>
    )
};

export const People = () =>{
    const peoples: Array<string> = [ assets.person01, assets.person02, assets.person03, assets.person04 ];
    return(
        <View style={{flexDirection: 'row'}}>
          {
            peoples.map((item: string, index: number) => <Imagecmp imageUrl={item} index={index} key={`kye ${index}`} />)
          }
        </View>
    )
};

export const EndDate = () =>{
    return(
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            ...SHADOWS.light,
            justifyContent: 'center',
            alignContent: 'center',
            elevation: 1,
            maxWidth: '50%'
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                color: COLORS.primary,
                fontSize: SIZES.small
            }}>
                Ending in
            </Text>

            <Text style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                fontSize: SIZES.medium
            }}>
                12h 30m
            </Text>
        </View>
    )
};


 
export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
      <People />
      <EndDate />
    </View>
  )
};