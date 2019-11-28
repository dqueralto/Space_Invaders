import {Nave}  from './Nave.js';
import {Marciano}  from './Marciano.js';
import {Disparo}  from './Disparo.js';

export class Juego
{
    constructor()
    {
        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;

        this.marciano= new Marciano(this.limiteVentanaH,this.limiteVentanaV);
        this.inicio();
    }

    inicio()
    {
        
       var id = setInterval( () => 
        {
            if (!this.marciano.controlImpactoVertical()) //mientras el marciano no toque el final del contenedor 
            {
                this.marciano.controlImpactoHorizontal(100);//el marciano se mueve
                console.log(0);
            }else{
                console.log(1);
                clearInterval(id);//salimos de setInterval si el marciano toca el final
            }

        },10);
    }
}