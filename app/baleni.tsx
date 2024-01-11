import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Baleni = () => {
    return (
        <>
            <View style={styles.row}>

                <Text style={styles.nadpis}>Balení{"\n"}
                    <Text style={styles.nadpis2}>3 x 10 mg{"\n"}<Text style={{ fontSize: 25 }}>režim dávkování  1-1-1   2-1-0</Text></Text>
                </Text>

                <View style={{ width: 200, height: 100 }}>
                            <Link href="/">
                                <Image style={styles.image2} source={require("../assets/logo_cavinton_small.png")} />
                                </Link>

                        </View>
            </View>
            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                <Image source={require("../assets/baleni_obal.png")} style={{
                    width:"100%",
                    height:"100%",
                    resizeMode:"contain",
                    maxWidth:"80%"
                }}/>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
            </View>
        </>
    )
}

export default Baleni

const styles = StyleSheet.create({
    bubble: {
        position: "absolute", padding: 30, zIndex: 200000, top: 0, left: "45%",
        backgroundColor: "white",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },

    reoPosition: {
        position: "relative",
        marginLeft: 300,
        marginTop: -20,
        marginBottom: 20,
        padding: 20,
    },
    protiPosition: {
        position: "relative",
        textAlign: "center",
        marginLeft: 400,

        marginBottom: 20
    },
    protiEfekt: {
        position: "relative",
        textAlign: "center",
        marginLeft: 350,
        width: 400,

        marginBottom: 20
    },
    neuroProtekt: {
        position: "relative",
        textAlign: "center",
        marginLeft: 300
    },
    greenSquare: {
        backgroundColor: "#2e2873",
        width: 20,
        height: 20
    },
    blueSquare: {
        backgroundColor: "#8bb243",
        width: 20,
        height: 20
    },
    reologicky: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 20,
        fontFamily: 'AkrobatRegular',
        zIndex: 200
    },
    nadpis: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 60,
        fontFamily: 'AkrobatBold'
    },
    nadpis2: {
        color: "#8bb243",
        fontWeight: "bold",
        margin: 5,
        fontSize: 35,
        fontFamily: 'AkrobatBold'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        zIndex: -1
    },
    image2: {
        resizeMode: "cover",
        width:200,
        height:100
    },
    image: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    }
})