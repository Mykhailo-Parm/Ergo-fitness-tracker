import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tailwindConfig from "@/tailwind.config";
import { CalendarDays, Weight, Shuffle, Hourglass, Clock } from "lucide-react-native";

export default function Index() {
  const colors = tailwindConfig.theme?.extend?.colors as Record<string, any>;

  return (
    <ScrollView className="h-full bg-background p-2 pb-96">
      <View className="flex flex-row mb-10">
        <Text className="text-2xl font-montserrat-700 text-muted">
          Welcome back,{" "}
        </Text>
        <Text className="text-2xl font-montserrat-700 text-text">Mykhailo</Text>
      </View>

      <View className="flex flex-col mb-10">
        <Text className="text-text text-xl font-montserrat-600 mb-5">
          Your Activity This Week
        </Text>
        <View className="flex flex-row bg-card justify-between rounded-2xl border-[3px] border-border">
          <View className="flex flex-col gap-3 items-center basis-1/3 p-3">
            <Text className="font-inter-400 text-text text-md text-center">
              Workouts this week
            </Text>
            <View className="flex flex-col items-center justify-center rounded-full overflow-hidden w-24 h-24 border border-[3px] border-lightBlue">
              <Text className="font-montserrat-500 text-text text-xl">3</Text>
              <CalendarDays color="white" size="24" />
            </View>
            <Text className="text-muted font-inter-400 text-md">sessions</Text>
          </View>
          <View className="flex flex-col gap-3 items-center basis-1/3 p-3">
            <Text className="font-inter-400 text-text text-md text-center">
              Total volume lifted
            </Text>
            <View className="flex flex-col items-center justify-center rounded-full overflow-hidden w-24 h-24 border border-[3px] border-accent">
              <Text className="font-montserrat-500 text-text text-xl">10.234</Text>
              <Weight color="white" size="24" />
            </View>
            <Text className="text-muted font-inter-400 text-md">kg</Text>
          </View>
          <View className="flex flex-col gap-3 items-center basis-1/3 p-3">
            <Text className="font-inter-400 text-text text-md text-center">
              Workout variety
            </Text>
            <View className="flex flex-col items-center justify-center rounded-full overflow-hidden w-24 h-24 border border-[3px] border-secondary">
              <Text className="font-montserrat-500 text-text text-xl">3</Text>
              <Shuffle color="white" size="24" />
            </View>
            <Text className="text-muted font-inter-400 text-md">muscle groups</Text>
          </View>
        </View>
      </View>

      <View className="flex flex-col mb-10">
        <View className="flex flex-row justify-between">
          <Text className="text-text text-xl font-montserrat-600 mb-5">
            Last Session
          </Text>
          <TouchableOpacity><Text className="text-primary text-lg underline pr-2">View Details</Text></TouchableOpacity>
        </View>
        <View className="flex flex-row bg-card rounded-2xl p-2 justify-between border-[3px] border-border">
          <View className="flex flex-col gap-2 basis-2/5">
            <View className="flex flex-row">
              <CalendarDays color="white" size="20" />
              <Text className="text-muted text-lg font-montserrat-500 ml-2">21.03.2025</Text>
            </View>
            <View className="flex flex-row">
              <Clock color="white" size="20" />
              <Text className="text-muted text-lg font-montserrat-500 ml-2">10:14</Text>
            </View>
            <View className="flex flex-row">
              <Hourglass color="white" size="20" />
              <Text className="text-muted text-lg font-montserrat-500 ml-2">1:15</Text>
            </View>
          </View>
          <View className="flex flex-col basis-3/5 gap-2">
            <View className="flex flex-row justify-evenly">
              <Text className="text-text text-xl font-montserrat-500 text-center basis-1/2">Exercise</Text>
              <Text className="text-text text-xl font-montserrat-500 text-center basis-1/2">Best Set</Text>
            </View>
            <View className="flex flex-row justify-evenly">
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">Bench Press</Text>
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">40x10</Text>
            </View>
            <View className="flex flex-row justify-evenly">
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">Bench Press</Text>
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">40x10</Text>
            </View>
            <View className="flex flex-row justify-evenly">
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">Bench Press</Text>
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">40x10</Text>
            </View>
            <View className="flex flex-row justify-evenly">
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">Bench Press</Text>
              <Text className="text-muted text-md font-inter-400 text-center basis-1/2">40x10</Text>
            </View>
          </View>
        </View>
      </View>


      {/*<View className="flex flex-col mb-10">*/}
      {/*  <View className="flex flex-row justify-between">*/}
      {/*    <Text className="text-text text-xl font-montserrat-600">*/}
      {/*      My workouts*/}
      {/*    </Text>*/}
      {/*    <TouchableOpacity className="pr-2">*/}
      {/*      <Text className="text-primary text-lg font-inter-400 underline">*/}
      {/*        Show All*/}
      {/*      </Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*  <View className="bg-card ">*/}
      {/*    <View className="flex flex-row justify-between">*/}
      {/*      <View className="flex flex-col">*/}
      {/*        <Text className="text-text text-xl font-montserrat-600">25</Text>*/}
      {/*        <Text className="text-muted text-md font-inter-400">*/}
      {/*          Total workouts*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*      <View>*/}
      {/*        <TouchableOpacity className="bg-primary px-5 py-2 rounded-3xl ">*/}
      {/*          <Text className="text-text text-lg font-inter-400">*/}
      {/*            Start workout*/}
      {/*          </Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</View>*/}

      {/*<View>
        <Text className="text-text text-xl font-montserrat-500 mb-5">
          Quickstart
        </Text>
        <View className="flex flex-row space-evenly">
          <View className=" flex justify-center items-center h-32">
            <TouchableOpacity className="h-full flex flex-col justify-evenly items-center bg-card p-3 rounded-3xl border border-[3px] border-border">
              <Text className="text-text text-md text-center mr-2 font-inter-400">
                Start empty workout
              </Text>
              <Play color={colors.neon} size={32} />
            </TouchableOpacity>
          </View>
          <View className=" flex justify-center items-center h-32">
            <TouchableOpacity className="h-full flex flex-col justify-evenly items-center bg-card p-3 rounded-3xl border border-[3px] border-border">
              <View>
                <Text className="text-text font-inter-400 text-md">
                  Start scheduled workout:
                </Text>
                <Text className="text-muted font-inter-400 text-md">
                  wednesday #3 arms
                </Text>
              </View>
              <Calendar color={colors.neon} size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>*/}
    </ScrollView>
  );
}
