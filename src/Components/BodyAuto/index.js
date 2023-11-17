import { Container, ImageContainer, ContentDiv, TextConteudo, HeaderText, Explanation } from "./styles";
import ImagemAuto from "../../assets/autoScaling.png"

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
            <Explanation>
              <h4>Resposta Dinâmica a Picos de Tráfego</h4>
              <p>
                Durante eventos sazonais, promoções ou situações inesperadas,
                o sistema pode rapidamente adicionar mais recursos para 
                acomodar a demanda, garantindo uma experiência de usuário 
                suave e evitando quedas de desempenho.
              </p>
            </Explanation>
            <Explanation>
              <h4>Melhoria Contínua de Desempenho:</h4>
              <p>
              Tenha um alto nível de desempenho do sistema, mesmo em 
              circunstâncias variáveis. Ao ajustar automaticamente a 
              capacidade conforme necessário, você garante que os usuários
               tenham tempos de resposta rápidos e não enfrentem a 
               lentidão que ocorre quando os servidores estão sobrecarregados.
              </p>
            </Explanation>
          </TextConteudo>
      </ContentDiv>
    </Container>
  );
}
export default BodyAuto;
