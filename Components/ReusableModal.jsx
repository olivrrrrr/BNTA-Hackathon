import React, { useContext } from "react";
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ModalContext } from '../Context/ModalContext';

export default function ReuseableModal(props) {
    let children = props.children;
    let onAccept = props.onAccept;
    let onDecline = props.onDecline;

    const { containerStyle, textStyle, sectionStyle } = styles;
    const { toggleModal } = useContext(ModalContext);
    return (
        <Modal 
            transparent={true}
            animationType="fade"
            onRequestClose={() => {}}
        >
            <TouchableOpacity
                style={containerStyle}
                onPress={() => toggleModal()}
                activeOpacity={1}
            >
                    <View>

                        <View style={sectionStyle}>
                            <Text style={textStyle}>
                                {children}
                            </Text>

                            <Text>
                                <Button onPress={onAccept} title="Accept" />
                                <Button onPress={onDecline} title="Decline" />
                            </Text>
                        </View>
                    </View>
            </TouchableOpacity>
        </Modal>
    )
} 

const styles = {
    sectionStyle: {
        justifyContent: 'center',
        margin: 40, 
        padding: 20, 
        borderRadius: 10,
        backgroundColor:'#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
    }, 
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        flex: 1,
    },
};