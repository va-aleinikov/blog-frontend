import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Checkbox } from "../atoms/Checkbox/Checkbox";
import { RadioGroup } from "../molecules/RadioGroup";
import { Button } from "../atoms/Button/Button";
import { ErrorText, Heading } from "../atoms/Typography";
import { login } from "../../services/api";
import { setToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState(false);
  const [radio, setRadio] = useState("да");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setToken(data.token);
      navigate("/posts");
    } catch {
      setError(true);
    }
  };

  return (
    <main style={{ maxWidth: "320px", margin: "0 auto", padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Heading>Login</Heading>
        <FormField
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox
          checked={policy}
          onChange={(e) => setPolicy(e.target.checked)}
        />
        {/* <RadioGroup
          name="radio"
          options={[
            { label: "да", value: "да" },
            { label: "нет", value: "нет" },
            { label: "возможно", value: "возможно" },
          ]}
          selected={radio}
          onChange={(e) => setRadio(e.target.value)}
        /> */}
        <Button type="submit" disabled={!policy}>
          Log In
        </Button>
        {error && <ErrorText>Invalid credentials</ErrorText>}
      </form>
    </main>
  );
};
