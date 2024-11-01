import { View, Text, TextInput, Pressable, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import  TodoItem3  from '../components/TodoItem(3)';
import { useRecoilState } from 'recoil';
import { todoState } from '../todoAtom';
import { setTodos, addTodo } from '../todoSlice';
import axios from 'axios';

const API_URL = 'https://66ff3a172b9aac9c997e9862.mockapi.io/tasks';

const TodoApp = () => {

    const [todos, setTodos] = useRecoilState(todoState);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(API_URL);
                setTodos(response.data);
            } catch (error) {
                console.error('Failed to fetch todos: ', error);
            }
        };
        fetchTodos();
    }, [setTodos]);

    const handleAdd = async () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now().toString(),
                createdAt: new Date().toISOString(),
                title: text,
            };
            const response = await axios.post(API_URL, newTodo);
            setTodos([...todos, newTodo]);
            setText('');
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, fontWeight: '700', textAlign: 'center', marginBottom: 20}}>Todo App</Text>
                <TextInput placeholder="Add new todo"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        width: '80%',
                        padding: 10,
                        borderRadius: 10,
                    }}
                    value={text}
                    onChangeText={setText}
                />
                <Pressable 
                    style={{
                        backgroundColor: 'blue',
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                        width: '80%',
                    }}
                    onPress={handleAdd}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: '700',
                    }}>Add</Text>
                </Pressable>
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem3 item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default TodoApp;