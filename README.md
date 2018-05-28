## TEST TECHNIQUE QWANT 20/04/2018

### Instructions

Le but de ce test est de vous évaluer sur vos compétences techniques dans les langages suivants: **HTML**, **CSS** et **JavaScript**.

La durée du test est limitée à une heure mais il n'est pas forcement nécessaire de rendre un projet parfaitement fonctionnel. Nous évaluerons en priorité la qualité du code, vos capacités d'adaptation et votre gestion du stress.

Conseil : chercher "JS fetch" dans Google et lire la doc


### Sujet

IMDB est un site web qui liste tous les films et séries qui ont été, ou qui vont être, diffusés. (ex: https://www.imdb.com/title/tt1825683/)

Vous devez coder un petit moteur de recherche de films. La page se composera d'un champ de recherche et d'une liste d'affiches de films. L'esthétique du projet est laissée à votre discretion.

La liste des films doit se mettre à jour à la frappe de l'utilisateur. Vous devez utiliser l'API http://www.omdbapi.com/ pour votre projet. Cette API renvoie, avec certains paramètres, une réponse au format _JSON_ contenant une liste de films. Elle est gratuite et nécessite une clé d'API pour être utilisée. Vous pourrez en obtenir une via ce lien: http://www.omdbapi.com/apikey.aspx.

La liste des films doit contenir, pour chaque élement, l'affiche du film, l'année de sortie et le titre. Un clic sur le film doit ouvrir un nouvel onglet sur la page IMBD du film.

Vous devrez être capable d'expliquer votre code et vos choix dans ce projet.


### Restrictions

 - Vous ne devez pas utiliser de dépendances externes pour votre projet.
 - Votre projet sera lancé sur un navigateur Chrome et/ou Firefox récent.
 - Votre projet devra se lancer via un fichier _index.html_.
 - Vous avez le droit de collaborer entre vous et d'utiliser internet, mais vous serez évalués individuellement.


### Conseils

 - Il est fortement conseillé d'utiliser une fonction de _debounce_.
 - Regardez la structure des urls sur le site IMDB pour construire dynamiquement vos liens vers leur site.
 - Le projet sera idéalement codé dans la dernière version du _JavaScript_.


### Bonus

Si vous terminez très vite l'exercice vous pouvez améliorer le projet en implémentant des fonctionnalités supplémentaires comme par exemple:

 - Un filtre par année.
 - Une pagination.


### Rendu

Pour rendre votre projet vous devez _forker_ ce projet sur **votre compte Github** personnel. Vous devez ajouter un fichier _auteur_ comprenant vos noms, prénoms et adresse e-mail.

Envoyez ensuite le lien du _fork_ à g.lariviere@qwant.com.

Bonne chance !
