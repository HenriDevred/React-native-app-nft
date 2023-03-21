import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import NftsList from '../components/NftsList';
import  { data }  from '../data/data.js';


const Home = () => (
    <View style={styles.container}>
    <Header />
    <Text style={styles.collection}>Hot collection</Text>
    <NftsList nft={data} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    collection: {
        fontWeight: '700',
        fontSize: 30,
        marginBottom :20,
    },
});

export default Home;