import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Search = ({}) =>{

    const navigation = useNavigation();
    const [results, setResults] = useState([]);
    const handleSearch = (value) => {
        console.log('vaule: ', value)
    }

    return (
    <TouchableOpacity >
        
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#057DFE",
        height: 500,
        width: 330,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
})

export default Search