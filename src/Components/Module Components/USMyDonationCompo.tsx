import React from "react";
import {View,Text, ScrollView} from 'react-native'
import { DonorInfoModule } from '../Module Components';

interface Props {
    date?:string,
}


const USMyDonationCompo:React.FC<Props> = ({date}) => {
  
    const defaultDate = date ? date : 'No Month'


    return(
        <View style={{width:'100%',height:200,marginTop:'2%'}}>
            <Text style={{fontSize:17,paddingTop:'4%'}}>{defaultDate}</Text>
            <View style={{width:'100%',height:'78%',position:'absolute',bottom:0}}>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >

          

            {[0,0,0].map((val,index)=>{
              return   <DonorInfoModule key={index} />
          })}  
    

                </ScrollView>
            </View>
            
        </View>
    )
}


export default USMyDonationCompo