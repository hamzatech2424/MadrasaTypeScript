import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { ContentContainer, AbstractButton, AbstractTextArea } from '../Abstract Components';
import { Colors } from '../../theme/color';
import { RadioBtnModule } from '.';



interface Props {
    isVisible: boolean,
    setModalVisiblity: () => void
}


const ModalCompo: React.FC<Props> = ({ isVisible, setModalVisiblity }) => {
    const [newEmail, setnewEmail] = useState<string>('');



    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModalVisiblity();
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ContentContainer style={{ height: '100%', width: '80%' }}>
                            <View style={styles.contentOuterView}>

                                <Text style={{paddingVertical:10}}>Send Details</Text>

                              <View style={{width:'100%',height:'55%'}}> 
                              <Text style={{paddingLeft:10,fontSize:11}}>Qualified for this service?</Text>
                              <View style={{width:'100%',height:'60%',justifyContent:'center',alignItems:'flex-start'}}>
                              <RadioBtnModule />
                              </View>
                                
                              </View>

                               
                            </View>

                            <View style={styles.txtinputView}>

                                <AbstractTextArea width={'100%'} height={'100%'} placeHolderTextSizes={12} />
                         
                            </View>

                            <View style={styles.btnOuterView}>
                                <AbstractButton  txtSize={13} width={'100%'} height={'60%'} txt={'SEND'} />
                            </View>
                        </ContentContainer>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ModalCompo;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        // backgroundColor:'black'
        // marginTop: 22
    },
    modalView: {
        // marginTop: 20,
        height: '40%',
        width: '90%',
        backgroundColor: 'white',
        flexDirection: 'column',
        // borderRadius: 20,
        // padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    contentOuterView: {
        width: '100%',
        // backgroundColor: 'red',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtinputView: {
        width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center',
        height: '35%',
    },
    btnOuterView: {
        width: '100%',
        // backgroundColor:'grey',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});