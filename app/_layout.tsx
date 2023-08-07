import { useState, useEffect, useCallback } from 'react';
import { Slot } from 'expo-router';
import { StatusBar,ImageBackground, Dimensions, View, Image } from 'react-native';
import Menu from '../components/Menu';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
export default function HomeLayout() {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
    const [width, setWidth] = useState(Dimensions.get("screen").width);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
          "change",
          ({ window, screen }) => {
            setHeight(screen.height);
            setWidth(screen.width);
          }
        );
          console.log(height,width)
        return () => subscription?.remove();
      },[height,width]);
    
      const [fontsLoaded, err] = useFonts({
        'AkrobatRegular': require("../assets/Akrobat-Bold.otf"),
        'AkrobatBold': require("../assets/Akrobat-Regular.otf"),
      });
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
      if (!fontsLoaded) {
        return null;
      }
    
      
     
      function cacheImages(images:string[]) {
        return images.map(image => {
          if (typeof image === 'string') {
            return Image.prefetch(image);
          } else {
            return Asset.fromModule(image).downloadAsync();
          }
        });
      }
    
  return (
    <ImageBackground source={width === 810 ? require("../assets/cavinton_bg.png"): require("../assets/cavinton_bg2.png")} style={{
        width,
        height
    }} onLayout={onLayoutRootView}>
        <StatusBar hidden={true} />
        <View style={{
          flexDirection:"row",
          display:"flex",
          width,
          height
        }}>
          <Menu />
          <View style={{
            flex:height === 810 ? 11 : 10
          }}>
          <Slot/>
          </View>
        </View>
    </ImageBackground>

  )
}
