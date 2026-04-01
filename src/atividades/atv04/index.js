import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atv4() {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState(''); 
    const [mensagem, setMensagem] = useState('Insira seu nome e sobrenome'); 

    function handleExibeMensagem() {
        setMensagem(texto + ' ' + txt2);
        setTexto('');
        setTxt2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.txt}>{mensagem}</Text>
            <Text style={styles.txt}>Nome</Text>

            <TextInput
                value={texto} 
                onChangeText={setTexto}
                placeholder='Digite seu nome'
                keyboardType='ascii-capable'
                // editable={false}
                // multiline
                // numberOfLines={4}
                maxLength={7}
                // secureTextEntry 
                style={styles.input}
            />
             <Text style={styles.txt}>Sobrenome</Text>
            <TextInput
                value={txt2} 
                onChangeText={setTxt2}
                placeholder='Digite seu sobrenome'
                keyboardType='ascii-capable'                
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity> 

        </View>
    );
}


