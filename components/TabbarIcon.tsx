import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
    color: string;
    icon: string;
}

export default function TabBarIcon({color, icon} : Props) {
    if (icon == "history") {
        return (
            <MaterialIcons className="bg-amber-200" name="history" size={24} color={color} />
        )
    }
}