# Javascript

A quoi ça sert ?
- Site dynamique avec le DOM
- Utiliser des API
- Créer des API, jeux, des front-end complets

Comment ça marche ? 
- Langage orienté prototype / objet
- Interprété par le navigateur ( V8 - moteur de chromium, Spider Monkey - moteur firefox )
- Typage dynamique ( pas besoin de typer explicitement )
- Typage permissif ( le type d'une variable peut changer en cours de route. )

Les types de variables en JS : 
- Entier / Float : Number
- String : chaîne de caractères
- Boolean : true / false
- NaN : Not a number
- Undefined
- Null
- Object
- Array
- Function
- ...

## Déclarer une variable

On déclare une variable avec les mots clefs `let`, `const`, `var`
- les mots clefs `let` et `const` ont une portée de block ( function, if, while, for, ...)
- le mot clef `var` a une portée de fonction.
- let permet de définir une variable, qui peut être modifiée, qui peut être réassignée. 
- const permet de définir une constante, qui ne peut pas être réassignée.

## Déclarer une fonction

Un block de code qui peut être exécuté à n'importe quel moment. 
Une fonction peut avoir des paramètres.
Une fonction est une liste d'instructions qui peut retourner un résultat, qui a un nom, et qui est réutilisable.
On peut appeler une fonction à n'importe quel moment.
Une fonction peut avoir des arguments / paramètres.
On se sert des fonctions pour découper son code en parties lisibles.

Une fonction qui fait un calcule elle va retourner un résultat. Ce résultat, on souhaite le récupérer, pour pouvoir le manipuler par la suite.

## Les blocks

### Les conditions

Opérateurs conditionnels : 
- égal == ( ne s'utilise plus )
- supérieur  >
- supérieur ou égal >=
- inférieur <
- inférieur ou égal <=
- strictement égal ===
- différent  !==

Opérateurs logiques : 
- Et && -> les deux conditions doivent être vrai, pour retourner true
- Ou || ( alt-gr + 7 ) -> Une ou l'autre des conditions doit être vraie pour retourner true
- Pas ! -> si c'est false, retourne true


### les switchs

Servent à faire une action courte ( appeler une fonction par exemple ) en fonction de la valeur d'une variable, si les différentes valeurs 
de la variable sont connues.

### les if

pour faire une action en fonction d'une condition

### Falsy
false, null, undefined, "", ``, ''
- Une valeur qui retourne 'false' quand elle est explicitement testée ( dans une condition )
- if, ternaire, !, !!

## Les boucles

- Foreach
- For i - effectuer une action un nombre de fois connu
- While - effectuer une action en boucle tant qu'une condition est vraie
- Do While

## Les tableaux

Une liste de données.

## Les objets

