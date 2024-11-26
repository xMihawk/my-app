import { Categoria } from "./Categoria";

export interface Tarefa {
    id? : string;
    Titulo : string;
    Descricao : string;
    criadoEm? : string;
    Categoria : Categoria
    CategoriaId? : string;
    Status : string ;
   
}