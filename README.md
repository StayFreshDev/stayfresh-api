# stayfresh-api

Ce repository est le repository contenant l'api de notre projet stayfresh

# Installation

## Setup des technologies
Pour ce faire, rien de plus simple : 
- Vérifier votre version de node afin que celle-ci soit en ```18.16```. Si elle ne l'est pas ou qu'il n'est tout simplement pas installé mettez-le à jour en télechargeant le fichier de la 18.16 en suivant ce ce lien : https://nodejs.org/en
- Vérifiez également votre version de NPM (Node Package Management) ```9.7.2```. Notez que si vous installez ou mettez à jour NodeJS, NPM sera mis à jour automatiquement en fonction de la meilleure version compatiblae avec la version de NodeJS installé. Si vous l'avez déjà et que vous souhaiter le mettre à jour, vous pouvez tout simplement executer la commande suivante :
```bash
npm install -g npm
```
- Puis effectuez la commande `npm i` afin d'installer les packages requis pour le fonctionnement de l'application

## Setup de la Base De Données (BDD)
- Pour pouvoir faire tourner ce projet, il faudra disposer d'un instance de MariaDB et phpmyadmin (Wamp64, Xamp, DockerContainer, etc...)
- Une fois cette instance active, rendez-vous sur phpmyadmin (MariaDB) et créez une nouvelle BDD.
- Puis dans cette BDD sélectionnez l'onglet "importer" et selectionner le script sql présent à la racine du repository.
- Cela crééra la BDD dont nous avons besoin !

## Présentation des commandes de lancement

Pour ce projet nous vous mettons deux commandes à disposition :
- `npm start` : cette commande permet de le fichier `app.js` et qui fera tourner l'API.
- `npm run start-dev` : cette commande permet de lancer l'API comme la commande précédente mais en utilisant la librairie npm "nodemon" qui permet de redémarrer le serveur à chque fois qu'une mise à jour qu'un fichier Javascript a été modifié.

## Variables d'environnement
Vous devrez au préalable remplir les variables d'environnement nécessaire au bon fonctionnement de l'application :
- `APP_HOST` : localisation (URL) de la BDD
- `APP_USER` && `APP_PASSWORD` : utilisateur et mot de passe de la BDD
- `APP_DB` : nom de la BDD
- `SHA_KEY` : clé de hachage pour les JWT (Json Web Token)

### Et voilà vous êtes prêt à développer ! 🎉🎉
