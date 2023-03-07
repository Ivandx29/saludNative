import React, { useState, useEffect } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Icon, Tab, TabView } from '@ui-kitten/components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';


//Screens
import FrecuenciaCardiaca from './FrecuenciaCardiaca';
import ColesterolGlucosa from './ColesterolGlucosa';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const IconActivityOutline = (props) => (
    <Icon {...props} name='activity-outline' />
);
const IconHeart = (props) => (
    <Icon {...props} name='heart-outline' />
);
const IconDroplet = (props) => (
    <Icon {...props} name='droplet-outline' />
);


const TopTabBar = ({ navigation, state }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return <>
        <TabView
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Tab icon={IconActivityOutline} title='Frecuencia Cardiaca'>
                <FrecuenciaCardiaca />
            </Tab>
            <Tab icon={IconDroplet} title='Colesterol y Gluscosa'>
                <ColesterolGlucosa />
            </Tab>
        </TabView>
    </>
}

const HomeScreen = () => {
    return (
        <Layout style={{ flex: 1, marginTop: 30 }}>
            <TopTabBar />
        </Layout>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    tabContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
});