import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ContentContainer } from "../Components/Abstract Components";
import { ApproveChildModule, Header, NotificationListModule } from "../Components/Module Components";



const ADNotification: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header text={'Notifications'} />
            <ContentContainer >
                <View style={styles.txtContainerView}>
                    <Text style={{ fontSize: moderateScale(15), paddingLeft: moderateScale(5), paddingBottom: moderateScale(5) }}>
                    Notification List
                    </Text>
                </View>

                <View style={styles.ScrollContainerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {[0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                            return <NotificationListModule key={index} />
                        })
                        }
                    </ScrollView>
                </View>

            </ContentContainer>
        </View>
    )
}


export default ADNotification


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