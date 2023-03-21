import { StyleSheet, View, Text } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Explore NFTs</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        paddingVertical: 40,
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        paddingTop:20,
        color: 'white'
    }
});

export default Header;