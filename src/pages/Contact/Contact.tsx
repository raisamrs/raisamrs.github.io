import { useForm } from '../../helpers/formHandlers';
import {
  titleBgClasses, titleFgClasses,
  titleContainerClasses,
} from '../../classesNamesApp';
import {
  nameClasses, lastNameClasses, emailClasses, subjectClasses,
  messageClasses, btnClasses, containerFormClasses, formRowClasses, formGroupClasses,
  formGroupCol12Classes,
} from './classesNamesContact';

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
      <div className={ titleContainerClasses }>
        <h1 className={ titleBgClasses }>Contato</h1>
        <h2 className={ titleFgClasses }>Contato</h2>
      </div>
      <div className={ containerFormClasses }>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <input
            type="hidden"
            name="accessKey"
            value="f8c9cf7e-92f7-4290-af2a-5e6ba8c61ff6"
          />
          <div className={ formRowClasses }>
            <div className={ formGroupClasses }>
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                className={ nameClasses }
                type="text"
                name="name"
                placeholder="Ex.: Natália"
                value={ name }
                onChange={ handleNameChange }
                required
                min="5"
                max="60"
              />
            </div>
          </div>
          <div className={ formRowClasses }>
            <div className={ formGroupClasses }>
              <label htmlFor="last-name">Sobrenome:</label>
              <input
                id="last-name"
                className={ lastNameClasses }
                type="text"
                name="last-name"
                placeholder="Ex.: Abreu"
                value={ lastName }
                onChange={ handleLastNameChange }
                required
                min="5"
                max="60"
              />
            </div>
          </div>

          {nameError && <p>{nameError}</p>}
          {lastNameError && <p>{lastNameError}</p>}

          <div className={ formRowClasses }>
            <div className={ formGroupClasses }>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                className={ emailClasses }
                type="text"
                name="email"
                placeholder="Ex: email@dominio.com.br"
                value={ email }
                onChange={ handleEmailChange }
                required
                max="70"
              />
            </div>
          </div>
          {emailError && <p>{emailError}</p>}

          <div className={ formRowClasses }>
            <div className={ formGroupClasses }>
              <label htmlFor="subject">Assunto:</label>
              <input
                className={ subjectClasses }
                type="text"
                name="subject"
                placeholder="Ex: Criação de site para minha loja de roupas"
                value={ subject }
                onChange={ handleSubjectChange }
                required
                max="1000"
              />
            </div>
          </div>

          <div className={ formRowClasses }>
            <div className={ formGroupCol12Classes } />
            <textarea
              className={ messageClasses }
              name="message"
              cols={ 30 }
              rows={ 10 }
              placeholder="Detalhe um pouco mais o que deseja :)"
              value={ message }
              onChange={ handleMessageChange }
              required
            />
          </div>
          <div className={ formRowClasses }>
            <div className={ formGroupCol12Classes }>
              <button
                className={ btnClasses }
                disabled={ btnDisabled }
                type="submit"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
          <input type="hidden" name="redirectTo" value="http://localhost:5173/sent-message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
