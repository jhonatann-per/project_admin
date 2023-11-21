import { Container, ImageContainer, ContentDiv, TextConteudo, 
HeaderText, TextTest, PText, StyledList,
H4Text } from "./styles";
import FeatImage from "../../assets/featImage.png"

const FeetPage = () => {

  return (
    <Container>
          <HeaderText>
            <h1>Abra as portas para a inovação</h1>
          </HeaderText>
      <ContentDiv>
          <TextConteudo>
              <TextTest>
                <H4Text>API Aberta</H4Text>
                <PText>
                Nossa API aberta está pronta para dar asas à sua 
                imaginação. Construa apps únicos, conecte serviços
                e transforme suas ideias em realidade. Vamos criar
                algo incrível juntos!
                </PText>
                <PText>Inovação Colaborativa:</PText>
                <StyledList>
                  <li>Ecossistema de Desenvolvedores</li>
                  <li>Integração Flexível</li>
                  <li>Ampliação de Alcance</li>
                  <li>Rapidez e Eficiência</li>
                </StyledList>
              </TextTest>
          </TextConteudo>
          <ImageContainer>
            <img src={FeatImage} alt="Your Alt Text" />
          </ImageContainer>
      </ContentDiv>
    </Container>
  );
}
export default FeetPage;
