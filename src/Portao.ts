export class Portao {
    
    //ATRIBUTOS
    private tranca: string;
    private ferro: string;
    private grade: string;

    //CONSTRUTOR
    public constructor(_tranca: string, _ferro: string, _grade: string){
        this.tranca = _tranca;
        this.ferro = _ferro;
        this.grade = _grade;
    }

    //MÉTODOS GET E SET
    public  getTranca(): string {
        return this.tranca;
    }

    public setTranca(_tranca: string): void {
        this.tranca= _tranca;
    }
    ///
    public getGrade(): string {
        return this.grade;
    }

    public setGrade(_grade: string): void {
        this.grade = _grade
    }
    ///
    public getFerro(): string {
        return this.ferro;
    }

    public setFerro(_ferro: string): void {
        this.ferro = _ferro
   }

    //MÉTODOS DIAGRAMA
    public abrir(): void {
        console.log(`${this.ferro} é muito pesado para abrir.`);
    }

    public trancar(): void {
        console.log(`${this.tranca} é uma das melhores para trancar o portão.`);
    }
}