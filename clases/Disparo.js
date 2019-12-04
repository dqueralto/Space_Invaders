export class Disparo
{
    constructor(x, y, ancho, alto, color)
    {
        this.contenedor = document.getElementById("contenedor"); // Referencia al contenedor del juego
        this.x = x; // Coordenada X
        this.y = y; // Coordenada Y
        this.ancho = ancho; 
        this.alto = alto;
        this.color = color;
        this.disparo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.disparo.setAttribute("x", this.x);
        this.disparo.setAttribute("y", this.y);
        this.disparo.setAttribute("width", this.ancho + "px");
        this.disparo.setAttribute("height", this.alto + "px");
        this.disparo.setAttribute("fill", this.color);
        this.contenedor.appendChild(this.disparo);
    }
    
    disparar() {
        this.y -= 10;
        this.disparo.setAttribute("y", this.y);
    }
}