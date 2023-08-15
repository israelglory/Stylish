import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import SingleIntro from '../components/singleIntro';
import { splash1, splash2,splash3 } from '../constants/images';

const IntroScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const navigateNextIntro = () => {
        if (index == 0) {
            setIndex(1);
        } else if (index == 1) {
            setIndex(2);
        } else {
            navigation.navigate('Login');
        }
    }

    const onBack = () => {
        if (index == 0) {
            //navigation.navigate('Splash');
        } else if (index == 1) {
            setIndex(0);
        } else {
            setIndex(1);
        }
    }


    return (
         <View style={styles.sectionContainer}>

            <SingleIntro 
            title={ index == 0? "Choose Products" : index == 1? "Make Payment" : "Get Your Order" }
            desc={ index == 0? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."  : index == 1? "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." }
            btntext={index == 0 ? "Next" : index == 1 ? "Next" : "Get Started" }
            onTap={() => {navigateNextIntro()}} 
            onBack={() => {onBack()}}
            onSkip={() => {navigation.navigate('Login')}}
            index={index} image={index == 0 ? splash1 : index == 1 ? splash2 : splash3} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default IntroScreen;