const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const data = [
    {
      _id: "5e5d20da84f63b0ec01d4766",
      title:
        "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      releaseDate: "2020-02-05",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      desc:
        "After her breakup with the Joker, Harley Quinn joins forces with singer Black Canary, assassin Huntress, and police detective Renee Montoya to help a young girl named Cassandra, who had a hit placed on her after she stole a rare diamond from crime lord Roman Sionis.",
      rating: 6.8
    },
    {
      _id: "5e5d20da84f63b0ec01d4765",
      title: "The Invisible Man",
      releaseDate: "2020-02-26",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
      desc:
        "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      rating: 7.6
    },
    {
      _id: "5e5d20da84f63b0ec01d476a",
      title: "Knives Out",
      releaseDate: "2019-11-27",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      desc:
        "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
      rating: 7.8
    },
    {
      _id: "5e5d20da84f63b0ec01d476b",
      title: "The Call of the Wild",
      releaseDate: "2020-02-19",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
      desc: "A sled dog struggles for survival in the wilds of the Yukon.",
      rating: 5.9
    },
    {
      _id: "5e5d20da84f63b0ec01d476f",
      title: "Kannum Kannum Kollaiyadithaal",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/iaTW57RK87v7ZrGkLKVofNH9YOr.jpg",
      desc:
        "Siddarth falls head-over-heels in love with Meera but things take a risky turn when they get into a messy situation with a dangerous man.",
      rating: 5
    },
    {
      _id: "5e5d20da84f63b0ec01d4770",
      title: "1917",
      releaseDate: "2019-12-10",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
      desc:
        "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      rating: 8
    },
    {
      _id: "5e5d20da84f63b0ec01d4774",
      title: "Jojo Rabbit",
      releaseDate: "2019-10-18",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
      desc:
        "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
      rating: 8.1
    },
    {
      _id: "5e5d20da84f63b0ec01d4775",
      title: "Dark Waters",
      releaseDate: "2019-11-22",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/67AVxH8SM5gDUoPFCGfeUg1TuEs.jpg",
      desc:
        "A tenacious attorney uncovers a dark secret that connects a growing number of unexplained deaths due to one of the world's largest corporations. In the process, he risks everything — his future, his family, and his own life — to expose the truth.",
      rating: 7.4
    },
    {
      _id: "5e5d20da84f63b0ec01d4779",
      title: "Brahms: The Boy II",
      releaseDate: "2020-02-20",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/tIpGQ9uuII7QVFF0GHCFTJFfXve.jpg",
      desc:
        "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
      rating: 5.7
    },
    {
      _id: "5e5d20da84f63b0ec01d477a",
      title: "Fantasy Island",
      releaseDate: "2020-02-12",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/yqZdRSC6wfX6AGtBPfGbpvmNKag.jpg",
      desc:
        "A group of contest winners arrive at an island hotel to live out their dreams, only to find themselves trapped in nightmare scenarios.",
      rating: 4.9
    },
    {
      _id: "5e5d20da84f63b0ec01d477f",
      title: "Zombieland: Double Tap",
      releaseDate: "2019-10-09",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg",
      desc:
        "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
      rating: 6.9
    },
    {
      _id: "5e5d20da84f63b0ec01d477e",
      title: "Portrait of a Lady on Fire",
      releaseDate: "2019-06-17",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/3NTEMlG5mQdIAlKDl3AJG0rX29Z.jpg",
      desc:
        "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
      rating: 8.3
    },
    {
      _id: "5e5d20da84f63b0ec01d4763",
      title: "Jumanji: The Next Level",
      releaseDate: "2019-12-04",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
      desc:
        "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
      rating: 6.7
    },
    {
      _id: "5e5d20da84f63b0ec01d4783",
      title: "Miss Fisher & the Crypt of Tears",
      releaseDate: "2020-02-27",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/xYvEK09A926LyARiRMlom7MDJk5.jpg",
      desc:
        "The theatrical movie spin-off of the ABC’s Miss Fisher’s Murder Mysteries will follow Essie Davis’ private detective as she embarks on a global adventure to find missing treasure, solve murders and break aviation records...\r After freeing a young Bedouin girl from her unjust imprisonment in Jerusalem, Phryne Fisher begins to unravel a decade-old mystery concerning priceless emeralds, ancient curses and the truth behind the suspicious disappearance of Shirin's forgotten tribe.",
      rating: 6
    },
    {
      _id: "5e5d20da84f63b0ec01d4762",
      title: "Sonic the Hedgehog",
      releaseDate: "2020-02-12",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      desc:
        "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      rating: 7.1
    },
    {
      _id: "5e5d20da84f63b0ec01d4784",
      title: "Bad Trip",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gsy5g3MBFrVdDewyBYuIEOh5f3e.jpg",
      desc:
        "Two best friends embark on a cross-country road trip pulling hidden-camera pranks on the unsuspecting public.",
      rating: 0
    },
    {
      _id: "5e5d20da84f63b0ec01d4768",
      title: "Guns Akimbo",
      releaseDate: "2020-02-27",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/yQqB884z0z6ke6xf24kK4Y1Ej75.jpg",
      desc:
        "An ordinary guy suddenly finds himself forced to fight a gladiator-like battle for a dark website that streams the violence for viewers. Miles must fight heavily armed Nix and also save his kidnapped ex-girlfriend.",
      rating: 6.3
    },
    {
      _id: "5e5d20da84f63b0ec01d4788",
      title: "Queen & Slim",
      releaseDate: "2019-11-27",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/coANk5hxXAAAygxIj69YRoyWMvz.jpg",
      desc:
        "While on a forgettable first date together in Ohio, a black man and a black woman are pulled over for a minor traffic infraction. The situation escalates, with sudden and tragic results, when the man kills the police officer in self-defense. Terrified and in fear for their lives, the man, a retail employee, and the woman, a criminal defense lawyer, are forced to go on the run. But the incident is captured on video and goes viral, and the couple unwittingly become a symbol of trauma, terror, grief and pain for people across the country.",
      rating: 7.4
    },
    {
      _id: "5e5d20da84f63b0ec01d476d",
      title: "Bombshell",
      releaseDate: "2019-12-13",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg",
      desc:
        "Bombshell is a revealing look inside the most powerful and controversial media empire of all time; and the explosive story of the women who brought down the infamous man who created it.",
      rating: 6.8
    },
    {
      _id: "5e5d20da84f63b0ec01d4789",
      title: "The Changin' Times of Ike White",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/xp3ZL9t4uEz506Cx0TPI7qQxzRk.jpg",
      desc:
        "Ike White was a musical prodigy who recorded a funk and soul classic album inside a Californian prison in 1974. Then he disappeared. 30 years later, director Dan Vernon tracked him down, only to find a trail of wives, lives and false identities that leave as many questions as answers.",
      rating: 6
    },
    {
      _id: "5e5d20da84f63b0ec01d4767",
      title: "Charlie's Angels",
      releaseDate: "2019-11-14",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg",
      desc:
        "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
      rating: 6.4
    },
    {
      _id: "5e5d20da84f63b0ec01d476c",
      title: "Spies in Disguise",
      releaseDate: "2019-12-24",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/30YacPAcxpNemhhwX0PVUl9pVA3.jpg",
      desc:
        "Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites. Lance is smooth, suave and debonair. Walter is… not. But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions. But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.",
      rating: 7.3
    },
    {
      _id: "5e5d20da84f63b0ec01d4772",
      title: "Onward",
      releaseDate: "2020-02-29",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/3VqDLgKLfNYSQYEGC5sjGhcPhn7.jpg",
      desc:
        "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
      rating: 7.8
    },
    {
      _id: "5e5d20da84f63b0ec01d4764",
      title: "Parasite",
      releaseDate: "2019-05-30",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      desc:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      rating: 8.6
    },
    {
      _id: "5e5d20da84f63b0ec01d4777",
      title: "The Gentlemen",
      releaseDate: "2020-01-01",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
      desc:
        "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
      rating: 7.9
    },
    {
      _id: "5e5d20da84f63b0ec01d4771",
      title: "Dragonheart: Vengeance",
      releaseDate: "2020-02-04",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/qZ1KAgfdeNbzrNYKW4BIRHdEBJ9.jpg",
      desc:
        "Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.",
      rating: 6.1
    },
    {
      _id: "5e5d20da84f63b0ec01d4769",
      title: "Joker",
      releaseDate: "2019-10-02",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      desc:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      rating: 8.2
    },
    {
      _id: "5e5d20da84f63b0ec01d477c",
      title: "Inception",
      releaseDate: "2010-07-15",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      desc:
        "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      rating: 8.3
    },
    {
      _id: "5e5d20da84f63b0ec01d476e",
      title: "Bad Boys for Life",
      releaseDate: "2020-01-15",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      desc:
        "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      rating: 6.3
    },
    {
      _id: "5e5d20da84f63b0ec01d4776",
      title: "Bloodshot",
      releaseDate: "2020-02-20",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      desc:
        "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      rating: 5.8
    },
    {
      _id: "5e5d20da84f63b0ec01d4781",
      title: "Adverse",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/A6fxm71Z5dgHQIx8pyVib5w98eJ.jpg",
      desc:
        "In order to save his sister, a ride-share driver must infiltrate a dangerous crime syndicate.",
      rating: 0
    },
    {
      _id: "5e5d20da84f63b0ec01d4773",
      title: "Dolittle",
      releaseDate: "2020-01-01",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5eNiYMu2GXCtNlDwMcJqKGVwyoX.jpg",
      desc:
        "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
      rating: 6.3
    },
    {
      _id: "5e5d20da84f63b0ec01d4786",
      title: "Digimon Adventure: Last Evolution Kizuna",
      releaseDate: "2020-02-21",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7bjTzPQUV2KVI0HdUjf1l8lUoLF.jpg",
      desc:
        "Tai is now a university student, living alone, working hard at school, and working every day, but with his future still undecided. Meanwhile, Matt and others continue to work on Digimon incidents and activities that help people with their partner Digimon. When an unprecedented phenomenon occurs, the DigiDestined discover that when they grow up, their relationship with their partner Digimon will come closer to an end.  As a countdown timer activates on the Digivice, they realize that the more they fight with their partner Digimon, the faster their bond breaks. Will they fight for others and lose their partner? The time to choose and decide is approaching fast. There is a short time before “chosen children” will become adults. This is the last adventure of Tai and Agumon.",
      rating: 10
    },
    {
      _id: "5e5d20da84f63b0ec01d477b",
      title: "Color Out of Space",
      releaseDate: "2020-01-24",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/vkwgzCBBiY3C1XEy0WakYfMOvnG.jpg",
      desc:
        "The Gardner family moves to a remote farmstead in rural New England to escape the hustle of the 21st century. They are busy adapting to their new life when a meteorite crashes into their front yard, melts into the earth, and infects both the land and the properties of space-time with a strange, otherworldly colour. To their horror, the family discovers this alien force is gradually mutating every life form that it touches—including them.",
      rating: 6.4
    },
    {
      _id: "5e5d20da84f63b0ec01d4778",
      title: "Villain",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/kc5AdZ0DJqrnAye8xGbXgtABh4E.jpg",
      desc:
        "After 10 years, Eddie Franks is out of prison and trying to stay on the straight and narrow, but his drug-mule brother, Sean has other ideas. Rival gangster brothers demand Sean repay his debt to them, causing Eddie to get tangled in the crossfire, and he ends up using his life savings to calling in favours with mobster friends to try and help.",
      rating: 7
    },
    {
      _id: "5e5d20da84f63b0ec01d4780",
      title: "Mortal",
      releaseDate: "2020-02-28",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/2kTwRyxuQ3eIutuI2gE8ygoJELY.jpg",
      desc:
        "Fantasy adventure origin story about a young man discovering he has God-like powers based on ancient Norwegian mythology.",
      rating: 10
    },
    {
      _id: "5e5d20da84f63b0ec01d477d",
      title: "Little Women",
      releaseDate: "2019-12-25",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg",
      desc:
        "Four sisters come of age in America in the aftermath of the Civil War.",
      rating: 8
    },
    {
      _id: "5e5d20da84f63b0ec01d4782",
      title: "The Night Clerk",
      releaseDate: "2020-02-21",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ji1JO9bZX3pQ15lhU96dj0gZO74.jpg",
      desc:
        "Hotel night clerk Bart Bromley is a highly intelligent young man on the Autism spectrum. When a woman is murdered during his shift, Bart becomes the prime suspect. As the police investigation closes in, Bart makes a personal connection with a beautiful guest named Andrea, but soon realises he must stop the real murderer before she becomes the next victim.",
      rating: 6.6
    },
    {
      _id: "5e5d20da84f63b0ec01d4785",
      title: "Thappad",
      releaseDate: "2020-02-27",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/nSOgDTClgfbIOBgv4Itf3GSEkWA.jpg",
      desc:
        "Amrita's life gets shattered into pieces when her husband slaps her at a party and this particular action raises several questions as to what her relationship stands for.",
      rating: 8.5
    },
    {
      _id: "5e5d20da84f63b0ec01d4787",
      title: "21 Bridges",
      releaseDate: "2019-10-24",
      img:
        "https://image.tmdb.org/t/p/w185_and_h278_bestv2/bSN9SysoRBMwJKNkfOlQlCw2YQO.jpg",
      desc:
        "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
      rating: 6.3
    }
  ];
  res.json(data);
});

module.exports = router;
