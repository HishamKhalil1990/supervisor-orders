import { Text, View, StyleSheet } from "react-native"

export default CardLayout = ({ record }) => {
    
    return (
        <View
            style={{
                width:'95%',
                paddingTop:15,
                paddingBottom:15,
                backgroundColor: '#790252',
                marginBottom:25,
                borderRadius:25,
                flex:1,
                justifyContent:'center'
            }}
        >
            <Text style={styles.text}>
                No.: {record.APPNO}
            </Text>
            <Text style={styles.text}>
                Card Name: {record.CardName}
            </Text>
            <Text style={styles.text}>
                City: {record.City}
            </Text>
            <Text style={styles.text}>
                Phone: {record.Phone}
            </Text>
            <Text style={styles.text}>
                Name: {record.Name}
            </Text>
            <Text style={styles.text}>
                Amount: {record.DocTotal}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        paddingLeft:20,
        marginTop:5,
        marginBottom:5,
        color:'#fff'
    }
})