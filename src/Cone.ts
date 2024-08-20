export class Cone {
    
    //ATRIBUTOS
    private formato: string;
    private material: string;
    private pigmento: string;

    //CONSTRUTOR
    public constructor(_formato: string, _material: string, _pigmento: string){
        this.formato = _formato;
        this.material = _material;
        this.pigmento = _pigmento;
    }

    //MÉTODOS GET E SET
    public  getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato= _formato;
    }
    ///
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material
    }
    ///
    public getPigmento(): string {
        return this.pigmento
    }

    public setPigmento(_pigmento: string): void {
        this.pigmento = _pigmento
    }

    //MÉTODOS DIAGRAMA
    public sinalizar(): void {
        console.log(`os cones da cor ${this.pigmento} são usados para sinalizar.`);
    }

    public controlarTrafego(): void {
        console.log(`${this.formato} de cones é usado para controlar o tráfego.`);
    }
}