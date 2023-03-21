import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import NftsList from '../components/NftsList';
import  { data }  from '../data/data.js';


const Home = () => (
    <View style={styles.container}>
    <Text style={styles.collection}>Hot collection</Text>
    <NftsList nft={data} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop:20
    },
    collection: {
        marginLeft:10,
        fontWeight: '500',
        fontSize: 30,
        marginBottom :20,
    },
});

export default Home;