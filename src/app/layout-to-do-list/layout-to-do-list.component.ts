import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-layout-to-do-list",
  templateUrl: "./layout-to-do-list.component.html",
  styleUrls: ["./layout-to-do-list.component.css"],
})

export class LayoutToDoListComponent {
  novaTarefa: string = "";
  tarefas: any[] = [];
  apiUrlCriar = "http://localhost:8000/api/ctodo";
  apiUrlRecuperar = "http://localhost:8000/api/rtodos";
  apiUrlDeletar = 'http://localhost:8000/api/rtodo';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      const dto = {
        descricao: this.novaTarefa,
        status: 0,
      };

      this.http.post<{ descricao: string }>(this.apiUrlCriar, dto).subscribe(
        (response) => {
          console.log("Tarefa criada com sucesso:", response);
          this.tarefas.push(response.descricao);
          this.novaTarefa = "";
        },
        (error) => {
          console.error("Erro ao criar a tarefa:", error);
        }
      );
    }
  }

  removerTarefa(index: number) {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      this.http.delete(`${this.apiUrlDeletar}/${this.tarefas[index].id}`).subscribe(() => {
        this.tarefas.splice(index, 1);
      });
    }
  }

  finalizarTarefa(index: number) {}

  editarTarefa(index: number) {}

  carregarTarefas() {
    this.http.get<string[]>(this.apiUrlRecuperar).subscribe(
      (response) => {
        this.tarefas = response;
      },
      (error) => {
        console.error("Erro ao recuperar as tarefas:", error);
      }
    );
  }
}