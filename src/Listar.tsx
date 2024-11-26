import React, { useEffect, useState } from "react";
import { Tarefa } from "./Tarefa";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    pesquisarTarefas();
  });

  function pesquisarTarefas() {
    fetch("http://localhost:3000/api/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Status</th>
        </tr>
      </thead>
      {
        <tbody>
          {tarefas.map((tarefa) => (
            <tr>
              <td>{tarefa.id}</td>
              <td>{tarefa.Titulo}</td>
              <td>{tarefa.Descricao}</td>
              <td>{tarefa.Status}</td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
}

export default ListarTarefas;
