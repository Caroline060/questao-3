export class Mangueira {
    
    //ATRIBUTOS
    private borracha: string;
    private comprimento: number;
    private cor: string;

    //CONSTRUTOR
    public constructor(_borracha: string, _comprimento: number, _cor: string){
        this.borracha = _borracha;
        this.comprimento = _comprimento;
        this.cor = _cor;
    }

    //MÉTODOS GET E SET
    public  getBorracha(): string {
        return this.borracha;
    }

    public setBorracha(_borracha: string): void {
        this.borracha= _borracha;
    }
    ///
    public getComprimento(): number {
        return this.comprimento;
    }

    public setComprimento(_comprimento: number): void {
        this.comprimento = _comprimento
    }
    ///
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor
    }

    //MÉTODOS DIAGRAMA
    public regar(): void {
        console.log(`mangueiras de ${this.borracha} são muito usadas para regar jardins.`);
    }

    public apagarFogo(): void {
        console.log(`mangueiras de ${this.comprimento} são usadas para apagar fogo.`);
    }
}