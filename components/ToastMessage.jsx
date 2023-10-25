import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import Animated, { FadeInUp, FadeOutUp, Easing } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

const ToastMessage = forwardRef(({ type, text, description, timeout = 1800 }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const TOAST_TYPE = {
        success: {
            backgroundColor: "#2ecc71",
            icon: "check-circle",
        },
        danger: {
            backgroundColor: "#e74c3c",
            icon: "exclamation-circle",
        },
        info: {
            backgroundColor: "#3498db",
            icon: "info-circle",
        },
        warning: {
            backgroundColor: "#f39c12",
            icon: "exclamation-triangle",
        },
    };

    const showToast = () => {
        setIsVisible(true);
    };

    useImperativeHandle(ref, () => ({
        show: showToast,
    }));

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                clearTimeout(timer);
            }, timeout);
        }
    }, [isVisible, timeout]);

    const backgroundColor = TOAST_TYPE[type].backgroundColor;
    const icon = TOAST_TYPE[type].icon;
    const { width } = Dimensions.get("window");
    return (
        <>
            {isVisible && (
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 50,
                        width: "90%",
                        left: (width - width * 0.9) / 2,
                        height: 80,
                        backgroundColor: backgroundColor,
                        borderRadius: 10,
                        padding: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        zIndex: 99999999999,
                    }}
                    entering={FadeInUp.delay(200, Easing.bezier(0.25, 0.1, 0.25, 1))}
                    exiting={FadeOutUp}
                >
                    <FontAwesome5 name={icon} size={40} color="#FFF" />

                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "#FFF" }}>{text}</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFF" }}>{description}</Text>
                    </View>
                </Animated.View>
            )}
        </>
    );
});

export default ToastMessage;
