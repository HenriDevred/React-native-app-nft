import { FlatList } from 'react-native';
import Nft from './Nft';

const NftsList = ({ nft }) => {
    return (
        <FlatList
            data={nft}
            keyExtractor={(item, index) => String(index)}
            numColumns={2}
            renderItem={({ item }) => <Nft nft={item} />}
        />
    );
}

export default NftsList;