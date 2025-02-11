import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMessage().subscribe({
      next: (data) => {
        this.message = data.message; 
      },
      error: (err) => {
        console.error('Erro ao buscar mensagem:', err);
      }
    });
  }
}