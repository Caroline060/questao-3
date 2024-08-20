export class Armario {
    
    //ATRIBUTOS
    private madeira: string;
    private tinta: string;
    private tranca: string;

    //CONSTRUTOR
    public constructor(_madeira: string, _tinta: string, _tranca: string){
        this.madeira = _madeira;
        this.tinta = _tinta;
        this.tranca = _tranca;
    }

    //MÉTODOS GET E SET
    public  getMadeira(): string {
        return this.madeira;
    }

    public setMadeira(_madeira: string): void {
        this.madeira= _madeira;
    }
    ///
    public getTinta(): string {
        return this.tinta;
    }

    public setTinta(_tinta: string): void {
        this.tinta = _tinta
    }
    ///
    public getTranca(): string {
        return this.tranca;
    }

    public setTranca(_tranca: string): void {
        this.tranca = _tranca
   }

    //MÉTODOS DIAGRAMA
    public guardar(): void {
        console.log(`${this.tranca} é boa para guardar e deixar os objetos seguros.`);
    }

    public decorar(): void {
        console.log(`${this.tinta} deixa o ambiente mais bonito.`);
    }
}