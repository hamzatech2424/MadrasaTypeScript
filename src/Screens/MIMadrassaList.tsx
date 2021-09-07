import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ContentContainer } from "../Components/Abstract Components";
import { ApproveChildModule, HeaderUsProfile } from "../Components/Module Components";
import { navigate } from "../Navigation/Navgation";



const MIMadrassaList: React.FC = () => {
    return (
        <View style={styles.container}>
                 <HeaderUsProfile text={'Madrassas'} Iconsimple OnPressIn={()=>navigate('MIMadrassaRequestPage')} />
            <ContentContainer >
          

                <View style={styles.ScrollContainerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {[0, 0, 0, 0, 0, 0, 0].map((val, index) => {
                            return <ApproveChildModule key={index} />
                        })
                        }
                    </ScrollView>
                </View>

            </ContentContainer>
        </View>
    )
}


export default MIMadrassaList


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