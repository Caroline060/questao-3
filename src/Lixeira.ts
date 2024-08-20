export class Espada {
    
    //ATRIBUTOS
    private capacidade: number;
    private material: string;
    private cor: string;

    //CONSTRUTOR
    public constructor(_capacidade: number, _material: string, _cor: string){
        this.capacidade = _capacidade;
        this.material = _material;
        this.cor = _cor;
    }

    //MÉTODOS GET E SET
    public  getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }
    ///
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material
    }
    ///
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor
    }

    //MÉTODOS DIAGRAMA
    public reciclar(): void {
        console.log(`lixeiras da cor ${this.cor} são pra reciclagem.`);
    }

    public descarte(): void {
        console.log(`lixairas com a capacidade de ${this.capacidade} são boas.`);
    }
}