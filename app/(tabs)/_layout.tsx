import { Tabs } from "expo-router";
import tailwindConfig from "../../tailwind.config";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, View } from "react-native";

export default function TabsLayout() {
  const colors = tailwindConfig.theme?.extend?.colors as Record<string, any>;
  const profileimg = require("./../../assets/images/icons8-user-64.png");
  const startimg = require("./../../assets/images/icons8-barbell-64.png");
  const historyimg = require("./../../assets/images/icons8-time-machine-64.png");
  const exercisesimg = require("./../../assets/images/icons8-book-64.png");
  const workoutsimg = require("./../../assets/images/icons8-clipboard-64.png");

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors?.bg?.secondary,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 60,
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center mt-4 rounded-full ">
              <Image
                tintColor={
                  focused ? colors?.secondary.DEFAULT : colors?.primary.DEFAULT
                }
                source={historyimg}
                className="size-14"
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center mt-4 rounded-full ">
              <Image
                tintColor={
                  focused ? colors?.secondary.DEFAULT : colors?.primary.DEFAULT
                }
                source={workoutsimg}
                className="size-12"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Start workout",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`absolute -bottom-5 h-full w-full p-12 justify-center items-center rounded-full bg-bg-card border border-border-muted shadow-lg 
    ${focused ? "shadow-secondary" : "shadow-icon-muted"}`}
            >
              <Image
                tintColor={
                  focused ? colors?.secondary.DEFAULT : colors?.primary.DEFAULT
                }
                source={startimg}
                className="size-12 rotate-45"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center mt-4 rounded-full ">
              <Image
                tintColor={
                  focused ? colors?.secondary.DEFAULT : colors?.primary.DEFAULT
                }
                source={exercisesimg}
                className="size-11"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="justify-center items-center mt-4 rounded-full ">
              <Image
                tintColor={
                  focused ? colors?.secondary.DEFAULT : colors?.primary.DEFAULT
                }
                source={profileimg}
                className="size-14"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
