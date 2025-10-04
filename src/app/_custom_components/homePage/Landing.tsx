import EcoscopeButton from "../layout/EcoscopeButton";
import Container from "../layout/Container";
import { H1 } from "../layout/Headings";

const Landing: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-end h-[calc(100vh-78.7px)] relative mb-16 md:mb-32">
        <div className="bg-curve block pt-24 md:pt-32 -mb-1 max-w-full">
          <Container className="pb-10">
            <div className="w-full md:w-fit">
              <div className="table">
                <H1 left className="m-0 mb-4">
                  Your Guide to <br />
                  Greener Productions <br />& Making a Positive Impact
                </H1>
                <h2 className="mb-6 md:table-caption md:caption-bottom">
                  Empowering the creative industries on their decarbonisation
                  journey in line with scientific guidance and recommendations.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-x-6 sm:space-y-0">
                <EcoscopeButton
                  full
                  href="/our-services"
                  className="md:max-w-full"
                >
                  Our Services
                </EcoscopeButton>
                <EcoscopeButton
                  full
                  variant="outline"
                  href="/contact-us"
                  className="md:max-w-full"
                >
                  Contact Us
                </EcoscopeButton>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landing;
