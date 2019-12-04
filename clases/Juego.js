import {Nave}  from './Nave.js';
import {Marciano}  from './Marciano.js';
import {Disparo}  from './Disparo.js';

export class Juego
{
    constructor()
    {
        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;
        this.nave = new Nave(this.limiteVentanaH / 2, this.limiteVentanaV - 40, 60, 30, "green");
        this.marciano = new Marciano(this.limiteVentanaH,this.limiteVentanaV);
        this.disparos = new Array();
        this.colision = this.nave.controlColision();
        this.inicio();
    }
    
    inicio()
    { 
        document.addEventListener("keydown", (evento) => {
            if (evento.key == 'a' || evento.key == 'ArrowLeft')
                if (this.colision == false)
                    this.nave.moverIzquierda();
                else
                    this.nave.x++;
            else if (evento.key == 'd' || evento.key == 'ArrowRight')
                if (this.colision == false)
                    this.nave.moverDerecha();
                else
                    this.nave.x--;
        });
    
        document.addEventListener("keydown", (evento) => {
            if (evento.key == " ")
                this.disparos.push(new Disparo(this.nave.x + this.nave.ancho / 2 - 2.5, this.limiteVentanaV - 60, 5, 20, "yellow"));
        });
        
        var id = setInterval( () => 
        {
            if (!this.marciano.controlImpactoVertical()) //mientras el marciano no toque el final del contenedor 
            {
                this.marciano.controlImpactoHorizontal(5);//el marciano se mueve
                console.log(0);
            }else{
                console.log(1);
                clearInterval(id);//salimos de setInterval si el marciano toca el final
            }
            
            for (let disparo of this.disparos)
                disparo.disparar();
        },10);
    }
}