import {Nave}  from './Nave.js';
import {Marciano}  from './Marciano.js';
import {Disparo}  from './Disparo.js';

export class Juego
{
    constructor()
    {
        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;
<<<<<<< HEAD
        this.nave = new Nave(this.limiteVentanaH / 2, this.limiteVentanaV - 40, 60, 30, "green");
        this.marciano = new Marciano(this.limiteVentanaH,this.limiteVentanaV);
        this.disparos = new Array();
        this.colision = this.nave.controlColision();
        this.inicio();
    }
    
=======


        this.limiteVentanaH = contenedor.clientWidth;
        this.limiteVentanaV = contenedor.clientHeight;
        this.marciano = []; 
        
        this.crearMarcianos();
        console.log(this.marciano);

        this.inicio();
    }

    crearMarcianos()//funcion que crea los marcianos
    {
        let posIni=0;

        for (let index = 0; index < 15; index++) 
        {
            if (index<5) {
                this.marciano[index] = new Marciano(this.limiteVentanaH,this.limiteVentanaV,"contenedor","marciano"+index,50,50,posIni);
                posIni+=100;
                if (index==4) {
                    posIni=0;
                }
            }else if (index >= 5 && index < 10) {                
                this.marciano[index] = new Marciano(this.limiteVentanaH,this.limiteVentanaV,"contenedor","marciano"+index,50,50,posIni,100);
                posIni+=100;
                if (index==9) {
                    posIni=0;
                }
            }else if(index >= 10 && index < 15){
                this.marciano[index] = new Marciano(this.limiteVentanaH,this.limiteVentanaV,"contenedor","marciano"+index,50,50,posIni,200);
                posIni+=100;
                if (index==14) {
                    posIni=0;
                }
            }
        }
    }

    moverBloque()//funcion que mueve el los objetos marciano
    {
        this.marciano.forEach(element => {
            element.controlImpactoHorizontal(10);
        });
    }

    tocarFondo()//funcion que retorna si cualquier objeto marciano toca el final de la pantalla
    {
        let res=false;
        this.marciano.forEach(element => {
            if (element.controlImpactoVertical()) 
            {
                res = true;
                return true;
            }
        });
        return res;
    }


>>>>>>> 31e99581b3ce80a3ee121373aa8b99d884e7b807
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

            //if (!this.marciano[14].controlImpactoVertical() )//mientras el marciano no toque el final del contenedor 
            if (!this.tocarFondo()) //mientras el marciano no toque el final del contenedor 
            {
<<<<<<< HEAD
                this.marciano.controlImpactoHorizontal(5);//el marciano se mueve
=======
                this.moverBloque();



>>>>>>> 31e99581b3ce80a3ee121373aa8b99d884e7b807
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