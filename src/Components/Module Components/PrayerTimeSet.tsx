import React,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from '../../theme/Color';

const PrayerTimeSet: React.FC = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date:object) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };




    return (
        <View style={{ width: '100%', height: 150, flexDirection: 'column' }}>



      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
      />


            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>showDatePicker()}
            style={{ backgroundColor: Colors.lightgreen, width: '100%', justifyContent: 'center', alignItems: 'center', height: '20%' }}>

                <View style={{height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 12,color:'white' }}>Fajr</Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 12,color:'white' }}>04:00</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity 
            activeOpacity={0.8}
            style={{ backgroundColor: Colors.darkgreen, width: '100%', justifyContent: 'center', alignItems: 'center', height: '20.1%' }}>

                <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 12,color:'white' }}>Fajr</Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 12,color:'white' }}>04:00</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity 
            activeOpacity={0.8}
            style={{ backgroundColor: Colors.lightgreen, width: '100%', justifyContent: 'center', alignItems: 'center', height: '20%' }}>

                <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 12,color:'white' }}>Fajr</Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 12,color:'white' }}>04:00</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity 
            activeOpacity={0.8}
            style={{ backgroundColor: Colors.darkgreen, width: '100%', justifyContent: 'center', alignItems: 'center', height: '20.1%' }}>

                <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 12,color:'white' }}>Fajr</Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 12,color:'white' }}>04:00</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
            activeOpacity={0.8}
            style={{ backgroundColor: Colors.lightgreen, width: '100%', justifyContent: 'center', alignItems: 'center', height: '20%' }}>

                <View style={{ height: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ justifyContent: 'flex-start', fontSize: 12,color:'white' }}>Fajr</Text>
                    <Text style={{ justifyContent: 'flex-end', fontSize: 12,color:'white' }}>04:00</Text>
                </View>
            </TouchableOpacity>




        </View>
    )

}

export default PrayerTimeSet