import { StyleSheet, Text, View, Image, } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const Menu = () => {
  return (
    <View style={{
      flex:3,
      justifyContent:"center",
      alignItems:"center",
      zIndex:20020
    }}> 
      <Link href="/ucinky" style={styles.link}>
        <Image source={require("../assets/ucinky.png")} style={styles.img} />
      </Link>
      <Link href="pacient" style={styles.link}>
        <Image source={require("../assets/pacient.png")} style={styles.img} />
      </Link>
      <Link href="/symptomy" style={styles.link}>
        <Image source={require("../assets/symptomy.png")} style={styles.img} />
      </Link>
      <Link href="/baleni" style={styles.link}>
        <Image source={require("../assets/baleni.png")} style={styles.img} />
      </Link>
      <Link href="/spc" style={styles.link}>
        <Image source={require("../assets/spc.png")} style={styles.img} />
      </Link>
      <Link href="/letak" style={styles.link}>
        <Image source={require("../assets/letak.png")} style={styles.img} />
      </Link>
      <Link href="/pozvanka" style={styles.link}>
        <Image source={require("../assets/pozvanka.png")} style={styles.img} />
      </Link>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
     
      <Link href="/info" style={styles.link}>
      <AntDesign name="infocirlceo" size={34} color="grey" style={{textAlign:"center"}}/>
      </Link>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  link:{
    height:50
  },
  img:{
    resizeMode:"contain",
    maxWidth:"100%",
    height:50
  }
})