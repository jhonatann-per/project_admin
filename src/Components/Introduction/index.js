import { Container, HeaderText, ImageWrapper, ContentWrapper, ButtonWrapper, WhiteButton, TransparentButton  } from "./styles";
import imagemExemplo from "../../assets/notFoud.png"

const Introduction = () => {

    return(
        <Container>
            <ContentWrapper>
                <HeaderText>
                    <h1>Desbrave o Futuro:</h1>
                    <h1>Conheça Nossa Tecnologia Avançada!</h1>
                    <ButtonWrapper>
                        <WhiteButton>Botão Branco</WhiteButton>
                        <TransparentButton>Botão Transparente</TransparentButton>
                    </ButtonWrapper>
                </HeaderText>
                
                <ImageWrapper>
                    <img src={imagemExemplo} alt="Your Alt Text" />
                </ImageWrapper>
            </ContentWrapper>
        </Container>
    )
}
export default Introduction;
