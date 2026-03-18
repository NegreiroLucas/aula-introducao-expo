import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Atividade02({titulo, descricao, preco,imagem }) {
    return(

        
        <View style={styles.container}>
            <Image source={imagem} style={styles.imagem} /> 
            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.preco}>{preco}</Text>
            </View>
        </View>
    );
}

export default Atividade02;