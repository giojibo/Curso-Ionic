import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform
  (
    arreglo: any[],
    texto: string = '',
    columna: string = ''
  ): any[]
  {

    if(texto == '')
    {
      return arreglo;
    }

    if(!arreglo)
    {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      item => item[columna].toLowerCase().includes(texto)
    )
  }

}
