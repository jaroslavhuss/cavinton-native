import { StyleSheet, Image } from 'react-native'
import React from 'react'


const main = () => {
  return (
    <Image source={require("../assets/main_logo.png")} style={{
      width:"100%",
      height:"100%",
      resizeMode:"contain"
    }}/>
  )
}

export default main

const styles = StyleSheet.create({})