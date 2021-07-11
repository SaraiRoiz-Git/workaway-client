export const validatePassword = (password, passwordConfirm, err) => {
  let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordCheck.test(password)) {
    err(
      "password must contain at least 1 number, 1 uppercase, 1 lowercase letter and at least 6 characters"
    );
    return false;
  }
  if (password !== passwordConfirm) {
    err("passwords do not match");

    return false;
  }

  return true;
};

export const validateEmail = (email, err) => {
  let emailCheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  if (!emailCheck.test(email)) {
    err("Email incorect");
    return false;
  }
  return true;
};
