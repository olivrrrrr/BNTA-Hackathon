import React, { useContext } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import SliderToggle from '../Components/SliderToggle';
import { ThemeContext } from '../Context/ThemeContext';
import Header from '../Components/Header';
import Section from '../Components/Section';

export default function HomeContainer({ navigation }) {
    const { toggle } = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: toggle ? '#333' : '#CCC',
        color: toggle ? '#CCC' : '#333',
    }
    return (
        <SafeAreaView style={[styles.appContainer, themeStyles]}>
            <ScrollView>
                <SliderToggle />
                <Header />
                <View>
                    <Section title={'Title 1'} description={'Description 1'} />
                    <Section title={'Title 2'} description={'Description 2'} />
                    <Section title={'Title 3'} description={'Description 3'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    appContainer: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});