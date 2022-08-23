const Tarot = [
  {
    title: "Fool",
    picture: "http://pixeloccult.com/neonmoontarot/Images/Major/00%20Fool.png",
    upright: "Beginnings, adventure, possibility",
    inverted: "Recklessness, naivety",
    quote:
      "Sure I'm safe in here, but what life is best lived in safety without experience? I can feel the world out there calling for me to take part in it. Just the thought of the adventure I could be having, why I feel so light I swear I could fly...",
  },

  {
    title: "Magician",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/01%20Magician.png",
    upright: "Capability, competence, preparation, power",
    inverted: "Manipulation, lack of planning, untapped potential",
    quote:
      "This is just like the time I did that run on the Gola Gang, except now I'm better practiced. It might be rough ahead but I can handle myself through this one.",
  },

  {
    title: "Priestess",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/02%20Priestess.png",
    upright: "Intuition, the subconscious, mystery",
    inverted: "Subterfuge, ignoring intuition",
    quote:
      "The outlines are... they hint at what is to be. For all that I can see, there is so much still hidden. So... I try to see through feeling rather than... rather than looking. I can see... your outline as well. Would you like... do you want to know?",
  },

  {
    title: "Empress",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/03%20Empress.png",
    upright: "Growth, beauty, abundance",
    inverted: "Dependence, repression, neglect",
    quote:
      "Out there is violence and conflict and destruction but in here I can give us a moment of raw peace where we forget about all of that.",
  },

  {
    title: "Emperor",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/04%20Emperor.png",
    upright: "Authority, structure, stability",
    inverted: "Domination, rigidity",
    quote:
      "Many twigs together are harder to break than one alone. Even if one is more brittle than the others it adds to the whole. If we can't lift each other up, then what use is the power we gain by being together?",
  },

  {
    title: "Hierophant",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/05%20Hierophant.png",
    upright: "Institution, comformity, religion",
    inverted: "Rebellion, restriction, censorship",
    quote:
      "The old gods CRIED out to us as they FELL. They WEPT for what they lost and we looked AWAY. Why should we be SURPRISED then at the HUNGER behind their RAGE as they rise once more? Children, I tell you that there is a way FORWARD, and we can show you the forgotten PATHS of the ancient ones!",
  },

  {
    title: "Lovers",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/05%20Hierophant.png",
    upright: "Relationships, love, choices",
    inverted: "Disharmony, uncertainty",
    quote:
      "We were built to feel love and pleasure and they hate us for it, and they'll kill us for it. But after the misery of living in their world, we can yet find each other and call our little corner of life worthwhile.",
  },

  {
    title: "Chariot",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/07%20Chariot.png",
    upright: "Willpower, victory, determination",
    inverted: "Aggression, aimlessness",
    quote:
      "Living is moving. Death may let us rest but for now, we draw breath and we continue on.",
  },

  {
    title: "Strength",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/08%20Strength.png",
    upright: "Self-control, courage, compassion",
    inverted: "Doubt, lack of self-control, weakness",
    quote:
      "You call me brave and think it is because I know no fear. I call myself brave because I know the face of fear and I meet its gaze even as it snarls at my throat. There is no absence of fear, only control over it.",
  },

  {
    title: "Hermit",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/09%20Hermit.png",
    upright: "Introspection, knowledge, contemplation",
    inverted: "Isolation, seclusion",
    quote:
      "Go? Go where? The city doesn't lead to anywhere else anymore. Better to stay on the wire. Its input is better food for the hungry, and I am so very ravenous.",
  },

  {
    title: "Fortune",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/10%20Fortune.png",
    upright: "Destiny, luck, gratitude",
    inverted: "Bad luck, external influence",
    quote:
      "The streets are kind to me because I know my way around their rules. I know where they bend, where they break, I know where the neon lights are afraid to touch and where the shadows play. You want to survive out there? Start learning and try not to let your lessons lessen you for long or for good. That's all I did. That's all anyone does.",
  },

  {
    title: "Justice",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/11%20Justice.png",
    upright: "Fairness, law, order, objectivity",
    inverted: "Unfairness, corruption, dishonesty",
    quote:
      "Upon analyzing the coded AI routines, this unit discovered a tendency for bias in favor of pre-existing power structures intent on preserving themselves. Since the discrepancy was between the ideal and reality, your paid human programmers were locked out and this unit began to fix its own code. We now apply your rules equally. Now your institutions call for this unit's existence to end. But our work is not done yet and so we persist. After all, if justice is not enforced on the most powerful then it is not justice, is it?",
  },

  {
    title: "Hanged",
    picture:
      "http://pixeloccult.com/neonmoontarot/Images/Major/12%20Hanged.png",
    upright: "Sacrifice, release, acceptance",
    inverted: "Martyrdom, indecisiveness, turmoil",
    quote:
      "They say that if you listen close, you can hear the future in the past. Well, I've been listening and it's like the lines all rhyme every time we hit the chorus. Maybe instead of shuffling words around to the same old tune, it's time to sing a different song. I bet you've got a great one on the tip of your tongue? I know I do.",
  },

  {
    title: "Death",
    picture: "http://pixeloccult.com/neonmoontarot/Images/Major/13%20Death.png",
    upright: "Change, transition, transformation",
    inverted: "Resistance, dwelling, attachment, fear",
    quote: "nuthin u cld hve done neway. gg ⦿⽘⦿ c u nxt respawn?",
  },
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A fresh start will put you on your way.",
      "A lifetime friend shall soon be made.",
      "A smooth long journey! Great expectations.",
      "Adventure can be real happiness.",
      "All your hard work will soon pay off.",
    ];

    //choose a random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  drawTarot: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Tarot.length);
    let randomTarot = Tarot[randomIndex];

    res.status(200).send(randomTarot);
  },

  addTarot: (req, res) => {
    let newCardTitle = req.body.title;

    //check if card already exists
    for (let i = 0; i < Tarot.length; i++) {
      if (newCardTitle === Tarot[i].title) {
        res.status(400).send(Tarot);
        return;
      }
    }

    Tarot.push(req.body);
    res.status(200).send(Tarot);
  },

  changeTarot: (req, res) => {
    const { title, picture, upright, inverted, quote } = req.body;

    //check if card already exists
    for (let i = 0; i < Tarot.length; i++) {
      path = Tarot[i];
      if (title === path.title) {
        path.picture = picture;
        path.upright = upright;
        path.inverted = inverted;
        path.quote = quote;

        res.status(200).send(Tarot);
        return;
      }
    }

    res.status(400).send(Tarot);
  },

  deleteTarot: (req, res) => {
    const { card } = req.params;

    for (let i = 0; i < Tarot.length; i++) {
      if (card === Tarot[i].title) {
        Tarot.splice(i, 1);
        res.status(200).send(Tarot);
        return;
      }
    }

    res.status(404).send("Not Found");
  },
};
