import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atv3() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }
    function handleDecrementa() {
        setNumero(numero - 1);
    }
    function Zerar(){
        setNumero(0);
    }

 

   

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 03</Text>
            <Text style={styles.texto}>Diga "Olá, Mundo!"</Text>

            <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.botao} onPress={handleDecrementa}>
                <Text style={styles.txtBotao}>-1</Text>
            </TouchableOpacity> 
            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
            </View>

                <TouchableOpacity style={styles.botaoZerar} onPress={Zerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>
        </View>
    );
}

export default Atv3;