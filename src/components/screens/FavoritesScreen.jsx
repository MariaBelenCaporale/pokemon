import {Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FavotiresScreen () {
    const { top} = useSafeAreaInsets()
    return (
        <View style={{top: top}}>
            <Text>
                Mis palabras
            </Text>
        </View>
    )
}