import FeedbackForm from "components/FeedbackForm/FeedbackForm";
import Footer from "components/Footer/Footer";
import ImageContainer from "components/ImageContainer/ImageContainer";
import { Title, Container } from "./FeedbackPage.styled";

const FeedbackPage = () => {
  return (
    <>
      <Container>
        <Title>Reach out to us!</Title>
        <FeedbackForm />
        <ImageContainer />
        {/* <YellowSmile />
        <PinkSmile />
        <BigYellowSmile />
        <Clouds /> */}
      </Container>
      <Footer />
    </>
  );
};

export default FeedbackPage;
