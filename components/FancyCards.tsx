import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style ={[styles.card , styles.cardElevated]}>
        <Image 
            source={{ 
                uri: 'https://as1.ftcdn.net/jpg/12/17/90/16/1000_F_1217901648_ZWjlg9YVqUepamLBX9a4nUtgfJoUzrPj.jpg'
            }}
            style={styles.cardImage}
        />
        <View style ={styles.cardBody}>
            <Text style ={styles.cardTitle}>Cute Cat</Text>
            <Text style ={styles.cardLabel}>Persian cat</Text>
            <Text style={styles.cardDescription}>A charming Persian cat basking in the sunlight, showcasing its fluffy fur and captivating eyes. Perfect for cat lovers seeking a dose of cuteness!</Text>
            <Text style ={styles.cardFooter}>12 km away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
      width:370,
      height:360,
      borderRadius:6,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated: {
      backgroundColor : '#FFFFFF',
      elevation: 3,
      shadowOffset:{ width: 1, height: 1},
    },
    cardImage:{
        height: 180,
        borderRadius:6,
        marginBottom: 8
    },
    cardBody:{
      flex: 1,
      flexGrow:1,
      paddingHorizontal:12,
    },
    cardTitle:{
      color: '#000000',
      fontSize:22,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    cardLabel:{
      color: '#000000',
      fontSize: 14,
      marginBottom: 6,
    },
    cardDescription:{
      color: '#242B2E', 
      fontSize: 12,
      marginTop:6,
      marginBottom: 12,
    },
    cardFooter:{},

})