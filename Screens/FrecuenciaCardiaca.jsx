import React, { useState } from 'react'
import { Divider, Select, SelectItem, Layout, Text, Button, Input, Icon, Modal, Card, NativeDateService } from '@ui-kitten/components';
import tailwind from 'tailwind-rn';
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet } from 'react-native';


const FrecuenciaCardiaca = () => {

    // Modal -> Información
    const [infoNormal, setInfoNormal] = useState(false);
    const [msj, setMsj] = useState();
    const [number, setNumber] = useState();

    // const tailwind = useTailwind();

    const trashTwoOutlineIcon = (props) => <Icon {...props} name='trash-2-outline' />;
    const checkmarkCircleOutlineIcon = (props) => <Icon {...props} name='checkmark-circle-outline' />;

    // Función para mensaje de error en caso de faltar algún valor en un componente
    const getFormErrorMessage = (name, message) => {
        return errors[name] && <Text style={tailwind('px-2')} status='danger'> {message} </Text>;
    };

    //Controladores
    const { control, formState: { errors }, reset, handleSubmit, getValues, setValue } = useForm();

    // Función para boton limpiar
    const clean = () => {
        setInfoNormal(false);
        setMsj('');
        reset();
        setValue('PresionArterialSistolica', '');
        setValue('PresionArterialDiastolica', '');
    };

    const onSubmit = (data) => {
        let presion = parseInt(data.PresionArterialSistolica) + parseInt((2 * data.PresionArterialDiastolica))
        let presionFinal = parseInt(presion / 3)

        if (presionFinal < 60) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Baja')
        }
        else if (presionFinal >= 60 && presionFinal <= 90) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Normal')
        }
        else if (presionFinal >= 91 && presionFinal <= 129) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Alta')
        }
        else if (presionFinal >= 130 && presionFinal <= 139) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Hipertension Grado 1')
        }
        else if (presionFinal >= 140 && presionFinal <= 179) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Hipertension Grado 2')
        }
        else if (presionFinal >= 180) {
            setInfoNormal(true)
            setMsj('Su Presion Arterial es Crisis de Hipertension')
        }

    }

    return (
        <SafeAreaView style={tailwind('flex-1')}>
            <Card style={tailwind('my-1 mt-8')}>
                <Layout style={tailwind('px-5 mt-3')} level='1'>
                    <Text style={tailwind('my-1')} category='s1' appearance='hint'>Ingrese su Presion Arterial Sistolica: </Text>
                    <Controller
                        name='PresionArterialSistolica'
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
                {getFormErrorMessage("PresionArterialSistolica", "Presion Arterial Sistolica es requerido")}

                <Layout style={tailwind('px-5 mt-3')} level='1'>
                    <Text style={tailwind('my-1')} category='s1' appearance='hint'>Ingrese su Presion Arterial Diastolica: </Text>
                    <Controller
                        name='PresionArterialDiastolica'
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
                {getFormErrorMessage("PresionArterialDiastolica", "Presion Arterial Diastolica es requerido")}

                <Layout style={tailwind('items-center justify-center flex-row px-3 py-3')}>
                    <Button style={tailwind('m-4 rounded-full items-center justify-center')} status='warning' accessoryLeft={trashTwoOutlineIcon} onPress={clean}>Limpiar</Button>
                    <Button style={tailwind('m-2 rounded-full items-center justify-center')} status='success' accessoryRight={checkmarkCircleOutlineIcon}
                        onPress={handleSubmit(onSubmit)}
                    >Diagnosto</Button>
                </Layout>
                {/* Modal Para mostrar que tipo de Frecuencia Cardiaca ES: */}
                {infoNormal && <>
                    <Card style={tailwind('my-1 rounded-full mt-12')}>
                        <Text style={tailwind('my-1')} category='s1'>{msj} </Text>
                    </Card >
                </>
                }
            </Card >
        </SafeAreaView>
    )
}

export default FrecuenciaCardiaca

/* <-- Styles --> */
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
    },
});