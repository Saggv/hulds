import { View, Text, SafeAreaView, FlatList, Image, StatusBar } from 'react-native';
import { useState } from 'react';

import { BidDetail, CircleButton, EthPrice, FocusedStatusBar, NFTTitle, ReactButton, SubInfo } from '../components';
import { assets, FONTS, SIZES } from '../constants';


const DetailsHeader = ({data, navigation}) =>{
  return(
    <View style={{
      width: '100%',
      height: 373,
      backgroundColor: 'red'
    }}>
      <Image source={data.image} resizeMode="cover" style={{
        width: '100%',
        height: '100%'
      }} />

      <CircleButton 
        imageUrl={assets.left} 
        handlePress={()=> navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton 
        imageUrl={assets.heart} 
        handlePress={()=> {}}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const DetailScreen = ({route, navigation}) => {
  const { data } = route.params;
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const showText = () =>{
    if(!readMore){
      setText(data.description);
      setReadMore(true);
      return;
    };

    setText(data.description.slice(0, 100));
    setReadMore(false);
  }

  return (
    <SafeAreaView style={{
        flex: 1
    }}>
        <FocusedStatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true}
        />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        padding: SIZES.font,
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1
      }}>
        <ReactButton title='Place a bid' handlePress={()=> console.log('d')} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({item}) => <Text></Text>}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={()=>(
            <View>
              <DetailsHeader data={data} navigation={navigation} />

              <SubInfo />

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: SIZES.font
              }}>
                <NFTTitle
                  title={data.name}
                  subTitle={data.creator}
                  titleSize={SIZES.large}
                  subTitleSize={SIZES.small}
                />

                <EthPrice price={data.price} />
              </View>

              <View style={{
                padding: SIZES.font
              }}>
                <Text style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.medium
                }}>Description</Text>

                <Text style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small
                }}>
                  {text}
                  {!readMore && '...'}

                  <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.small
                    }}
                    onPress={() => showText()}
                  >
                    {!readMore ? 'Read More' : 'Show Less'}
                  </Text>
                </Text>
              </View>

              {
                data.bids.length > 0 && <View style={{
                  padding: SIZES.font
                }}>
                  <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.medium
                  }}>Current Bid</Text>

                  <BidDetail data={data.bids} />
                </View>
  
              }
            </View>
        )}
      />
    </SafeAreaView>
  )
}

export default DetailScreen