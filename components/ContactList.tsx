import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Yasir Alam',
            email: 'yasiralam981@gmail.com',
            phone: '+91 1234567890',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/20/08/27/rappelling-1842180_1280.jpg'

        },
        {
            uid: 2,
            name: 'huzaif Shah',
            email: 'shahhuxaif19@gmail.com',
            phone: '+91 1234567890',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/27/12/11/boy-2178303_1280.jpg'
        },
        {
            uid: 3,
            name: 'Faisal bhat',
            email: 'faisal@gmail.com',
            phone: '+91 1234567890',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/27/12/18/fields-2178329_1280.jpg'
        },
        {
            uid: 4,
            name: 'Qurat-ul-Ain',
            email: 'Quratmanzoor662@gmail.com',
            phone: '+91 1234567890',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/27/12/50/flower-2178507_1280.jpg'
        }
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, email, phone, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.userImage}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.headerText}>{name}</Text>
                            <Text style={styles.userEmail}>{email}</Text>
                            <Text style={styles.userPhone}>{phone}</Text>
                        </View>
                    </View>

                ))}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
        marginHorizontal: 16,
        color: '#333',
    },
    container: {
        paddingHorizontal: 8,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
        borderWidth: 2,
        borderColor: '#E07C24',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginBottom: 2,
    },
    userInfo: {
        flex: 1,
        flexDirection: 'column',
    },
    userEmail: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    userPhone: {
        fontSize: 14,
        color: '#888',
    },
})