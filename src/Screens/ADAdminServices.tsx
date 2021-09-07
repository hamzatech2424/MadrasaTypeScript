import { validate } from "@babel/types";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { ContentContainer } from "../Components/Abstract Components";
import { HeaderMyDonations, VolunteerRequiredAdmin, Header } from "../Components/Module Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import HeaderAdminServices from "../Components/Module Components/HeaderAdminServices";
import { navigate } from "../Navigation/Navgation";


const Dim = Dimensions.get('window').height

const ADAdminServices:React.FC = () => {
    return (
        <View style={styles.MainView}>

            <HeaderAdminServices text={'Volunteer Required'} OnPressIn1={()=>navigate('ADInterestedPeoplePage')} OnPressIn2={()=>navigate('ADServicePage')} />

            <ContentContainer style={{ width: '90%', backgrounColor: 'green', height: '100%' }}>


            <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(10),marginTop:'6%' }}>
                    Request for Volunteer
                    </Text>

                <View style={{ width: '100%', height: Height(Dim, '80%') }}>

                    <ScrollView showsVerticalScrollIndicator={false} >
                     
                     {[0,0,0,0,0,0,0,0].map((val,index)=>{
                         return <VolunteerRequiredAdmin key={index} />
                     })}


                    </ScrollView>

                </View>

            </ContentContainer>

        </View>
    )
}



export default ADAdminServices

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor:'white'
    }
})
