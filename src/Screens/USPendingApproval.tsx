import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from "../theme/Color";
import { Height } from "../Assets/Height";
import { AbstractButton, ContentContainer } from "../Components/Abstract Components";
import { Header, ApproveChildModule } from "../Components/Module Components";


const USPendingApproval = () => {
    return (
        <View style={styles.container}>
            <Header text={'Pending Approval'} />
            <ContentContainer>
                <View style={styles.txtContainerView}>

                    <Text style={{ color: Colors.darkgreen, fontSize: moderateScale(22), fontWeight: 'bold' }}>Thank You!</Text>
                    <Text style={{ textAlign: 'center', fontSize: moderateScale(12) }}>{`for submitting the details for the \n madrassa, Your submission is \n pending approval.`}</Text>

                </View>


                <View style={styles.approveModuleContainerView}>
                    <View style={{ width: '100%', height: '12%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: moderateScale(14) }}>Children List</Text>
                        <Text style={{ fontSize: moderateScale(10) }}>View All</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <ApproveChildModule />
                            <ApproveChildModule />
                            <ApproveChildModule />
                        </ScrollView>
                    </View>
                </View>


                <View style={styles.btnContainerView}>
                    <AbstractButton text={'Add Another Child'} txtSize={moderateScale(12)} />
                </View>

            </ContentContainer>

        </View>
    )
}


export default USPendingApproval


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txtContainerView: {
        width: '100%',
        height: '27%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    approveModuleContainerView: {
        width: '100%',
        height: '42%'
    },
    btnContainerView: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})