import { useForm } from '../../helpers/formHandlers';

function Contact() {
  const {
    name,
    nameError,
    lastName,
    lastNameError,
    email,
    emailError,
    subject,
    message,
    btnDisabled,
    handleNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleSubjectChange,
    handleMessageChange,
  } = useForm();
  return (
    <div>
      <h4>Contato</h4>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
      >
        <input
          type="hidden"
          name="accessKey"
          value="f8c9cf7e-92f7-4290-af2a-5e6ba8c61ff6"
        />

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Digite o seu nome. Ex.: Natália"
          value={ name }
          onChange={ handleNameChange }
          required
          min="5"
          max="60"
        />
        <input
          id="last-name"
          type="text"
          name="last-name"
          placeholder="Digite o seu sobrenome. Ex.: Abreu"
          value={ lastName }
          onChange={ handleLastNameChange }
          required
          min="5"
          max="60"
        />
        {nameError && <p>{nameError}</p>}

        {lastNameError && <p>{lastNameError}</p>}
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Digite o seu e-mail. Ex: email@dominio.com.br"
          value={ email }
          onChange={ handleEmailChange }
          required
          max="70"
        />
        {emailError && <p>{emailError}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Motivo do contato.
          Ex: Criação de site para minha loja de roupas"
          value={ subject }
          onChange={ handleSubjectChange }
          required
          max="1000"
        />
        <textarea
          name="message"
          cols={ 30 }
          rows={ 10 }
          placeholder="Detalhe um pouco mais o que deseja :)"
          value={ message }
          onChange={ handleMessageChange }
          required
        />
        <button
          disabled={ btnDisabled }
          type="submit"
        >
          Enviar mensagem
        </button>
        <input type="hidden" name="redirectTo" value="http://localhost:5173/sent-message" />
      </form>
    </div>
  );
}

export default Contact;
