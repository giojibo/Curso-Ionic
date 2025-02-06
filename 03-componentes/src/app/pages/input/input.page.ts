import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: false,
})
export class InputPage implements OnInit {

  nombre: string = 'Giovani';
  usuario = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log('submit')
    console.log(this.usuario)
  }

}
