import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const Nft = ({ nft }) => {
    const navigation = useNavigation()
    return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Pressable onPress={() => navigation.navigate('Detail', {nft})}>
                    <Image
                        style={styles.img}
                        source={nft.image}
                    />
                    </Pressable>
                </View>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {nft.name}
                </Text>
                <Text style={styles.price}>
                    {nft.price}
                </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    img: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        marginTop:10
    },
    imgContainer: {
        flex: 1,
        margin : 5,
    },
    title :{
        fontSize : 20,
    },
    price :{
        marginTop : 5
    }
});

export default Nft;