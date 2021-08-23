import { Container } from "react-bootstrap";

export default function SpinnerTemplate() {
  return (
    <>
      <Container className="wrapper text-center mt-5 pt-5">
        <div className="spinner-grow mt-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Container>
    </>
  );
};
