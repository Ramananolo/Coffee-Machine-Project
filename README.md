# Coffee Machine 

## 📝 Description
devellopement d'une **machine à café autonome** permettant aux utilisateurs de commander et de préparer leur café préféré. Il s'inscrit dans une maintenabilité du code (simule le fonctionnement d'une machine à café).

## Principe

L'utilisateur peut :
- Choisir un type de café
- Effectuer un paiement (simulation)
- Recevoir un message de confirmation comme s’il recevait son café

## 🗂️ Structure simplifiée

- Model : contient les données simulées (ex. : les types de café)
- Service : gère la logique métier (paiement, sélection, validation)

## Fonctionnement général

L'application simule les étapes suivantes :

*Pay* : l'utilisateur effectue un paiement simulé
*Get Coffee* : l'utilisateur choisit un café
*UseClass* : les actions sont orchestrées via des classes dédiées
*Errors*: les erreurs (mauvaises saisies, paiement manquant, etc.) gérées proprement

💡 Exemple d'utilisation :

Bienvenue dans la machine à café !
1. Expresso
2. Latte

Veuillez choisir une option : 2

Paiement accepté.
Votre Cappuccino est en cours de préparation... ☕

✅ Objectif pédagogique
 Il montre comment :

Organiser une logique propre

Gérer des erreurs utilisateur

Utiliser des classes (UseClass) pour structurer l’application

