import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from "../theme/Color";
import { Height } from "../Assets/Height";
import { AbstractButton, ContentContainer } from "../Components/Abstract Components";
import { Header, ApproveChildModule } from "../Components/Module Components";


interface Props {
    text?: string
}



const LineCompo:React.FC<Props> = ({text}) =>{
    return(
        <View style={{ width: '100%', height: '16.6%', flexDirection: 'row' }}>
        <View style={{ width: '10%', height: '100%',justifyContent:'center',alignItems:'center' }}>
            <Image source={require('../Assets/images/check.png')} style={{width:'50%',height:'50%'}} resizeMode={'contain'} />
        </View>

        <View style={{  width: '90%', height: '100%',justifyContent:'center' }}>
           <Text>{text}</Text>
        </View>
    </View>

    )
}



const USMemberUpgrade:React.FC = () => {


const arr:string[] = [
    ' Your membership will support the Madrassa.',
    'You will receive personal invitations to special events ',
    'You will have access to details about committee members',
    'You will have the opportunity to make app improvement suggestions',
    'You will have voting rights at elections',
    'You will be able to pickup a FREE Mosque Calendar'
]


    return (
        <View style={styles.container}>
            <Header text={'Membership Upgraded'} />
            <ContentContainer>
                <View style={styles.txtContainerView}>

                    <Text style={{ color: Colors.darkgreen, fontSize: moderateScale(20), fontWeight: 'bold' }}>Thank You!</Text>
                    <Text style={{ textAlign: 'center', fontSize: moderateScale(12) }}>{`for submitting the details for the \n madrassa, Your submission is \n pending approval.`}</Text>

                </View>

                <View style={styles.approveModuleContainerView}>
  
             {arr.map((val,index)=>{
                 return  <LineCompo key={index} text={val} />   
             })}
                
                </View>

            </ContentContainer>

        </View>
    )
}


export default USMemberUpgrade


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txtContainerView: {
        width: '100%',
        height: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    approveModuleContainerView: {
        width: '100%',
        height: '42%',
        marginTop:'5%'
        // backgroundColor: 'blue'
    },


})