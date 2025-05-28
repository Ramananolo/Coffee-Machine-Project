export interface StockIngredients {
    cafe: number;
    lait: number;
    sucre: number;
    tasse: number;
}

export class Stock {
    private ingredients: StockIngredients = {
        cafe: 10, lait: 4, sucre: 10, tasse: 10
    };

    verifierStock(type: string): string[] {
        const manquants: string[] = [];
        if (this.ingredients.cafe <= 0)
            manquants.push('café');
        if (type !== 'Café Simple' && this.ingredients.lait <= 0)
            manquants.push('lait');
        if (this.ingredients.tasse <= 0)
            manquants.push('tasse');
        return manquants;
    }

    consommerIngredients(type: string) {
        const requis: (keyof typeof this.ingredients)[] = ['cafe', 'tasse', 'sucre'];

        if (type !== 'Café Simple')
            requis.push('lait');

        requis.forEach(ingredient => {
            if (this.ingredients[ingredient] > 0) {
                this.ingredients[ingredient]--;
            }
        });
    }

    getStock(): StockIngredients {
        return this.ingredients;
    }
}
