export class Nave
{
    constructor(x, y, ancho, alto, color)
    {
        this.contenedor = document.getElementById("contenedor"); // Referencia al contenedor del juego
        this.x = x; // Coordenada X
        this.y = y; // Coordenada Y
        this.ancho = ancho; // Anchura de la nave
        this.alto = alto; // Altura de la nave
        this.color = color;
        this.nave = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.nave.setAttribute("x", this.x);
        this.nave.setAttribute("y", this.y);
        this.nave.setAttribute("width", this.ancho + "px");
        this.nave.setAttribute("height", this.alto + "px");
        this.nave.setAttribute("fill", this.color);
        this.contenedor.appendChild(this.nave);
    }

    controlColision() {
        if (this.x >= 0 && this.x + this.ancho < this.contenedor.clientWidth)
            return false;
        else
            return true;
    }

    moverIzquierda() {
        this.x-=10;
        this.nave.setAttribute("x", this.x);
    }
    
    moverDerecha() { 
        this.x+=10;
        this.nave.setAttribute("x", this.x);
    }
    
}