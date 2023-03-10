import React, { useState, useEffect } from 'react';
import { Layout, Text, Modal, Button, Card } from '@ui-kitten/components';
import { Icon, Tab, TabView } from '@ui-kitten/components'
import { StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';


//Screens
import FrecuenciaCardiaca from './FrecuenciaCardiaca';
import ColesterolGlucosa from './ColesterolGlucosa';

const IconActivityOutline = (props) => (
    <Icon {...props} name='activity-outline' />
);
const IconHeart = (props) => (
    <Icon {...props} name='heart-outline' />
);
const IconDroplet = (props) => (
    <Icon {...props} name='droplet-outline' />
);


const TopTabBar = () => {
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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Layout style={{ flex: 1, marginTop: 45 }}>
            <Modal
                visible={visible}
                backdropStyle={styles.Modal}>
                <Card style={styles.CardTotalRecords} disabled={true}>
                    <Text style={tailwind('text-justify')}>Esta aplicacion ayuda a dar un diagnostico, para saber si es usted puede
                        tener algun problema de salud, como por ejemplo: presion alta, presion baja, colesterol alto, tipo de diabetes, etc.
                    </Text>
                    <Button style={tailwind('m-6 rounded-full ')} status='danger' onPress={() => setVisible(false)}>
                        Cerrar
                    </Button>
                </Card>
            </Modal>
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
    CardTotalRecords: {
        textAlign: 'justify',
        marginRight: 35,
        marginLeft: 35,
    },
    Modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});