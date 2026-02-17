import { Appear, Button, Paragraph } from "arwes";

const Login = (props) => {
  return (
    <Appear id="login" animate show={props.entered}>
      <Paragraph>
        Please log in to schedule a mission launch for interstellar travel to
        one of the Kepler Exoplanets.
      </Paragraph>
      <Button animate layer="primary" /* onClick={props.login} */>
        <a href="auth/google">Log in with Google</a>
      </Button>
    </Appear>
  );
};

export default Login;
