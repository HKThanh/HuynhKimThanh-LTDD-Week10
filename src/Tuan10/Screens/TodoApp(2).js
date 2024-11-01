import { View, Text, TextInput, Pressable, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import TodoItem from '../components/TodoItem';
import TodoItem2 from '../components/TodoItem(2)';
import { setTodos, addTodo } from '../todoSlice';
import axios from 'axios';

const TodoApp = () => {
    const API_URL = 'https://66ff3a172b9aac9c997e9862.mockapi.io/tasks';

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoToolKit);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get(API_URL);
            dispatch(setTodos(response.data));
        };
        fetchTodos();
    }, [dispatch]);

    console.log(todos);

    const handleAdd = () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now().toString(),
                createAt: new Date().toISOString(),
                title: text,
            };
            dispatch(addTodo(newTodo));
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
                renderItem={({ item }) => <TodoItem2 item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default TodoApp;