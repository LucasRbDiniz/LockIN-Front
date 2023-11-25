import './PasswordInput.css'

interface PasswordInputProps {
    password: string,
    setPassword: (value: string) => void
}

const PasswordInput = ({password, setPassword}: PasswordInputProps) => {
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='Password-Box'>
      <label htmlFor="password">Senha: </label>

      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default PasswordInput;
