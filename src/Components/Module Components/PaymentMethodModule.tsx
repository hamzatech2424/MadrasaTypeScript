import React,{useState} from "react";
import { View, Text, TextInput } from 'react-native'


const PaymentMethodModule: React.FC = () => {

    interface CardStateType {
        cardNumber:string,
        cardHolderName:string,
        expirayDate:string ,
        cvv:string 
    }
 
    const [CardData,setCardData] =useState<CardStateType>({
        cardNumber:'',
        cardHolderName:'',
        expirayDate:'',
        cvv:''
    })



    return (
        <View style={{ width: '100%', height: 150, backgroundColor: 'lightgrey', flexDirection: 'row' }}>

            <View style={{ width: '50%', height: '100%', flexDirection: 'column', justifyContent: 'space-around' }}>

                <View style={{ width: '90%', justifyContent: 'space-between', height: 55, position: 'absolute', right: 3, top: 15 }}>
                    <Text style={{ paddingLeft: 5, fontSize: 11.5 }} >Card Number</Text>
                    <TextInput
                    value={CardData.cardNumber}
                    onChangeText={(txt)=>{setCardData({...CardData,cardNumber:txt})}}
                    style={{ backgroundColor: 'white', width: '100%', height: 30,padding:0 }} />
                </View>

                <View style={{ width: '90%', justifyContent: 'space-between', height: 55, position: 'absolute', right: 3, bottom: 15 }}>
                    <Text style={{ paddingLeft: 5, fontSize: 11.5 }} >Expiry Date</Text>
                    <TextInput 
                    value={CardData.expirayDate}
                    onChangeText={(txt)=>setCardData({...CardData,expirayDate:txt})}
                    style={{ backgroundColor: 'white', width: '100%', height: 30,padding:0 }} />
                </View>
            </View>


            <View style={{ width: '50%', height: '100%', flexDirection: 'column', justifyContent: 'space-around' }}>

                <View style={{ width: '90%', justifyContent: 'space-between', height: 55, position: 'absolute', left: 3, top: 15 }}>
                    <Text style={{ paddingLeft: 5, fontSize: 11.5 }} >Card Holder Name</Text>
                    <TextInput 
                    value={CardData.cardHolderName}
                    onChangeText={(txt)=>setCardData({...CardData,cardHolderName:txt})}
                    style={{ backgroundColor: 'white', width: '100%', height: 30,padding:0 }} />
                </View>

                <View style={{ width: '90%', justifyContent: 'space-between', height: 55, position: 'absolute', left: 3, bottom: 15 }}>
                    <Text style={{ paddingLeft: 5, fontSize: 11.5 }} >CVV</Text>
                    <TextInput
                    value={CardData.cvv}
                    onChangeText={(txt)=>{setCardData({...CardData,cvv:txt})}}
                    style={{ backgroundColor: 'white', width: '100%', height: 30,padding:0 }} />
                </View>
            </View>



        </View>
    )
}


export default PaymentMethodModule