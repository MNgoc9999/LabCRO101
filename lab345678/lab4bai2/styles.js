import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
        padding: 15,
        borderRadius: 10, // Bo góc cho đẹp hơn
    },
    text: {
        fontFamily: "Cochin",
        color: "white", // Sửa lỗi "whilte" -> "white"
        fontSize: 18, // Làm chữ dễ nhìn hơn
        textAlign: "center", // Căn giữa chữ
    },
});
