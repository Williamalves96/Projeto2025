import './Corpo.css'; // Importa o arquivo css

function Corpo () {
  function alertarUsuario() {
    alert('Você clicou no botão');
    alert('Você clicou na imagem');
  }
  return (
    <div className="container-corpo">
      <h1>Desbravando o React </h1>
      <p> vamos lá </p>
      <button onClick={alertarUsuario}>Alert</button>
      <img onDoubleClick={alertarUsuario} className='imagem' src="./meganao.png" alt="cade?" />
      {}
    </div>
  );
}
export default Corpo; // Exporta o componente Corpo