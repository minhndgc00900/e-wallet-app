import { Dimensions, Platform, StatusBar } from "react-native";

export const SLOGAN = `Không tiền mặt
Giữ chặt, tiêu bền`;

export const isIOS = () => Platform.OS === "ios"

export const isAndroid = () => Platform.OS === "android"

export const STATUSBAR_HEIGHT = (isAndroid ? StatusBar.currentHeight : 20) || 24;

export const isDevEnv = () => __DEV__ === true

export const getDeviceVersion = () => Platform.Version

export const getWindowHeight = () => Dimensions.get("window").height

export const getWindowWidth = () => Dimensions.get("window").width

export const getFormattedPhoneNum = (input: string) => {
    let output = "";
    if(!input) return output;
    input.replace( /^\D*(\d{0,4})\D*(\d{0,3})\D*(\d{0,3})/, ( match, g1, g2, g3 ): any => {
          if ( g1.length ) {
            output += g1;
            if (g1.length == 4) {
              output += "";
              if (g2.length) {
                output += " " + g2; 
                if ( g2.length == 3 ) {
                  output += "";
                  if (g3.length) {
                      output += " " + g3;
                  }
                }
              }
             }
          }
        }       
    );        
    return output;
}  