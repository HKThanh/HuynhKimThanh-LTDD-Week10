import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../todoAtom";

const TodoItem = ({ item }) => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(item.title);

    const handleEdit = async () => {
        if (newTitle.trim()) {
            const updateTodo = { ...item, title: newTitle };
            await axios.put(`${API_URL}/${item.id}`, updateTodo);

            const updatedTodos = todos.map(t => 
                t.id === item.id ? { ...t, title: newTitle } : t
            );
            setTodos(updatedTodos); // Update todos with edited title
            setIsEditing(false); // Close editing mode
        }
    }

    return (
        <Pressable onPress={() => setIsEditing(!isEditing)} style={styles.container}>
            <View>
                {isEditing ? (
                    <TextInput
                        value={newTitle}
                        onChangeText={setNewTitle}
                        style={{
                            width: 300,
                            backgroundColor: isEditing ? "lightgray" : "transparent",
                        }}
                    />
                ) : (
                    <Text>{item.title}</Text>
                )}
            </View>
            {isEditing && (
                <Pressable onPress={handleEdit}>
                    <Text>Save</Text>
                </Pressable>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10
    }
});

export default TodoItem;