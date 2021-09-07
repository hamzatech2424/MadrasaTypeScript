import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ContentContainer } from "../Components/Abstract Components";
import { ApproveChildModule, FriendRequestModule, Header, HeaderUsProfile } from "../Components/Module Components";



const MIMadrassaRequest: React.FC = () => {
    return (
        <View style={styles.container}>
                 <Header text={'Madrassas Requests'}  />
            <ContentContainer >
          

                <View style={styles.ScrollContainerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {[0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                            return <FriendRequestModule key={index} />
                        })
                        }
                    </ScrollView>
                </View>

            </ContentContainer>
        </View>
    )
}


export default MIMadrassaRequest


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
        height: '90%',
        marginTop:'4%',
        // backgroundColor:'red'               ,       
        width: '100%'
    }

})