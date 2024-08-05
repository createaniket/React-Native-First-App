import React from "react"

import { Text, View, StyleSheet, useColorScheme} from 'react-native'


function AppPro () : JSX.Element{

    const darkMode = useColorScheme() === 'dark'
    console.log("cbevbev", darkMode)
    return( <View style={styles.container}>
        <Text style={darkMode ? styles.whiteText : styles.darkText}> 
            Hello Interns !!!
            Hello Interns !!!

        </Text>
    </View>)
}

const styles = StyleSheet.create( {

    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})


export default AppPro;