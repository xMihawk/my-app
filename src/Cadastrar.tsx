import React, { useState, useEffect } from "react";
import { Tarefa } from "./Tarefa";
import { Categoria } from "./Categoria";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [status, setStatus] = useState("");
  const [categoria, setCategoria] = useState<Categoria[]>([]);



  function enviarTarefa(event: any) {
    event.preventDefault();
    const tarefa : Tarefa = {
        Titulo: titulo,
        Descricao: descricao,
        Status: 'Não iniciada',
        CategoriaId: categoriaId,
        Categoria: categoria
    };

    fetch("/api/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    });

    return (
        <div>
          <h1>Cadastrar Tarefa</h1>
          <form onSubmit={enviarTarefa}>
            <input
              type="text"
              value= {titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Nome da Tarefa"
            />
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
            />
            <select
              value={categoriaId}
              onChange={(e) => setCategoriaId(e.target.value)}
            >
              <option value="">Selecione a Categoria</option>
              {categoria.map((categoria ) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.Nome}
                </option>
              ))}
            </select>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      );
  };
   
};

export default CadastrarTarefa;