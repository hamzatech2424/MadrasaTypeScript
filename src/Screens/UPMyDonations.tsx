import { validate } from "@babel/types";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { ContentContainer } from "../Components/Abstract Components";
import { HeaderMyDonations, USMyDonationCompo } from "../Components/Module Components";
import { navigate } from "../Navigation/Navgation";

const Dim = Dimensions.get('window').height

const UPMyDonations = () => {
    return (
        <View style={styles.MainView}>

            <HeaderMyDonations text={'My Donations'} OnPressIn={()=>navigate('UPMakeDonationPage')} />

            <ContentContainer style={{ width: '90%', backgrounColor: 'green', height: '100%' }}>

                <View style={{ width: '100%', height: Height(Dim, '90%') }}>

                    <ScrollView style={{height:Height(Dim,'90%')}} showsVerticalScrollIndicator={false} >
                     
                     {[{dated:'January 2021'},{dated:'December 2020'},{dated:'November 2020'},{dated:'October 2020'}].map((val,index)=>{
                         return <USMyDonationCompo key={index} date={val.dated} />
                     })}


                    </ScrollView>

                </View>


            </ContentContainer>

        </View>
    )
}



export default UPMyDonations

const styles = StyleSheet.create({
    MainView: {
        flex: 1
    }
})
