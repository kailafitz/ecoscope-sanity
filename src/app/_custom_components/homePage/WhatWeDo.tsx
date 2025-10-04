import Container from "../layout/Container";
import { H2 } from "../layout/Headings";

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <H2 mb>
          What We Do
        </H2>
        <p className="text-center text-lg">
          We help creative industries reduce their environmental impact through sustainable practices.
        </p>
      </Container>
    </section>
  );
};

export default WhatWeDo;
