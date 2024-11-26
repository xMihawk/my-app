import React, { useEffect, useState } from "react";
import { Tarefa } from "./Tarefa";

function ListarTarefasNaoConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    pesquisarTarefasNaoConcluidas();
  });

  function pesquisarTarefasNaoConcluidas() {
    fetch("http://localhost:5085/api/tarefas/naoconcluidas")
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
                <th>ID</th>
                <th>Titulo</th>
                <th>Status</th>
            </tr>
        </thead>
         { <tbody>
            {tarefas.map(Tarefa => (
                <tr key={Tarefa.id}>
                    <td>{Tarefa.id}</td>
                    <td>{Tarefa.Titulo}</td>
                    <td>{Tarefa.Descricao}</td>
                    <td>{Tarefa.Status}</td>
                </tr>
            ))}
        </tbody> }
    </table>
    );
};

export default ListarTarefasNaoConcluidas;
