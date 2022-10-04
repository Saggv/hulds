import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import { EthPrice } from './SubInfo';

const BidDetail = ({data}) => {
  return (
    <View style={{
        marginTop: SIZES.base
    }}>
        {
            data.map(bid =>(
                <View key={bid.id} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: SIZES.base
                }}>
                    <Image source={bid.image} style={{
                        width: 48,
                        height: 48
                    }} />

                    <View style={{
                       flex: 1,
                       marginLeft: SIZES.medium
                    }}>
                        <Text style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.small,
                            color: COLORS.primary
                        }}>  Bid placed by {bid.name}</Text>

                        <Text style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small - 2,
                            color: COLORS.secondary
                        }}> {bid.date}</Text>
                    </View>

                    <EthPrice price={bid.price} />
                </View>
            ))
        }
    </View>
  )
}

export default BidDetail;