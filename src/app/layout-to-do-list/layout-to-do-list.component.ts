import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout-to-do-list',
  templateUrl: './layout-to-do-list.component.html',
  styleUrls: ['./layout-to-do-list.component.css'],
})
export class LayoutToDoListComponent {
  novaTarefa: string = '';
  tarefas: any[] = [];
  apiUrl = 'http://localhost:8000/api/';
  modalEdicaoAberto = false;
  tarefaParaEditar: any = null;
  descricaoEditada: string = '';
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

      this.http
        .post<{ descricao: string }>(`${this.apiUrl}ctodo`, dto)
        .subscribe(
          (response) => {
            console.log('Tarefa criada com sucesso:', response);
            this.tarefas.push(response);
            this.novaTarefa = '';
          },
          (error) => {
            console.error('Erro ao criar a tarefa:', error);
          }
        );
    }
  }

  removerTarefa(index: number) {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.http
        .delete(`${this.apiUrl}rtodo/${this.tarefas[index].id}`)
        .subscribe(() => {
          this.tarefas.splice(index, 1);
        });
    }
  }

  finalizarTarefa(index: number) {
    if (window.confirm('Tem certeza que deseja finalizar esta tarefa?')) {
      this.http
        .post(`${this.apiUrl}ftodo/${this.tarefas[index].id}`, { })
        .subscribe(() => {
          this.tarefas[index].status = 1;
        });
    }
  }

  editarTarefa(tarefa: any) {
    this.tarefaParaEditar = tarefa;
    this.descricaoEditada = tarefa.descricao;
    this.modalEdicaoAberto = true;
  }

  fecharModalEdicao() {
    this.modalEdicaoAberto = false;
    this.tarefaParaEditar = null;
  }

  salvarEdicao() {
    if (this.tarefaParaEditar) {
      const id = this.tarefaParaEditar.id;

      this.http
        .put(`${this.apiUrl}atttodo/${id}`, {
          descricao: this.descricaoEditada,
          status: this.tarefaParaEditar.status,
        })
        .subscribe(() => {
          this.tarefaParaEditar.descricao = this.descricaoEditada;
          this.fecharModalEdicao();
        });
    }
  }

  carregarTarefas() {
    this.http.get<string[]>(`${this.apiUrl}rtodos`).subscribe(
      (response) => {
        this.tarefas = response;
      },
      (error) => {
        console.error('Erro ao recuperar as tarefas:', error);
      }
    );
  }
}