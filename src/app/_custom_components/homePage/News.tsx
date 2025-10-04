import Container from "../layout/Container";
import { H2 } from "../layout/Headings";

const News: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <H2 mb>
          Latest News
        </H2>
        <p className="text-center text-lg">
          Stay updated with our latest environmental initiatives and industry news.
        </p>
      </Container>
    </section>
  );
};

export default News;
