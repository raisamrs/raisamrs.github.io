import { sucessMsgClasses, sentMsgContainerClasses } from './classesNamesSentMessage';

function SentMessage() {
  return (
    <div className={ sentMsgContainerClasses }>
      <h1 className={ sucessMsgClasses }> Mensagem enviada com sucesso!</h1>
      <h2 className={ sucessMsgClasses }>Obrigada pelo seu contato! </h2>
      <h2 className={ sucessMsgClasses }>Te responderei em até 3 dias úteis!😉</h2>
    </div>
  );
}

export default SentMessage;
