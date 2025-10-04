import Container from "../layout/Container";
import { H2 } from "../layout/Headings";

const OurServiceCards: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <H2 mb>
          Our Services
        </H2>
        <p className="text-center text-lg">
          Discover our comprehensive range of environmental consulting services.
        </p>
      </Container>
    </section>
  );
};

export default OurServiceCards;
