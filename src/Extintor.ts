export class Extintor {
    
    //ATRIBUTOS
    private mangueira: string;
    private classe: string;
    private valvula: number;

    //CONSTRUTOR
    public constructor(_mangueira: string, _classe: string, _valvula: number){
        this.mangueira = _mangueira;
        this.classe = _classe;
        this.valvula = _valvula;
    }

    //MÉTODOS GET E SET
    public  getMangueira(): string {
        return this.mangueira;
    }

    public setMangueira(_mangueira: string): void {
        this.mangueira= _mangueira;
    }
    ///
    public getClasse(): string {
        return this.classe;
    }

    public setClasse(_classe: string): void {
        this.classe = _classe
    }
    ///
    public getValvula(): number {
        return this.valvula;
    }

    public setValvula(_valvula: number): void {
        this.valvula = _valvula
    }

    //MÉTODOS DIAGRAMA
    public ativar(): void {
        console.log(`extintores são ativados por uma valvula.`);
    }

    public apagar(): void {
        console.log(`extintores são usados para apagar o fogo.`);
    }
    
}