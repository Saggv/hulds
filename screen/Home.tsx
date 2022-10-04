import  React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';
import {  COLORS, NFTData} from '../constants';

export default function HomeScreen(){
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (searchValue) =>{
        if(!searchValue){
            setNftData(NFTData);
            return;
        };

        const filteredData = nftData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

        if(filteredData.length === 0){
            setNftData(NFTData);
        }else{
            setNftData(filteredData);
        }
    };

    return(
        <SafeAreaView style={{flex: 1}}>
           <FocusedStatusBar background={COLORS.primary}></FocusedStatusBar>

           <View style={{flex: 1, backgroundColor: 'red'}}>
               <View style={{zIndex: 0}}>
                    <FlatList 
                        data={nftData}
                        renderItem={({item}: any) => <NFTCard data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
                    />
               </View>

               <View style={{
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   zIndex: -1
               }}>
                   <View style={{
                       height: 300, 
                       backgroundColor: COLORS.primary
                   }}></View>

                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.white
                   }}></View>
               </View>
           </View>
        </SafeAreaView>
    )
}