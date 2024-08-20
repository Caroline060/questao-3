export class Cartola {
    
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private formato: string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: string, _formato: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.formato = _formato;
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
    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato
    }

    //MÉTODOS DIAGRAMA
    public vestir(): void {
        console.log(`${this.tamanho} é mais difícil de vestir.`);
    }

    public enfeitar(): void {
        console.log(`${this.formato} é bonito para enfeitar um look.`);
    }
}