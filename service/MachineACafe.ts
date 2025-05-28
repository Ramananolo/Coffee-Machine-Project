import { TypeCafe } from '../model/Cafe';
import { Stock } from '../model/Stock';

export class MachineACafe {
    constructor(private stock: Stock) { }

    verifierEtPreparer(cafe: TypeCafe): boolean | string {
        const erreurs = this.stock.verifierStock(cafe);
        if (erreurs.length > 0) {
            return `Ingrédient manquant : ${erreurs.join(', ')}`;
        }

        this.stock.consommerIngredients(cafe);
        this.preparer(cafe);
        return true;
    }

    private preparer(cafe: TypeCafe) {
        console.log('[Préparation en cours...]');
        console.log('- Ajout du café...');
        if (cafe !== TypeCafe.Simple) console.log('- Ajout du lait...');
        console.log('- Mélange...');
        console.log('- Service dans la tasse...');
        console.log(`Votre ${cafe} est prêt. Bonne dégustation !`);
    }
}
