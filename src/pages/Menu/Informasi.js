import { ActivityIndicator, FlatList, Image, ImageBackground, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DimensionThisPhone, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { MyHeader, MyInput } from '../../components';
export default function ({ navigation, route }) {
    const item = route.params;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getDataTransaksi = () => {
        setLoading(true);
        axios.post(apiURL + 'informasi').then(res => {
            console.log(res.data);
            setData(res.data);
            setTMP(res.data)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getDataTransaksi();
    }, []);

    const __renderItem = ({ item }) => {
        return (



            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('InformasiDetail', item)
            }}>
                <View style={{
                    marginBottom: 10,
                    width: '100%',
                    position: 'relative',
                    borderRadius: 10,
                    overflow: 'hidden'
                }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            // resizeMode: 'contain',
                            height: 250,
                            width: '100%',
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        padding: 10,
                        backgroundColor: colors.tertiary,
                        opacity: 0.9
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.white,
                            fontSize: DimensionThisPhone / 22
                        }}>{item.judul}</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.white,
                            fontSize: DimensionThisPhone / 22
                        }}>{moment(item.tanggal).format('dddd, DD MMM YYYY')}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>



        )
    }

    const [key, setKey] = useState('');
    const [TMP, setTMP] = useState({});
    return (
        <ImageBackground source={require('../../assets/back.jpg')} style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Informasi" onPress={() => navigation.goBack()} />



            {!loading &&
                <View style={{
                    flex: 1,
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        position: 'relative'
                    }}>
                        {key.length > 0 &&

                            <TouchableWithoutFeedback onPress={() => {
                                setKey(''); setData(TMP);
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    zIndex: 99,
                                    top: 10,
                                    right: 10,
                                }}>
                                    <Icon type='ionicon' name='close' color={colors.secondary} />
                                </View>
                            </TouchableWithoutFeedback>}
                        <View style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                        }}>
                            <Icon type='ionicon' name='search' color={colors.white} />
                        </View>
                        <TextInput value={key} onChangeText={x => {
                            setKey(x);
                            if (x.length > 0) {
                                let TMPSrc = data.filter(i => i.judul.toLowerCase().indexOf(x.toLowerCase()) > -1);
                                if (TMPSrc.length > 0) {
                                    setData(TMPSrc);
                                }
                            } else {
                                setData(TMP);
                            }
                        }} placeholder='Pencarian . . .'
                            placeholderTextColor={colors.white}
                            style={{
                                height: 45,
                                borderWidth: 1,
                                marginBottom: 10,
                                borderRadius: 30,
                                paddingLeft: 40,
                                borderColor: colors.white,
                                fontFamily: fonts.secondary[600],
                                fontSize: DimensionThisPhone / 22
                            }} />
                    </View>
                    <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={__renderItem} />

                </View>
            }
            {loading &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.primary} />

                </View>
            }



        </ImageBackground>
    )
}

const styles = StyleSheet.create({})