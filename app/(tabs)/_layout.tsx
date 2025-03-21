import { Tabs } from "expo-router";
import tailwindConfig from "../../tailwind.config";
import {
  User,
  ChartArea,
  NotebookTabs,
  Dumbbell,
  House,
} from "lucide-react-native";

export default function TabsLayout() {
  const colors = tailwindConfig.theme?.extend?.colors as Record<string, any>;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
          backgroundColor: colors?.card,
          height: 64,
          borderRadius: 24,
          marginHorizontal: 40,
          marginBottom: 30,
          justifyContent: "space-around",
          alignItems: "center",
          borderTopWidth: 3,
          borderBottomWidth: 3,
          borderWidth: 3,
          borderColor: colors?.border,
          boxShadow: "0 10 18 0 #1A1A1A",
        },
        tabBarItemStyle: {
          flexDirection: "row",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NotebookTabs
              color={focused ? colors.neon : colors.primary}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Dumbbell
              color={focused ? colors.neon : colors.primary}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <House color={focused ? colors.neon : colors.primary} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ChartArea
              color={focused ? colors.neon : colors.primary}
              size={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <User color={focused ? colors.neon : colors.primary} size={32} />
          ),
        }}
      />
    </Tabs>
  );
}
