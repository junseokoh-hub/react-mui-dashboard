import AuthForm from "../components/auth/AuthForm";
import Container from "@mui/material/Container";

const AuthPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthForm />
    </Container>
  );
};

export default AuthPage;
