import React, { useState, } from "react";
import { View, Text, TouchableOpacity } from 'react-native'


interface Props {
    TimingObject: {
        Fajr: string,
        Duhr: string,
        Asr: string,
        Magrib: string,
        Isha: string
    },
    PrayerStartObject: {
        Fajr: string,
        Duhr: string,
        Asr: string,
        Magrib: string,
        Isha: string
    },
    height?:string | number,
    width?:string | number,
}


const getFormattedDate = (today: Date)  => {
    let week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let months = new Array('January','February','March','April','May','June','July','August','September','October','November','December')
    let day  = week[today.getDay()];
    let dd   = today.getDate();
    let mm   = months[today.getMonth()]; //January is 0!
    let yyyy = today.getFullYear();
    let hour = today.getHours();
    let minu = today.getMinutes();

    return `${day} ${mm} ${dd}, ${yyyy}`
}

let dateObject: Date = new Date();
let exactDate = getFormattedDate(dateObject);




const JamatTimingOnlyForAdmin: React.FC<Props> = ({ TimingObject, PrayerStartObject,height,width }) => {

     
    const defaultHeight: string | number = height ? height : 110
    const defaulWidth: string | number = width ? width : '100%'


    const [shift, setShift] = useState<boolean>(true)



    return (
        <View style={{ width: defaulWidth, height: defaultHeight, backgroundColor: 'white', alignSelf: 'center', flexDirection: 'column', borderRadius: 3, borderColor: 'lightgrey', borderWidth: 0.5 }}>


            <View style={{ width: '100%', height: '35%', flexDirection: 'row' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { setShift(true) }}
                    style={{ width: '100%', height: '100%', backgroundColor: shift ? '#3CBA92' : 'green', justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}>Jamat Times</Text>

                </TouchableOpacity>


            </View>

            <View style={{ width: '100%', height: '28%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>{exactDate}</Text>
            </View>


            <View style={{width: '100%', height: '37%', flexDirection: 'row', borderTopColor: 'lightgrey', borderTopWidth: 0.8 }}>
                <View style={{ width: '18%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5,borderRightWidth: 0.5,borderLeftColor:'white' }}>
                    <Text style={{ fontSize: 11 }} >Prayers</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >Timing</Text>
                </View>

                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Fajr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {shift ?
                            TimingObject.Fajr
                            :
                            PrayerStartObject.Fajr
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Duhr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {shift ?
                            TimingObject.Duhr
                            :
                            PrayerStartObject.Duhr
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Asr</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {shift ?
                            TimingObject.Asr
                            :
                            PrayerStartObject.Asr
                        }
                    </Text>
                </View>


                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Magrib</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {shift ?
                            TimingObject.Magrib
                            :
                            PrayerStartObject.Magrib
                        }
                    </Text>
                </View>

                <View style={{ width: '16.5%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRightColor: 'lightgrey', borderLeftWidth: 0.5 }}>
                    <Text style={{ fontSize: 11 }} >Isha</Text>
                    <Text style={{ fontSize: 11, color: 'grey' }} >
                        {shift ?
                            TimingObject.Isha
                            :
                            PrayerStartObject.Isha
                        }
                    </Text>
                </View>



            </View>



        </View>
    )
}

export default JamatTimingOnlyForAdmin















// interface JamatObj  {
//     Fajr:string,
//     Duhr:string,
//     Asr:string,
//     Magrib:string,
//     Isha:string
// }

//  const JmmmatTiming:JamatObj = {
//      Fajr:'04:00',
//      Duhr:'05:00',
//      Asr:'04:00',
//      Magrib:'04:00',
//      Isha:'04:00',
//  }

//  const PrayerStratTiming:JamatObj = {
//     Fajr:'04:30',
//     Duhr:'05:30',
//     Asr:'04:30',
//     Magrib:'04:30',
//     Isha:'04:30',
// }



{/* <PrayerTimings TimingObject={JmmmatTiming} PrayerStartObject={PrayerStratTiming}  /> */}