import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Card ({onPress, isTurnedOver, children}) {
    return (
        <Pressable 
        onPress={onPress} 
        style={isTurnedOver ? styles.cardUp : styles.cardDown}>
            {isTurnedOver ? (
                <Text style={styles.text}>{children}</Text>
            ):(
                <Text style={styles.text}>?</Text>
            )}
            
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    cardUp: {
        width: 100,
        height: 100,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EED3D9",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#B4B4B8",
    },
    cardDown: {
        width: 100,
        height: 100,
        margin: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#B4B4B8",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CCD3CA",
    },
    text: {
        fontSize: 46,
        color: "#9CAFAA",
    }
})
