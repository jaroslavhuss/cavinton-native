import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
const MainPage = () => {
    return (
        <>

            <Image style={{
                resizeMode: "contain",
                width: "80%",
                alignSelf: "flex-end",
                marginTop: 90
            }} source={require("../assets/main_logo.png")} />
        </>
    )
}

export default MainPage

const styles = StyleSheet.create({})