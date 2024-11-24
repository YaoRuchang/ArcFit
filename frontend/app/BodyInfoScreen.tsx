import { ThemedText } from "@/components/ThemedText";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import motionData from "@/res/motion/json/comb.json";
import bodyData from "@/res/bodypart/json/comb.json";

import { RouteProp } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const getBodyPartID = (name) => {
  const bodyParts = {
    胸部: 1,
    前肩: 7,
    斜方肌: 2,
    肱二头肌: 8,
    前臂: 8,
    手: 8,
    腹外斜肌: 3,
    腹肌: 3,
    股四头肌: 4,
    小腿: 5,
    后肩: 7,
    肱三头肌: 8,
    背阔肌: 2,
    臀部: 6,
    斜方肌中部: 2,
    下背: 2,
    腿后肌: 4,
  };
  return bodyParts[name];
};

type RouteParams = {
  params: {
    name: string;
  };
};

export default function BodyInfoScreen() {
  const route = useRoute<RouteProp<RouteParams, "params">>();
  const { name } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={styles.container}>
        {/* 标题 */}
        <ThemedText type="title" style={{ textAlign: "center" }}>
          {name}
        </ThemedText>
        <View style={{ height: height * 0.02 }} />
        {/* 图片部分 */}
        {/* <Image source={equipment_imgs[id + 1]} style={styles.picture} /> */}

        {/* 描述方框 */}
        <View style={styles.descriptionBox}>
          <ThemedText type="defaultBold" style={styles.text}>
            {/* {cardData[id].description} */}
            {name} 的描述
          </ThemedText>
        </View>

        {/* 推荐动作方框 */}
        <View style={styles.recommendedBox}>
          <ThemedText type="subtitle" style={{ marginBottom: 15, padding: 10 }}>
            推荐动作
          </ThemedText>
          {bodyData[getBodyPartID(name) - 1].m_id.map((action, index) => {
            return (
              <View key={index} style={styles.recommendedAction}>
                <TouchableOpacity style={styles.plusButton}>
                  <FontAwesome name="plus" size={width * 0.03} color="#fff" />
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    marginRight: "8%",
                  }}
                >
                  <ThemedText
                    type="defaultBold"
                    style={{ textAlign: "center" }}
                  >
                    {motionData[action - 1].name}
                  </ThemedText>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ height: 35 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  picture: {
    width: width * 0.6,
    height: height * 0.3,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  descriptionBox: {
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    marginBottom: 20,
  },
  recommendedBox: {
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  recommendedAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 60,
  },
  text: {
    margin: 10,
    padding: 5,
  },
  plusButton: {
    backgroundColor: "#007bff",
    padding: 5,
    marginRight: "5%",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
