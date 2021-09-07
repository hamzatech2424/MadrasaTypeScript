import { validate } from "@babel/types";
import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Height } from "../Assets/Height";
import { ContentContainer } from "../Components/Abstract Components";
import { InterestedPeopleAdmin, VolunteerRequiredAdmin, Header } from "../Components/Module Components";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import HeaderAdminServices from "../Components/Module Components/HeaderAdminServices";


const Dim = Dimensions.get('window').height

const ADInterestedPeople:React.FC = () => {
    return (
        <View style={styles.MainView}>

            <Header text={'Interested People'} />

            <ContentContainer style={{ width: '90%', backgrounColor: 'green', height: '100%' }}>


            <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(10),marginTop:'6%' }}>
                    Interested People List
                    </Text>

                <View style={{ width: '100%', height: Height(Dim, '80%') }}>

                    <ScrollView showsVerticalScrollIndicator={false} >
                     
                     {[0,0,0,0,0,0,0,0].map((val,index)=>{
                         return <InterestedPeopleAdmin key={index} />
                     })}


                    </ScrollView>

                </View>

            </ContentContainer>

        </View>
    )
}



export default ADInterestedPeople

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor:'white'
    }
})
