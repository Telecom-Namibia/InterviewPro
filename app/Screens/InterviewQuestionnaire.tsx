
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import QuestionnaireHeader from '../components/Interview/QuestionnaireHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';


const InterviewQuestionnaire = ({ route }: { route: any }) => {
    const { interview } = route.params;

    const [questionnaire, setQuestionnaire] = useState(interview.questionnaire);

    const handleQuestionChange = (index: number, newQuestion: string) => {
        const updatedQuestionnaire = [...questionnaire];
        updatedQuestionnaire[index].question = newQuestion;
        setQuestionnaire(updatedQuestionnaire);
    };
    const addQuestion = () => {
        setQuestionnaire([...questionnaire, { id: Date.now(), question: "", answers: [] }]);
    };
    const removeQuestion = (index: number) => {
        const updatedQuestionnaire = [...questionnaire];
        updatedQuestionnaire.splice(index, 1);
        setQuestionnaire(updatedQuestionnaire);
    };
return (
    <View>
        <QuestionnaireHeader details={interview} />

        <ScrollView style={{backgroundColor: '#fff', margin:10,padding:10, borderRadius: 20}}>
            <Text style={{fontSize: 24, margin:10, fontWeight: 'bold', borderBottomColor:'gray'}}>Questions</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>

            <View style={styles.form}>
    {questionnaire.map((question, index) => (
    <View key={index} style={styles.inputContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <TextInput
                style={styles.input}
                value={question.question}
                onChangeText={(newQuestion) => handleQuestionChange(index, newQuestion)}
            />
            <TouchableOpacity style={styles.removeButton} onPress={() => removeQuestion(index)}>
                <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    </View>
))}
    <Button title="Add Question" onPress={addQuestion} />
    <Button title="Save Changes" disabled={true} onPress={handleQuestionChange} />
</View>
</KeyboardAvoidingView>
        </ScrollView>
    </View>
    
);
};

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    removeButton: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default InterviewQuestionnaire;


