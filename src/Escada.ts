export class Escada {
    
    //ATRIBUTOS
    private material: string;
    private altura: string;
    private marca: string;

    //CONSTRUTOR
    public constructor(_material: string, _altura: string, _marca: string){
        this.material = _material;
        this.altura = _altura;
        this.marca = _marca;
    }

    //MÉTODOS GET E SET
    public  getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material= _material;
    }
    ///
    public getAltura(): string {
        return this.altura;
    }

    public setAltura(_altura: string): void {
        this.altura = _altura
    }
    ///
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca
   }

    //MÉTODOS DIAGRAMA
    public subir(): void {
        console.log(` as escadas dessa ${this.marca} são confiáveis.`);
    }

    public elevar(): void {
        console.log(`escadas dessa ${this.altura} podem ser usadas em qualquer ambiente.`);
    }
}