/**
 * scratchblocks v3.4.0
 * https://scratchblocks.github.io/
 * Render scratchblocks code to SVG images.
 *
 * Copyright 2013–2019, Tim Radvan
 * @license MIT
 */
var translationsAll = function() {
  'use strict';

  function e(e) {
    return e && e["default"] || e
  }
  var mo = {
      "move %1 steps": "avancer de %1 pas",
      "turn @turnRight %1 degrees": "tourner @turnRight de %1 degr\xE9s",
      "turn @turnLeft %1 degrees": "tourner @turnLeft de %1 degr\xE9s",
      "point in direction %1": "s'orienter en direction de %1",
      "point towards %1": "s'orienter vers %1",
      "go to x:%1 y:%2": "aller \xE0 x: %1 y: %2",
      "go to %1": "aller \xE0 %1",
      "glide %1 secs to x:%2 y:%3": "glisser en %1 secondes \xE0 x: %2 y: %3",
      "glide %1 secs to %2": "glisser en %1 secondes \xE0 %2",
      "change x by %1": "ajouter %1 \xE0 x",
      "set x to %1": "mettre x \xE0 %1",
      "change y by %1": "ajouter %1 \xE0 y",
      "set y to %1": "mettre y \xE0 %1",
      "set rotation style %1": "fixer le sens de rotation %1",
      "say %1 for %2 seconds": "dire %1 pendant %2 secondes",
      "say %1": "dire %1",
      "think %1 for %2 seconds": "penser \xE0 %1 pendant %2 secondes",
      "think %1": "penser \xE0 %1",
      show: "montrer",
      hide: "cacher",
      "switch costume to %1": "basculer sur le costume %1",
      "next costume": "costume suivant",
      "next backdrop": "arri\xE8re-plan suivant",
      "switch backdrop to %1": "basculer sur l'arri\xE8re-plan %1",
      "switch backdrop to %1 and wait": "basculer sur l'arri\xE8re-plan %1 et attendre",
      "change %1 effect by %2": "ajouter %2 \xE0 l'effet %1",
      "set %1 effect to %2": "mettre l'effet %1 \xE0 %2",
      "clear graphic effects": "annuler les effets graphiques",
      "change size by %1": "ajouter %1 \xE0 la taille",
      "set size to %1%": "mettre la taille \xE0 %1 % de la taille initiale",
      "go to %1 layer": "aller \xE0 l'%1 plan",
      "go %1 %2 layers": "d\xE9placer de %2 plans vers l'%1",
      "start sound %1": "jouer le son %1",
      "clear sound effects": "annuler tous les effets sonores",
      "play sound %1 until done": "jouer le son %1 jusqu'au bout",
      "stop all sounds": "arr\xEAter tous les sons",
      "play drum %1 for %2 beats": "jouer du tambour %1 pendant %2 temps",
      "rest for %1 beats": "faire une pause pendant %1 temps",
      "play note %1 for %2 beats": "jouer la note %1 pendant %2 temps",
      "set instrument to %1": "choisir l'instrument n\xB0 %1",
      "change volume by %1": "ajouter %1 au volume",
      "set volume to %1%": "mettre le volume \xE0 %1%",
      "change tempo by %1": "ajouter %1 au tempo",
      "set tempo to %1": "mettre le tempo \xE0 %1",
      "erase all": "effacer tout",
      stamp: "estampiller",
      "pen down": "stylo en position d'\xE9criture",
      "pen up": "relever le stylo",
      "set pen color to %1": "mettre la couleur du stylo \xE0 %1",
      "change pen color by %1": "ajouter %1 \xE0 la couleur du stylo",
      "set pen %1 to %2": "mettre la %1 du stylo \xE0 %2",
      "change pen %1 by %2": "ajouter %2 \xE0 la %1 du stylo",
      "change pen shade by %1": "ajouter %1 \xE0 l'intensit\xE9 du stylo",
      "set pen shade to %1": "mettre l'intensit\xE9 du stylo \xE0 %1",
      "change pen size by %1": "ajouter %1 \xE0 la taille du stylo",
      "set pen size to %1": "mettre la taille du stylo \xE0 %1",
      "when @greenFlag clicked": "quand @greenFlag est cliqu\xE9",
      "when %1 key pressed": "quand la touche %1 est press\xE9e",
      "when this sprite clicked": "quand ce sprite est cliqu\xE9",
      "when backdrop switches to %1": "quand l'arri\xE8re-plan bascule sur %1",
      "when %1 > %2": "quand le %1 > %2",
      "when I receive %1": "quand je re\xE7ois %1",
      "broadcast %1": "envoyer \xE0 tous %1",
      "broadcast %1 and wait": "envoyer \xE0 tous %1 et attendre",
      "wait %1 seconds": "attendre %1 secondes",
      "repeat %1": "r\xE9p\xE9ter %1 fois",
      forever: "r\xE9p\xE9ter ind\xE9finiment",
      "if %1 then": "si %1 alors",
      "wait until %1": "attendre jusqu'\xE0 ce que %1",
      "repeat until %1": "r\xE9p\xE9ter jusqu'\xE0 ce que %1",
      "stop %1": "stop %1",
      "when I start as a clone": "quand je commence comme un clone",
      "create clone of %1": "cr\xE9er un clone de %1",
      "delete this clone": "supprimer ce clone",
      "ask %1 and wait": "demander %1 et attendre",
      "turn video %1": "vid\xE9o %1",
      "set video transparency to %1%": "mettre la transparence vid\xE9o sur %1",
      "when video motion > %1": "quand mouvement vid\xE9o > %1",
      "reset timer": "r\xE9initialiser le chronom\xE8tre",
      "set %1 to %2": "mettre %1 \xE0 %2",
      "change %1 by %2": "ajouter %2 \xE0 %1",
      "show variable %1": "montrer la variable %1",
      "hide variable %1": "cacher la variable %1",
      "add %1 to %2": "ajouter %1 \xE0 %2",
      "delete %1 of %2": "supprimer l'\xE9l\xE9ment %1 de %2",
      "delete all of %1": "supprimer tous les \xE9l\xE9ments de la liste %1",
      "if on edge, bounce": "rebondir si le bord est atteint",
      "insert %1 at %2 of %3": "ins\xE9rer %1 en position %2 de %3",
      "replace item %1 of %2 with %3": "remplacer l'\xE9l\xE9ment %1 de la liste %2 par %3",
      "show list %1": "montrer la liste %1",
      "hide list %1": "cacher la liste %1",
      "x position": "abscisse x",
      "y position": "ordonn\xE9e y",
      direction: "direction",
      "costume #": "costume #",
      "costume %1": "%1 du costume",
      size: "taille",
      "backdrop name": "nom de l'arri\xE8re-plan",
      "backdrop %1": "%1 de l'arri\xE8re-plan",
      "backdrop #": "arri\xE8re-plan #",
      volume: "volume",
      tempo: "tempo",
      "touching %1?": "touche le %1 ?",
      "touching color %1?": "couleur %1 touch\xE9e ?",
      "color %1 is touching %2?": "couleur %1 touche %2 ?",
      "distance to %1": "distance de %1",
      answer: "r\xE9ponse",
      "key %1 pressed?": "touche %1 press\xE9e ?",
      "mouse down?": "souris press\xE9e ?",
      "mouse x": "souris x",
      "mouse y": "souris y",
      "set drag mode %1": "mettre mode de glissement \xE0 %1",
      loudness: "volume sonore",
      "video %1 on %2": "vid\xE9o %1 sur %2",
      timer: "chronom\xE8tre",
      "%1 of %2": "%1 de %2",
      "current %1": "%1 actuelle",
      "days since 2000": "jours depuis 2000",
      username: "nom d'utilisateur",
      "%1 + %2": "%1 + %2",
      "%1 - %2": "%1 - %2",
      "%1 * %2": "%1 * %2",
      "%1 / %2": "%1 / %2",
      "pick random %1 to %2": "nombre al\xE9atoire entre %1 et %2",
      "%1 < %2": "%1 < %2",
      "%1 = %2": "%1 = %2",
      "%1 > %2": "%1 > %2",
      "%1 and %2": "%1 et %2",
      "%1 or %2": "%1 ou %2",
      "not %1": "non %1",
      "join %1 %2": "regrouper %1 et %2",
      "letter %1 of %2": "lettre %1 de %2",
      "length of %1": "longueur de %1",
      "%1 mod %2": "%1 modulo %2",
      "round %1": "arrondi de %1",
      "%1 contains %2?": "%1 contient %2 ?",
      "item %1 of %2": "\xE9l\xE9ment %1 de %2",
      "item # of %1 in %2": "\xE9l\xE9ment # de %1 dans %2",
      "turn %1 on": "allumer le moteur %1",
      "turn %1 off": "\xE9teindre le moteur %1",
      "set %1 power to %2": "mettre la puissance du moteur %1 \xE0 %2",
      "set %1 direction to %2": "mettre la direction du moteur %1 \xE0 %2",
      "when distance %1 %2": "quand la distance %1 %2",
      distance: "distance",
      "turn %1 on for %2 seconds": "allumer le moteur %1 pendant %2 secondes",
      "set light color to %1": "mettre la couleur de la lampe \xE0 %1",
      "play note %1 for %2 seconds": "jouer la note %1 pendant %2 secondes",
      "when tilted %1": "quand inclin\xE9 %1",
      "tilt angle %1": "angle d'inclinaison %1",
      else: "sinon",
      "user id": "id de l'utilisateur",
      "loud?": "fort ?"
    },
    go = {},
    ko = [],
    fo = ["hauteur", "st\xE9r\xE9o gauche/droite"],
    yo = ["autres scripts dans sprite"],
    bo = ["d\xE9finir"],
    wo = {
      Motion: "Mouvement",
      Looks: "Apparence",
      Sound: "Son",
      Events: "\xC9v\xE9nements",
      Control: "Contr\xF4le",
      Sensing: "Capteurs",
      Operators: "Op\xE9rateurs",
      Variables: "Variables",
      "My Blocks": "Mes Blocs"
    },
    vo = ["abs", "plancher", "plafond", "racine", "sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "e^", "10^"],
    zo = {
      "tourner gauche de %1 degrés": "turn @turnLeft %1 degrees",
      "tourner droite de %1 degrés": "turn @turnRight %1 degrees",
      "quand le drapeau vert pressé": "when @greenFlag clicked",
      fin: "end"
    },
    xo = "Fran\xE7ais",
    jo = 119,
    Lo = Object.freeze({
      commands: mo,
      dropdowns: go,
      ignorelt: ko,
      soundEffects: fo,
      osis: yo,
      define: bo,
      palette: wo,
      math: vo,
      aliases: zo,
      name: xo,
      percentTranslated: jo,
      default: {
        commands: mo,
        dropdowns: go,
        ignorelt: ko,
        soundEffects: fo,
        osis: yo,
        define: bo,
        palette: wo,
        math: vo,
        aliases: zo,
        name: xo,
        percentTranslated: jo
      }
    }),    
    zu = e(Lo);
  window.scratchblocks.loadLanguages({
    fr: zu
  });
  return {}
}();
