import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe({
      next: (data) => {
        this.message = data.message;
      },
      error: (error) => {
        console.error('Erro ao buscar mensagem:', error);
      }
    });
  }
}