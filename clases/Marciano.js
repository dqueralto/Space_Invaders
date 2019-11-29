export class Marciano
{
    constructor(limiteVentanaH,limiteVentanaV,idsvg="contenedor",idc="marciano",ancho=50,alto=50,posX=0,posY=0,strokeWidth="black",stroke=1,fill="red")
    {

        this.contenedor = document.getElementById(idsvg);//Obtencion del objeto que contendra nuestro marciano.
        this.marciano = document.createElementNS("http://www.w3.org/2000/svg", "rect");//Creacion del objeto "rect" con SVG.

        this.marciano.setAttribute("id",idc);//Asignacion inicial del ID del objeto.

        this.marciano.setAttribute("width",ancho);//Asignacion de un ancho objeto.
        this.marciano.setAttribute("height",alto);//Asignacion de un alto objeto.

        this.marciano.setAttribute("x",posX);//Asignacion de una coordenada X objeto.
        this.marciano.setAttribute("y",posY);//Asignacion de una coordenada Y objeto.


        this.marciano.setAttribute("stroke",stroke);//Asignacion inicial del color del borde del objeto. 
        this.marciano.setAttribute("stroke-width",strokeWidth);//Asignacion inicial del grosor del borde del objeto.

        this.marciano.setAttribute("fill",fill);//Asignacion inicial del color de fondo del objeto.

        this.contenedor.appendChild(this.marciano);//Añadimos el objeto "rect" al obgeto "svg"

        this.direccionH=true;//variable para controlar la direccion del marciano.

        this.limiteVentanaH = limiteVentanaH;
        this.limiteVentanaV = limiteVentanaV;

        this.ancho = ancho;
        this.alto = alto;

        this.freno=false;


    }

    moverMarcianoDerecha(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "X" del objeto, desplaza el objeto hacia la derecha.
    {
        var x = parseInt(this.marciano.getAttribute('x'));//Obtencion de la coordenada "X" actual del objeto.
        this.marciano.setAttribute('x', x + velocidad);//Incrementacion e implementacion de la coordenada "X" del objeto.
    }

    moverMarcianoIzquierda(velocidad=1)//Funcion que decrementando el valor numerico de la coordenada "X" del objeto, desplaza el objeto hacia la izquierda.
    {
        var x = parseInt(this.marciano.getAttribute('x'));//Obtencion de la coordenada "X" actual del objeto.
        this.marciano.setAttribute('x', x - velocidad);//Decrementacion e implementacion de la coordenada "X" del objeto.
    }

    moverMarcianoArriba(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "Y" del objeto, desplaza el objeto hacia arriba.
    {
        var y = parseInt(this.marciano.getAttribute('y'));//Obtencion de la coordenada "Y" actual del objeto.
        this.marciano.setAttribute('y', y - velocidad);//Decrementacion e implementacion de la coordenada "Y" del objeto.
    }

    moverMarcianoAbajo(velocidad=1)//Funcion que incrementando el valor numerico de la coordenada "Y" del objeto, desplaza el objeto hacia abajo.
    {
        var y = parseInt(this.marciano.getAttribute('y'));//Obtencion de la coordenada "Y" actual del objeto.
        this.marciano.setAttribute('y', y + velocidad);//Incrementacion e implementacion de la coordenada "Y" del objeto.
    }

    retX(){return parseInt(this.marciano.getAttribute('x'));}//Funcion que retorna la coordenada "X" del objeto.

    retY(){return parseInt(this.marciano.getAttribute('y'));}//Funcion que retorna la coordenada "Y" del objeto.


    controlImpactoHorizontal(velocidad=1, posX=this.retX() )//Funcion que pasando la altura del contenedor, velocidad de incremento, la coordenada "X" y el radio del objeto hace que este rebote contra los laterales del contenedor.
    {
        if(this.direccionH)
        {
            this.moverMarcianoDerecha(velocidad);
            if(posX + this.ancho >= this.limiteVentanaH  )
            {
                this.direccionH = false;

                this.moverMarcianoAbajo(25);

            }
            
        }else if(!this.direccionH){
            this.moverMarcianoIzquierda(velocidad);
            if(posX <= 0 )
            {
                this.direccionH = true;

                this.moverMarcianoAbajo(25);
            }
        }else{}
    }

    controlImpactoVertical(posY=this.retY() )//Funcion que pasando la altura del contenedor, velocidad de incremento, la coordenada "Y" y el radio del objeto hace que este rebote contra la parte superior e inferior del contenedor.
    {

        if( posY + this.alto >= this.limiteVentanaV)
        {
            return  true;
        }
    }
}