export class Espada {
    
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private design: string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: string, _design: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.design = _design;
    }

    //MÉTODOS GET E SET
    public  getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho= _tamanho;
    }
    ///
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material
    }
    ///
    public getDesign(): string {
        return this.design;
    }

    public setDesign(_design: string): void {
        this.design = _design
    }

    //MÉTODOS DIAGRAMA
    public cortar(): void {
        console.log(`${this.tamanho} é melhor para cortar coisas.`);
    }

    public atacar(): void {
        console.log(`${this.material} é complicado para atacar.`);
    }
}