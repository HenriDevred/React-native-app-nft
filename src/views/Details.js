import { useRoute } from "@react-navigation/native";
import { Text, Image, StyleSheet } from "react-native";


const Details = () => {
    const route = useRoute()
    const {nft} = route.params;
    return (
        <>
        <Image style={styles.img} source={nft.image} />
        <Text style={styles.coll}>{nft.collection}</Text>
        <Text style={styles.title} numberOfLines={1}>{nft.name}</Text>
        <Text style={styles.descr} >{nft?.description}</Text>
        
    </>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    img: {
        width : '100%',
        height: '40%'
    },
    title : {
        fontSize : 25,
        marginTop : 5,
        marginLeft : 5,
    },
    coll : {
        fontSize : 20,
        marginTop : 5,
        marginLeft: 5,
    },
    descr:{
        marginTop : 5,
        marginLeft: 5,
        fontSize : 15,
    }

});