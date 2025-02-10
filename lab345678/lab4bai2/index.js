import React, { useState, useCallback } from "react";
import { Text, ScrollView, StatusBar, RefreshControl } from "react-native";
import { styles } from "./styles";

const Lab42 = () => {
    const STYLES = ["default", "dark-content", "light-content"];
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [refreshing, setRefreshing] = useState(false);

    const changeStatusBarStyle = () => {
        const nextStyle = (STYLES.indexOf(statusBarStyle) + 1) % STYLES.length;
        setStatusBarStyle(STYLES[nextStyle]);
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            changeStatusBarStyle();
            setRefreshing(false);
        }, 1000);
    }, [statusBarStyle]);

    return (
        <>
            {/* Đưa StatusBar ra ngoài để đảm bảo cập nhật */}
            <StatusBar barStyle={statusBarStyle} backgroundColor="transparent" />

            <ScrollView
                style={styles.container}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <Text style={styles.text}>Kéo xuống để đổi màu Status Bar</Text>
            </ScrollView>
        </>
    );
};

export default Lab42;
