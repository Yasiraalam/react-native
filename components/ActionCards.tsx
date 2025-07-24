import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

export default function ActionCards() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card </Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's New in JavaScript 2021 (ES12)
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.prismic.io/openjsf/16ec780b-0e2f-47e2-a227-8719fbdb6c3a_NodeJS21_announcement_Oct2023_social1-1.png?auto=compress,format'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        Explore the latest features introduced in JavaScript ES12,
                        including logical assignment operators, numeric separators,
                        and more. Stay updated to write cleaner and more efficient code!
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={()=> openWebsite('https://nodejs.org/en/blog/release/v21.0/')}>
                        <Text style={styles.socialLink}> Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=> openWebsite('https://github.com/Yasiraalam')}>
                        <Text style={styles.socialLink}>GitHub</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    headerText:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    card: {
        width:372,
        height: 360,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 14,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        height: 180,
    },
    bodyContainer: {
        padding: 12,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLink:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    }
})