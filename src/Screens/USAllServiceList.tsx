import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ContentContainer } from "../Components/Abstract Components";
import { ApproveChildModule, Header, RequestForVolunteerModule } from "../Components/Module Components";



const USAllServiceList: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header text={'Request for volunteer'} />
            <ContentContainer >
                <View style={styles.txtContainerView}>
                    <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(5) }}>
                        Volunteer required
                    </Text>
                </View>

                <View style={styles.ScrollContainerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {[0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                            return <RequestForVolunteerModule key={index} />
                        })
                        }
                    </ScrollView>
                </View>

            </ContentContainer>
        </View>
    )
}


export default USAllServiceList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        // backgroundColor: 'red'
    },
    txtContainerView: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    ScrollContainerView: {
        height: '84%', width: '100%'
    }

})