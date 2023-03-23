import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';

function Card(props) {
    return (
        <View style={styles.card}>
            <Image style={styles.capa} source={{ uri: props.livro.capa }} />
            <Text style={styles.texto}> {props.livro.titulo} </Text>
            <Text style={styles.texto}> {props.livro.preco} </Text>
        </View>
    );
}

export default function Biblioteca() {
    const bibliotecas = [
        {
            capa: 'https://m.media-amazon.com/images/I/71+ldJlrc8S.jpg',
            titulo: 'O lar da SRTA Peregrine para Crianças Peculiares',
            preco: 'R$ 50,00',
        },
        {
            capa: 'https://m.media-amazon.com/images/I/616V5SRtbgL.jpg',
            titulo: 'Cidade dos Etéreos, Vol II',
            preco: 'R$ 77,99',
        },
        {
            capa: 'https://m.media-amazon.com/images/I/71PE8H-b3JL.jpg',
            titulo: 'Biblioteca de Almas',
            preco: 'R$ 69,99',
        },
        {
            capa: 'https://images-americanas.b2w.io/produtos/133847969/imagens/livro-mapa-dos-dias-serie-o-lar-da-srta-peregrine-para-criancas-peculiares-vol-4/133847969_1_xlarge.jpg',
            titulo: 'Mapa dos Dias',
            preco: 'R$ 44,90',
        },
        {
            capa: 'https://www.intrinseca.com.br/blog/wp-content/uploads/2019/05/capa-br-703x1024.jpg',
            titulo: 'A Convenção das Aves',
            preco: 'R$ 32,50',
        },
        {
            capa: 'https://m.media-amazon.com/images/I/51sYlC41fmL.jpg',
            titulo: 'As Desolações do Recanto do Demônio',
            preco: 'R$ 17,87',
        },
    ]

    return (
        <View>
            <Text style={styles.titulo}>Biblioteca</Text>
            <ScrollView>
                <View style={styles.content}>
                    {bibliotecas.map((livro) => (<Card livro={livro} />))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    card: {
        backgroundColor: '#080',
        width: '40%',
        height: 270,
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },

    texto: {
        fontSize: 20,
        color: '#fff',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
