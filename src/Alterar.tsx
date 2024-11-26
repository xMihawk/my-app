import React, { useState, useEffect } from "react";
import { Tarefa } from "./Tarefa";



const AlterarTarefas = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch("/api/tarefa/listar")
      .then((response) => response.json())
      .then((data) => setTarefas(data));
  }, []);

  const alterarStatus = async (id: number) => {
    await fetch(`/api/tarefa/alterar/${id}`, {
      method: "PATCH",
    });
  };
  
  const AlterarTarefa = ({ tarefa.id }) => {
    const handleAlterar = () => {
        api.patch('/api/tarefas/alterar/{id}', { id: tarefa.id })
            .then(() => alert('Status alterado!'));
    };
    return <button onClick={handleAlterar}>Alterar Status</button>;
};

  return (
    <div>
      <h1>Alterar Status da Tarefa</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.Titulo} - {tarefa.Status}
            <button onClick={() => alterarStatus(tarefa.id)}>Alterar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlterarTarefas;
