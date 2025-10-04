import Container from "../layout/Container";
import { H2 } from "../layout/Headings";

const HowWeWork: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <H2 mb>
          How We Work
        </H2>
        <p className="text-center text-lg">
          We provide comprehensive environmental solutions for the creative industries.
        </p>
      </Container>
    </section>
  );
};

export default HowWeWork;
