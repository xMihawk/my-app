import React from "react";
import ListarTarefas from "./Listar";
import ListarTarefasConcluidas from "./listarConcluidas";
import ListarTarefasNaoConcluidas from "./listarNaoConcluidas";
import AlterarTarefa from './alterar';
import CadastrarTarefa from './cadastrar';


function App() {
  return (
    <div id="app">
      <ListarTarefas />
      <ListarTarefasConcluidas />
      <ListarTarefasNaoConcluidas />

    </div>
  );
}

export default App;
