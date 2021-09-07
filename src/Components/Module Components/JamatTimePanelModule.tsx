import React from 'react'
import { View, Text } from 'react-native'



const JamatTimePanelModule: React.FC = () => {
    return (
        <View style={{ width: '100%', height: 330 }}>

            <View style={{ height: 90, width: '100%', flexDirection: 'column', borderWidth: 1, borderColor: 'lightgrey  ' }}>

                <View style={{ backgroundColor: '#00d2ff', width: '100%', justifyContent: 'center', alignItems: 'center', height: '45%', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>Friday January 22, 2021</Text>
                </View>

                <View style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', height: '55%',marginBottom:'1.5%' }}>

                    <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ justifyContent: 'flex-start', fontSize: 12 }}>Fajr</Text>
                        <Text style={{ justifyContent: 'flex-end', fontSize: 12 }}>04:00</Text>
                    </View>
                </View>



                <View style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: 'lightgrey', marginBottom: '1%' }}>
                    <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ justifyContent: 'flex-start', fontSize: 12 }}>Duhr</Text>
                        <Text style={{ justifyContent: 'flex-end', fontSize: 12 }}>04:00</Text>
                    </View>
                </View>


             
                <View style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: 'lightgrey', marginBottom: '1%' }}>
                    <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ justifyContent: 'flex-start', fontSize: 12 }}>Asar</Text>
                        <Text style={{ justifyContent: 'flex-end', fontSize: 12 }}>04:00</Text>
                    </View>
                </View>


                <View style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: 'lightgrey', marginBottom: '1%' }}>
                    <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ justifyContent: 'flex-start', fontSize: 12 }}>Magrib</Text>
                        <Text style={{ justifyContent: 'flex-end', fontSize: 12 }}>04:00</Text>
                    </View>
                </View>
 

                <View style={{ backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: 'lightgrey', marginBottom: '1%' }}>
                    <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ justifyContent: 'flex-start', fontSize: 12 }}>Ihsa</Text>
                        <Text style={{ justifyContent: 'flex-end', fontSize: 12 }}>04:00</Text>
                    </View>
                </View>


            </View>


        </View>
    )

}

export default JamatTimePanelModule