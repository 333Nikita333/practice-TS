const formEl = document.querySelector<HTMLFormElement>('.login-form')!;
type UserInfo = {
  email: string;
  password: string;
};
function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const email = form.elements.namedItem('email') as HTMLInputElement;
  const password = form.elements.namedItem('password') as HTMLInputElement;

  if (email.value === '' || password.value === '') {
    return alert('Attention! Fields must not be empty!');
  }
  const userInfo: UserInfo = { email: email.value, password: password.value };
  console.log(userInfo);
  form.reset();
}

formEl.addEventListener('submit', handleSubmit);
