import imagem from "./erro.png"

import styled from "styled-components"

const Container = styled.div`display: flex;
 flex-direction:column;
 width:100%;
 height:100%;
 align-items:center;
 justify-content:center;
`

function NaoEncontrado(){
    return(
        <Container>
        <h1>Não Encontrada</h1>
        <img src={imagem} alt="imagem"/>
        </Container>
    )
}

export default NaoEncontrado