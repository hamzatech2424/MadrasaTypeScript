import React,{useState} from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ModalCompo} from '../Module Components'



const RequestForVolunteerModule: React.FC = () => {

    const [modalVisible,setmodalVisible] = useState<boolean>(false)





    return (

<React.Fragment>

        {modalVisible?

            <ModalCompo
             isVisible={modalVisible}
              setModalVisiblity={() => { setmodalVisible(preState => preState = !preState) }} />
 
            : null}   


        <View style={{marginVertical:4, backgroundColor: 'white', width: '100%', height: 180, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey' }}>

            <View style={{ width: '90%', height: '85%', flexDirection: 'column' }}>
                <View style={{ width: '100%', height: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{  height: '100%', width: '30%' }}>
                    <Text style={{ fontSize: 14}}>Service Name</Text>
                    <Text style={{ fontSize: 11,color:'grey',paddingBottom:5 }}>Jan 22, 2021</Text>

                    <View
                            style={{ backgroundColor: '#def3ed', height: 20, justifyContent: 'center', alignItems: 'center', width: 100, borderRadius: 20, flexDirection: 'row' }}>
                            <MaterialCommunityIcons name={'puzzle'} color={'#0AA360'} size={9.5} style={{ paddingRight: 5 }} />
                            <Text style={{ color: '#0AA360', fontSize: 9 }}>PHOTOGRAPHY</Text>
                        </View>

                    </View>


                    <View style={{height: '100%', width: '30%', alignItems: 'flex-end' }}>
                        <TouchableOpacity
                         onPress={()=>setmodalVisible(true)}
                            activeOpacity={0.8}
                            style={{ backgroundColor: '#0AA360', height: 20, justifyContent: 'center', alignItems: 'center', width: 100, borderRadius: 20, flexDirection: 'row' }}>
                            <Ionicons name={'hand-right'} color={'white'} size={9.5} style={{ paddingRight: 5 }} />
                            <Text style={{ color: 'white', fontSize: 9 }}>I AM WILLING</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={{ width: '75%', height: '60%' }}>
                    <Text style={{ fontSize: 14, paddingTop: 15 }}>Details:</Text>
                    <Text numberOfLines={4} style={{ fontSize: 11, color: 'lightgrey' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi qui vel iste cumque dicta minus quis voluptate? Cupiditate dolores nesciunt eaque incidunt dolor, sapiente, recusandae consectetur ratione error, blanditiis beatae.
                    </Text>

                </View>

            </View>


        </View>

        </React.Fragment>
    )
}



export default RequestForVolunteerModule