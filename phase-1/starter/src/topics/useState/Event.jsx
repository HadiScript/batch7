const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const valuehandle = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input value={password} name="password" onChange={valuehandle} placeholder="Enter you password" type={showPassword ? "text" : "password"} />

      <button onClick={() => setShowPassword(!showPassword)}> {showPassword ? "hide" : "Show Password"} </button>

      {password}
    </div>
  );
};

export default App;
