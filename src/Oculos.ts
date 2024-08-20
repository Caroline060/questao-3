export class Oculos {
    
    //ATRIBUTOS
    private lente: number;
    private armacao: string;
    private design: string;

    //CONSTRUTOR
    public constructor(_lente: number, _armacao: string, _design: string){
        this.lente = _lente;
        this.armacao = _armacao;
        this.design = _design;
    }

    //MÉTODOS GET E SET
    public  getLente(): number {
        return this.lente;
    }

    public setLente(_lente: number): void {
        this.lente= _lente;
    }
    ///
    public getArmacao(): string {
        return this.armacao;
    }

    public setArmacao(_armacao: string): void {
        this.armacao = _armacao
    }
    ///
    public getDesign(): string {
        return this.design;
    }

    public setDesign(_design: string): void {
        this.design = _design
    }

    //MÉTODOS DIAGRAMA
    public proteger(): void {
        console.log(`a armação ${this.armacao} protege mais a lente.`);
    }

    public auxiliar(): void {
        console.log(`${this.lente} auxilia a visão de muitas pessoas.`);
    }
}