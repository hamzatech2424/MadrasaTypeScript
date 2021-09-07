import { validate } from "@babel/types";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { ContentContainer } from "../Components/Abstract Components";
import { HeaderMyDonations, DonorInfoModule } from "../Components/Module Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { navigate } from "../Navigation/Navgation";


const Dim = Dimensions.get('window').height

const ADMydonation = () => {
    return (
        <View style={styles.MainView}>

            <HeaderMyDonations text={'Total Donated'} OnPressIn={()=>navigate('ADMakeDonationPage')} />

            <ContentContainer style={{ width: '90%', backgrounColor: 'green', height: '100%' }}>
 
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',height:'18%'}}>

                <Text style={{fontSize:moderateScale(35),fontWeight:'bold',color:'#0BA360'}}>$58,248</Text>
                <Text>Total Donation</Text>
                
            </View>



            <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(10) }}>
                    Donation History
                    </Text>

                <View style={{ width: '100%', height: Height(Dim, '90%') }}>

                    <ScrollView showsVerticalScrollIndicator={false} >
                     
                     {[0,0,0,0,0,0,0,0].map((val,index)=>{
                         return <DonorInfoModule key={index} />
                     })}


                    </ScrollView>

                </View>


            </ContentContainer>

        </View>
    )
}



export default ADMydonation

const styles = StyleSheet.create({
    MainView: {
        flex: 1
    }
})
