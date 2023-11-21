import { Container, ImageContainer, ContentDiv, TextConteudo, 
HeaderText, TestDiv, IconTest, TextTest, IconTesTwo, PText, 
H4Text } from "./styles";
import ImagemAuto from "../../assets/autoScaling.png"
import { SiDatabricks } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";

const BodyAuto = () => {

  return (
    <Container>
          <HeaderText>
            <h1>Auto scaling</h1>
            <p>Garanta o desempenho da opeação em todos os momentos. Nossa poderosa estrutura utiliza serviços</p>
            <p>como Computer Engine, Load Balancing, Cloud Functions e Cloud Pub/Sub.</p>
          </HeaderText>
      <ContentDiv>
          <ImageContainer>
            <img src={ImagemAuto} alt="Your Alt Text" />
          </ImageContainer>
          <TextConteudo>

          <TestDiv>
            <IconTest>
              <SiDatabricks style={{ color: 'white', fontSize: '50px', height: '50px',  }} />
            </IconTest>
            <TextTest>
              <H4Text>Resposta Dinâmica a Picos de Tráfego</H4Text>
              <PText>
                Durante eventos sazonais, promoções ou situações inesperadas,
                o sistema pode rapidamente adicionar mais recursos para 
                acomodar a demanda, garantindo uma experiência de usuário 
                suave e evitando quedas de desempenho.
              </PText>
            </TextTest>
          </TestDiv>
          <TestDiv>
            <IconTesTwo>
              <FaArrowTrendUp style={{ color: 'white', fontSize: '40px', height: '50px'}} />
            </IconTesTwo>
            <TextTest>
              <H4Text>Melhoria Contínua de Desempenho:</H4Text>
              <PText>
                Tenha um alto nível de desempenho do sistema, mesmo em 
                circunstâncias variáveis. Ao ajustar automaticamente a 
                capacidade conforme necessário, você garante que os usuários
                tenham tempos de resposta rápidos e não enfrentem a 
                lentidão que ocorre quando os servidores estão sobrecarregados.
              </PText>
            </TextTest>
          </TestDiv>
          </TextConteudo>
      </ContentDiv>
    </Container>
  );
}
export default BodyAuto;
