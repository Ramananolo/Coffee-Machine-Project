import { TypeCafe, prixCafe } from './model/Cafe';
import { Stock } from './model/Stock';
import { Monnayeur } from './service/Monnayeur';
import { MachineACafe } from './service/MachineACafe';
import { Client } from './Client';

const readline = require('readline-sync');

console.log('===============================');
console.log('          COFFEE            ');
console.log('===============================\n');

const montant = parseFloat(readline.question('Veuillez insérer votre argent (€) : '));
const client = new Client(montant);


console.log('\nChoisissez votre café :');
console.log(`1. ${TypeCafe.Simple} (${prixCafe[TypeCafe.Simple]}€)`);
console.log(`2. ${TypeCafe.Lait} (${prixCafe[TypeCafe.Lait]}€)`);
console.log(`3. ${TypeCafe.VIP} (${prixCafe[TypeCafe.VIP]}€)`);


const choix = readline.questionInt('> Votre choix : ');
if (![1, 2, 3].includes(choix)) {
    console.log('[Erreur] Choix invalide. Veuillez selectionner 1, 2 ou 3.');
    process.exit(1);
}

const cafeChoisi = [TypeCafe.Simple, TypeCafe.Lait, TypeCafe.VIP][choix - 1];

const stock = new Stock();
const monnayeur = new Monnayeur();
const machine = new MachineACafe(stock);

const prix = prixCafe[cafeChoisi];
const montantClient = client.payer();

if (!monnayeur.verifierPaiement(montantClient, prix)) {
    console.log('[Erreur] Paiement insuffisant. Veuillez inserer plus d argent.');
} else {
    console.log(`[Monnayeur] Paiement accepte (${montantClient.toFixed(2)}€)`);

    const resultat = machine.verifierEtPreparer(cafeChoisi);

    if (resultat === true) {
        const rendu = monnayeur.rendreMonnaie(montantClient, prix);
        if (rendu > 0) {
            console.log(`[Monnayeur] Rendu de la monnaie : ${rendu.toFixed(2)}€`);
        }
    } else {
        console.log(`[Erreur] ${resultat}`);
        console.log(`[Monnayeur] Rendu de la monnaie : ${montantClient.toFixed(2)}€`);
    }
}
