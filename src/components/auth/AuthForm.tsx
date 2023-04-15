import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

const Form = styled("form")({
  padding: "4rem",
  width: "30rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.5rem",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
});

const AuthForm = () => {
  const navigate = useNavigate();
  const authSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailInput = formData.get("email") as string;
    const passwordInput = formData.get("password") as string;
    console.log(emailInput);

    if (
      !emailInput ||
      emailInput.trim().length < 6 ||
      !passwordInput ||
      passwordInput.trim().length < 6
    ) {
      return;
    }

    localStorage.setItem("auth", emailInput);

    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={authSubmitHandler}>
      <FormLabel sx={{ fontWeight: "bold", color: "primary.dark" }}>
        로그인
      </FormLabel>
      <Input
        id={"email"}
        label={"Email"}
        name={"email"}
        variant={"outlined"}
        type={"text"}
        sx={{ margin: "0.7rem 0" }}
      />
      <Input
        id={"password"}
        label={"Password"}
        name={"password"}
        variant={"outlined"}
        type={"password"}
        sx={{ margin: "0.7rem 0" }}
      />
      <Button
        id={"submit"}
        name={"submit"}
        variant={"contained"}
        type={"submit"}
        fullWidth={true}
        sx={{ padding: "1rem 0" }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default AuthForm;
