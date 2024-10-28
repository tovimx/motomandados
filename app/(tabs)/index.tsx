import { Image, StyleSheet, Platform, View } from "react-native";

import { MotoIcon } from "@/components/MotoIcon";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <ParallaxScrollView>
            <SafeAreaView>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">MotoMandados!</ThemedText>
                    <MotoIcon />
                </ThemedView>
                <ThemedView style={styles.stepContainer}></ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">TODO 1:</ThemedText>
                    <ThemedText>Add search field here</ThemedText>
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="subtitle">TODO 2:</ThemedText>
                    <ThemedText>
                        Add Flash List with a mocked data of restaurants
                    </ThemedText>
                </ThemedView>
            </SafeAreaView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
});
