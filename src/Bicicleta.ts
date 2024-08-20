export class Bicicleta {
    
    //ATRIBUTOS
    private cor: string;
    private tamanho: number;
    private acessorios: string;

    //CONSTRUTOR
    public constructor(_cor: string, _tamanho: number, _acessorios: string){
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.acessorios = _acessorios;
    }

    //MÉTODOS GET E SET
    public  getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor= _cor;
    }
    ///
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho
    }
    ///
    public getAcessorios(): string {
        return this.acessorios;
    }

    public setAcessorios(_acessorios: string): void {
        this.acessorios = _acessorios
    }

    //MÉTODOS DIAGRAMA
    public pedalar(): void {
        console.log(`${this.acessorios} auxiliam a pedalar.`);
    }

    public empinar(): void {
        console.log(`${this.tamanho} é uma bicicleta mais complicada para empinar.`)
    }
}