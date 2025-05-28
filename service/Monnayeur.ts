export class Monnayeur {
    verifierPaiement(montantInsere: number, prix: number): boolean {
        return montantInsere >= prix;
    }

    rendreMonnaie(montantInsere: number, prix: number): number {
        return +(montantInsere - prix).toFixed(2);
    }
}
