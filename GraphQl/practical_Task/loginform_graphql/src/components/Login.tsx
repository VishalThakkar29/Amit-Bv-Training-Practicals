import { useMutation } from "@apollo/client";
import { SyntheticEvent, useState } from "react";
import { ADD_USER } from "../framework/graphql/createTodo";
// import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { loading, data }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  console.log(data);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (name.length <= 5) {
      toast.error("Email should be 5 characters atleast ");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be 6 characters atleast ");
      return;
    }
    try {
      const result = await addUser({
        variables: { email: name, password: password },
      });

      console.log(result.data.adminLogin.data.user.first_name);
      localStorage.setItem(
        "token",
        result?.data?.adminLogin?.data?.access_token
      );
      localStorage.setItem(
        "firstName",
        result.data?.adminLogin?.data?.user?.first_name
      );
      localStorage.setItem(
        "lastName",
        result.data.adminLogin.data.user.last_name
      );

      navigate("/UserDashBord");
      toast.success("User logged in successfully!");
    } catch (error) {
      navigate("/");
      toast.error("Invalid Email or Password.");
      console.log(error);
    }
    setName("");
    setPassword("");
  };

  if (loading) return <p>"Submitting..."</p>;

  return (
    <form className="sign-up" onSubmit={handleSubmit}>
      <h1 className="sign-up-title">Sign In</h1>
      <input
        className="sign-up-input"
        type="email"
        placeholder="Enter Email"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="sign-up-input"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="sign-up-button">
        Add User
      </button>
      <h3>Email Id -- admin@brainvire.com ,Password-- Admin@123</h3>
    </form>
  );
}
