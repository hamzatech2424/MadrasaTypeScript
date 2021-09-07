import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { AbstractButton,AbstractTextInput,AbstractTextArea,AbstractImageUploader,AbstractImageUploaderWithBtn,ContentContainer } from "../Components/Abstract Components";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header,BoxOfTextWithLeftandRightArrows,HeaderAdmin,HeaderMyDonations } from "../Components/Module Components";
import {ADAddImamByAdmin} from '../Screens'

const Main:React.FC = ():JSX.Element => {



    const IconCompo = (name:string,size:number,color:string):JSX.Element => {
        return (
            <FontAwesome5 name={name} size={size} color={color}  />
        )
    }


    



    return(
      
        
      
      <ADAddImamByAdmin />

        
    
  


      

      
    )
}

export default Main



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

