import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
    return (
        
            <View style={styles.titles}>
                <Text style={styles.title}>Model X</Text>
                <Text style={styles.subtitle}>Starting at $67,670</Text>

            </View>
            <StyledButton/>
          
        </View>
    )
}

export default CarItem;
