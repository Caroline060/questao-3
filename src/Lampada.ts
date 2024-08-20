export class Lampada {
    
    //ATRIBUTOS
    private vidro: number;
    private potencia: number;
    private tamanho: number;

    //CONSTRUTOR
    public constructor(_tamanho: number, _vidro: number, _potencia: number){
        this.tamanho = _tamanho;
        this.vidro = _vidro;
        this.potencia = _potencia;
    }

    //MÉTODOS GET E SET
    public  getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho= _tamanho;
    }
    ///
    public getVidro(): number {
        return this.vidro;
    }

    public setVidro(_vidro: number): void {
        this.vidro = _vidro
    }
    ///
    public getPotencia(): number {
        return this.potencia;
    }

    public setPotencia(_potencia: number): void {
        this.potencia = _potencia
    }

    //MÉTODOS DIAGRAMA
    public iluminar(): void {
        console.log(`a potência de ${this.potencia} não ilumina muito bem.`);
    }

    public sinalizar(): void {
        console.log(`lâmpadas de ${this.tamanho} são usadas para sinalizar.`);
    }
}