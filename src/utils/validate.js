export const validateData = (email, password) => {
  if (!email) return "Please provide email.";
  if (!password) return "Please provide password.";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return { email: "Email is not valid." };
  if (!isPasswordValid) return { password: "Password is not valid." };
  return false;
};
