export class Client {
    constructor(public montant: number) { }

    payer(): number {
        return this.montant;
    }
}
