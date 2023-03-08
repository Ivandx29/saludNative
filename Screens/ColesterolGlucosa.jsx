import React, { useState } from 'react'
import { Layout, Text, Button, Input, Icon, Card, Avatar, ListItem } from '@ui-kitten/components';
import tailwind from 'tailwind-rn';
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, ScrollView, StyleSheet, View, Keyboard } from 'react-native';

const ColesterolGlucosa = () => {
    // Modal -> Información
    const [infoNormal, setInfoNormal] = useState(false);
    const [msj, setMsj] = useState();
    const [number, setNumber] = useState();

    const trashTwoOutlineIcon = (props) => <Icon {...props} name='trash-2-outline' />;
    const checkmarkCircleOutlineIcon = (props) => <Icon {...props} name='checkmark-circle-outline' />;

    const ItemImage = (props) => (
        <Avatar
            {...props}
            style={styles.Avatar}
            source={require('../assets/sangre.png')}
        />
    );

    // Función para mensaje de error en caso de faltar algún valor en un componente
    const getFormErrorMessage = (name, message) => {
        return errors[name] && <Text style={tailwind('px-2')} status='danger'> {message} </Text>;
    };

    const { control, formState: { errors }, reset, handleSubmit, getValues, setValue } = useForm();
    // Función para boton limpiar
    const clean = () => {
        setInfoNormal(false);
        setMsj('');
        reset();
    };

    const onSubmit = (data) => {
        // Función para calcular el IMC
        let imc = (data.Peso / (data.Altura * data.Altura)).toFixed(1);

        if (data.Glucosa < 100) {
            setInfoNormal(true);
            setMsj('Usted es una Persona Saludable');
        }
        else if (data.Glucosa >= 100 && data.Glucosa < 126) {
            setInfoNormal(true);
            setMsj('Usted tiene Prediabetes');
        }
        else if (data.Glucosa >= 127 && data.Edad < 20) {
            setInfoNormal(true);
            setMsj('Usted tiene Diabetes Tipo 1');
        }
        else if (imc < 25 && data.Glucosa >= 127) {
            setInfoNormal(true);
            setMsj('Usted tiene Diabetes Tipo 2');
        }

    }
    return (
        <SafeAreaView style={tailwind('h-full')}>
            <Card style={styles.Card}>
                <Layout style={tailwind('px-5 mt-4')} level='1'>
                    <Text style={tailwind('my-1')} appearance='hint'>Ingrese su Glucosa: </Text>
                    <Controller
                        name='Glucosa'
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                isFocused={true}
                                status={fieldState.invalid ? 'danger' : 'basic'}
                                maxLength={3}
                                value={field.value}
                                onChangeText={nextValue => {
                                    let newNumber = (nextValue.replace(/[^0-9]/g, ''));
                                    setNumber(newNumber);
                                    field.onChange(newNumber);
                                }}
                            />
                        )} />
                </Layout>
                {getFormErrorMessage("Glucosa", "Glucosa es requerido")}
                <Layout style={tailwind('px-5 mt-4')} level='1'>
                    <Text style={tailwind('my-1')} appearance='hint'>Ingrese su Peso: </Text>
                    <Controller
                        name='Peso'
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                isFocused={true}
                                status={fieldState.invalid ? 'danger' : 'basic'}
                                maxLength={3}
                                value={field.value}
                                onChangeText={nextValue => {
                                    let newNumber = (nextValue.replace(/[^0-9]/g, ''));
                                    setNumber(newNumber);
                                    field.onChange(newNumber);
                                }}
                            />
                        )} />
                </Layout>
                {getFormErrorMessage("Peso", "Peso es requerido")}

                <Layout style={tailwind('px-5 mt-4')} level='1'>
                    <Text style={tailwind('my-1')} appearance='hint'>Ingrese su Altura en Metros: </Text>
                    <Controller
                        name='Altura'
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                isFocused={true}
                                status={fieldState.invalid ? 'danger' : 'basic'}
                                maxLength={4}
                                value={field.value}
                                onChangeText={
                                    field.onChange
                                }
                            />
                        )} />
                </Layout>
                {getFormErrorMessage("Altura", "Altura es requerido")}

                <Layout style={tailwind('px-5 mt-4 mb-4')} level='1' >
                    <Text style={tailwind('my-1')} appearance='hint'>Ingrese su Edad: </Text>
                    <Controller
                        name='Edad'
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <Input
                                isFocused={true}
                                status={fieldState.invalid ? 'danger' : 'basic'}
                                maxLength={2}
                                value={field.value}
                                onChangeText={nextValue => {
                                    let newNumber = (nextValue.replace(/[^0-9]/g, ''));
                                    setNumber(newNumber);
                                    field.onChange(newNumber);
                                }}
                            />
                        )} />
                </Layout>
                {getFormErrorMessage("Edad", "Edad es requerido")}

                <Layout style={tailwind('items-center justify-center flex-row px-3 py-3')}>
                    <Button style={tailwind('m-2 rounded-full items-center justify-center')} status='warning' accessoryLeft={trashTwoOutlineIcon} onPress={clean}>Limpiar</Button>
                    <Button style={tailwind('m-2 rounded-full items-center justify-center')} status='success' accessoryRight={checkmarkCircleOutlineIcon}
                        onPress={handleSubmit(onSubmit)}
                    >Diagnostico</Button>
                </Layout>
                {/* Modal Para mostrar que tipo de Frecuencia Cardiaca ES: */}
                {infoNormal && <>
                    <Card style={styles.Card}>
                        <ListItem
                            title='Resultado'
                            description={msj}
                            accessoryLeft={ItemImage}
                        />
                    </Card >

                </>

                }
            </Card >
        </SafeAreaView>
    )
}

export default ColesterolGlucosa;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    CardTotalRecords: {
        marginLeft: 4,
        marginTop: 0,
        marginRight: 4,
        marginBottom: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    Modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    Card: {
        borderRadius: 25,
    },
    Backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    Icon: {
        width: 16,
        height: 16,
    },
    Button: {
        marginTop: 1,
        marginBottom: 1,
        marginLeft: 1,
        borderRadius: 50,
        width: '30%',
        height: '110%'
    },
    CardFlatList: {
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 15
    }, Avatar: {
        width: 40,
        height: 40,
    }
});