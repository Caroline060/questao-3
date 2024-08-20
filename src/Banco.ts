export class Banco {
    
    //ATRIBUTOS
    private madeira: string;
    private ferro: string;
    private cor: string;

    //CONSTRUTOR
    public constructor(_madeira: string, _ferro: string, _cor: string){
        this.madeira = _madeira;
        this.ferro = _ferro;
        this.cor = _cor;
    }

    //MÉTODOS GET E SET
    public  getMadeira(): string {
        return this.madeira;
    }

    public setMadeira(_madeira: string): void {
        this.madeira= _madeira;
    }
    ///
    public getFerro(): string {
        return this.ferro;
    }

    public setFerro(_ferro: string): void {
        this.ferro = _ferro
    }
    ///
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor
   }

    //MÉTODOS DIAGRAMA
    public sentar(): void {
        console.log(`${this.madeira} é onde as pessoas ficam sentadas no intervalo.`);
    }

    public deitar(): void {
        console.log(`${this.ferro} é ruim pra ficar deitado.`);
    }
}