import { ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  const video = useRef(null);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://cdn.pixabay.com/video/2021/01/11/61706-500316063_large.mp4",
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />

      <View style={styles.overlay}>
        <View style={styles.contentMainText}>
          <Text style={styles.mainText}>Assina </Text>
          <Text style={styles.mainText}>Fácil</Text>
        </View>

        <Text style={styles.subText}>Gerencie suas assinaturas</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/auth/register")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainText: {
    color: "white",
    fontSize: 68,
    fontWeight: "bold",
    textAlign: "center",
  },
  contentMainText: {
    display: "flex",
    flexDirection: "row",
  },
  subText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3, // Adds a shadow effect on Android
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
