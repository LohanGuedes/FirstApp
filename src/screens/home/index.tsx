import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";

import { useState } from "react";
import { styles } from "./styles";


export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantName] = useState<string>("")

    var handleParticipantAdd = (name: string) => {
        if (participants.includes(name)) {
            Alert.alert("Add Participant", `Participant with name ${name} already exists`);
            return;
        }

        setParticipants(prevState => [...prevState, name])
        setParticipantName('') // Reset TextInput state
    };

    var handleParticipantRemove = (name: string) => {
        Alert.alert("Remove", `Do you really wish to remove this participant: ${name.toUpperCase()}?`,
            [
                {
                    text: "Yes",
                    onPress: () => {
                        setParticipants(prevState => prevState.filter(participant => participant != name));
                        Alert.alert("Deleted!");
                    },
                },
                {
                    text: "No",
                    style: "cancel",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Event name</Text>
            <Text style={styles.eventDate}>Seg 09, Dez 2024</Text>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Participant Name"
                    placeholderTextColor={"#2b2b2b"}
                    keyboardType="default"
                    onChangeText={setParticipantName}
                    value={participantsName}
                />
                <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(participantsName)}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Add new participants to the list using the + button</Text>
                )}
            />

        </View>
    );
}
