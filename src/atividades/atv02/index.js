import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';

import amarela from '../../../assets/brasilAmarela.png'
import azul from '../../../assets/brasilAzul.jpg'
import preta from '../../../assets/brasilPreta.jpg'
import listra from '../../../assets/camisaListrada.png'

import Atividade02 from './Card';

function Atv () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Atividade02
            titulo={'Camiseta Amarela Seleção'}
            descricao={'Camiseta oficial amarela do Brasil'}
            preco={'R$ 499,00'}
            imagem={amarela}
            />
            <Atividade02 titulo={'Camiseta Azul Seleção'}
            descricao={'Camiseta oficial azul do Brasil'}
            preco={'R$ 599,00'}
            imagem={azul}
            />
            <Atividade02 titulo={'Camiseta Preta Seleção'}
            descricao={'Camiseta oficial preta da seleção do Brasil'}
            preco={'R$ 699,00'}
            imagem={preta}
            />
            <Atividade02 titulo={'Camiseta Listrada Seleção'}
            descricao={'Camiseta oficial listrada do Corinthians'}
            preco={'R$ 799,00'}
            imagem={listra}
            />

            
        </View>
    );
}

export default Atv;