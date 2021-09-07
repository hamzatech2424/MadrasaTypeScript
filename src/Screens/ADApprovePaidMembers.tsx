import { validate } from "@babel/types";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { ContentContainer } from "../Components/Abstract Components";
import { HeaderMyDonations, ApprovePaidMemberAdmin, Header } from "../Components/Module Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Dim = Dimensions.get('window').height

const ADApprovePaidMembers:React.FC = () => {
    return (
        <View style={styles.MainView}>

            <Header text={'Approve Paid Members'} />

            <ContentContainer style={{ width: '90%', backgrounColor: 'green', height: '100%' }}>


            <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(10),marginTop:'6%' }}>
                    Approve Member
                    </Text>

                <View style={{ width: '100%', height: Height(Dim, '80%') }}>

                    <ScrollView showsVerticalScrollIndicator={false} >
                     
                     {[0,0,0,0,0,0,0,0].map((val,index)=>{
                         return <ApprovePaidMemberAdmin key={index} />
                     })}


                    </ScrollView>

                </View>

            </ContentContainer>

        </View>
    )
}



export default ADApprovePaidMembers

const styles = StyleSheet.create({
    MainView: {
        flex: 1
    }
})
