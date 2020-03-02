const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const router = express.Router();

// @route GET
// @desc Fetches all of the movie data from MongoDB
// @access Public
router.get(
  "/",
  /*auth (to be implemented), */ (req, res, next) => {
    const uri = require("../keys/keys").mongoURI;
    const dbName = "Cluster0";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    let data = [
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: 6.8
      },
      {
        _id: "5e59ae31621729770d484114",
        title: "Ad Astra",
        releaseDate: "2019-09-17",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        desc:
          "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        rating: 6
      },
      {
        _id: "5e59ae31621729770d484113",
        title: "Sonic the Hedgehog",
        releaseDate: "2020-02-12",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        desc:
          "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        rating: 7.1
      },
      {
        _id: "5e59ae31621729770d484115",
        title: "Parasite",
        releaseDate: "2019-05-30",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        desc:
          "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        rating: 8.6
      },
      {
        _id: "5e59ae31621729770d484116",
        title: "Jumanji: The Next Level",
        releaseDate: "2019-12-04",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
        desc:
          "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
        rating: 6.7
      },
      {
        _id: "5e59ae31621729770d484117",
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
        _id: "5e59ae31621729770d484118",
        title: "Frozen II",
        releaseDate: "2019-11-20",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/h6Wi81XNXCjTAcdstiCLRykN3Pa.jpg",
        desc:
          "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        rating: 7
      },
      {
        _id: "5e59ae31621729770d48411a",
        title: "Joker",
        releaseDate: "2019-10-02",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        desc:
          "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        rating: 8.2
      },
      {
        _id: "5e59ae31621729770d48411b",
        title: "Charlie's Angels",
        releaseDate: "2019-11-14",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/1DPUFG6QnGqzpvEaDEv7TaepycM.jpg",
        desc:
          "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",
        rating: 6.4
      },
      {
        _id: "5e59ae31621729770d484119",
        title: "The Call of the Wild",
        releaseDate: "2020-02-19",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
        desc: "A sled dog struggles for survival in the wilds of the Yukon.",
        rating: 6
      },
      {
        _id: "5e59ae31621729770d48411c",
        title: "Knives Out",
        releaseDate: "2019-11-27",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        desc:
          "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
        rating: 7.8
      },
      {
        _id: "5e59ae31621729770d484120",
        title: "Ip Man 4: The Finale",
        releaseDate: "2019-12-20",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/b5cz6BoyHrgBnhfDHOW5hXRWbln.jpg",
        desc:
          "Following the death of his wife, Ip Man travels to San Francisco to ease tensions between the local kung fu masters and his star student, Bruce Lee, while searching for a better future for his son.",
        rating: 6
      },
      {
        _id: "5e59ae31621729770d48411f",
        title: "The Invisible Man",
        releaseDate: "2020-02-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/4U7hpTK0XTQBKT5X60bKmJd05ha.jpg",
        desc:
          "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        rating: 7.8
      },
      {
        _id: "5e59ae31621729770d48411d",
        title: "Superman: Red Son",
        releaseDate: "2020-02-25",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/FVU9HZ87VfYMe5vIJvM3hFTG5i.jpg",
        desc:
          "Set in the thick of the Cold War, Red Son introduces us to a Superman who landed in the USSR during the 1950s and grows up to become a Soviet symbol that fights for the preservation of Stalin’s brand of communism.",
        rating: 8.4
      },
      {
        _id: "5e59ae31621729770d48411e",
        title: "Bad Boys for Life",
        releaseDate: "2020-01-15",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
        desc:
          "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
        rating: 6.4
      },
      {
        _id: "5e59ae31621729770d484121",
        title: "1917",
        releaseDate: "2019-12-10",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
        desc:
          "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
        rating: 8
      },
      {
        _id: "5e59ae31621729770d484124",
        title: "Cars",
        releaseDate: "2006-06-08",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",
        desc:
          "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
        rating: 6.7
      },
      {
        _id: "5e59ae31621729770d484122",
        title: "Avengers: Infinity War",
        releaseDate: "2018-04-25",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        desc:
          "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        rating: 8.3
      },
      {
        _id: "5e59ae31621729770d484123",
        title: "Terminator: Dark Fate",
        releaseDate: "2019-10-23",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        desc:
          "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
        rating: 6.2
      },
      {
        _id: "5e59ae31621729770d484125",
        title: "Dragonheart: Vengeance",
        releaseDate: "2020-02-04",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/qZ1KAgfdeNbzrNYKW4BIRHdEBJ9.jpg",
        desc:
          "Lukas, a young farmer whose family is killed by savage raiders in the countryside, sets out on an epic quest for revenge, forming an unlikely trio with a majestic dragon and a swashbuckling, sword-fighting mercenary, Darius.",
        rating: 6.3
      },
      {
        _id: "5e59ae31621729770d484126",
        title: "Dolittle",
        releaseDate: "2020-01-01",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5eNiYMu2GXCtNlDwMcJqKGVwyoX.jpg",
        desc:
          "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
        rating: 6.4
      },
      {
        _id: "5e59ae31621729770d48412a",
        title: "The Last Thing He Wanted",
        releaseDate: "2020-01-27",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gItrnbEbMBbUrdIkFz8kgS2gkt.jpg",
        desc:
          "At the turning point of the Iran-Contra affair, Elena McMahon, a fearless investigative journalist covering the 1984 US presidential campaign, puts herself in danger when she abandons her assigned task in order to fulfill the last wish of her ailing father, a mysterious man whose past activities she barely knows…",
        rating: 4.9
      },
      {
        _id: "5e59ae31621729770d484127",
        title: "Sathyam Paranja Viswasikkuvo ?",
        releaseDate: "2019-07-12",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/m9jo0V73FCo7FIyA5HGWUd3XZf9.jpg",
        desc:
          "Geetha, Suni's wife, bears the brunt of his negligent lifestyle and often quarrels with him over it. After witnessing a gruesome accident, Suni and his friends find their lives taking some really unexpected turns.",
        rating: 6
      },
      {
        _id: "5e59ae31621729770d484129",
        title: "Jojo Rabbit",
        releaseDate: "2019-10-18",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
        desc:
          "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
        rating: 8.1
      },
      {
        _id: "5e59ae31621729770d484128",
        title: "Ford v Ferrari",
        releaseDate: "2019-11-13",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
        desc:
          "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
        rating: 7.8
      },
      {
        _id: "5e59ae31621729770d48412d",
        title: "Once Upon a Time… in Hollywood",
        releaseDate: "2019-07-25",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        desc:
          "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
        rating: 7.5
      },
      {
        _id: "5e59ae31621729770d48412e",
        title: "Girls und Panzer das Finale: Part II",
        releaseDate: "2019-06-15",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/2UPHyMm8fE22yvTFVGu1LW2nVF0.jpg",
        desc: "Part 2 of 6 for the final chapter of Girls und Panzer series.",
        rating: 4.7
      },
      {
        _id: "5e59ae31621729770d48412c",
        title: "Bloodshot",
        releaseDate: "2020-02-20",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        desc:
          "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
        rating: 6.2
      },
      {
        _id: "5e59ae31621729770d48412b",
        title: "Bombshell",
        releaseDate: "2019-12-13",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg",
        desc:
          "Bombshell is a revealing look inside the most powerful and controversial media empire of all time; and the explosive story of the women who brought down the infamous man who created it.",
        rating: 6.8
      },
      {
        _id: "5e59ae31621729770d48412f",
        title: "Frozen",
        releaseDate: "2013-11-27",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/eFnGmj63QPUpK7QUWSOUhypIQOT.jpg",
        desc:
          "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
        rating: 7.3
      },
      {
        _id: "5e59ae31621729770d484131",
        title: "Midway",
        releaseDate: "2019-11-06",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/hj8pyoNnynGeJTAbl7jcLZO8Uhx.jpg",
        desc:
          "The story of the Battle of Midway, and the leaders and soldiers who used their instincts, fortitude and bravery to overcome massive odds.",
        rating: 6.7
      },
      {
        _id: "5e59ae31621729770d484130",
        title: "Star Wars: The Rise of Skywalker",
        releaseDate: "2019-12-18",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
        desc:
          "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
        rating: 6.5
      },
      {
        _id: "5e59ae31621729770d484132",
        title: "Brahms: The Boy II",
        releaseDate: "2020-02-20",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/tIpGQ9uuII7QVFF0GHCFTJFfXve.jpg",
        desc:
          "After a family moves into the Heelshire Mansion, their young son soon makes friends with a life-like doll called Brahms.",
        rating: 6
      },
      {
        _id: "5e59ae31621729770d484133",
        title: "Onward",
        releaseDate: "2020-02-29",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/3VqDLgKLfNYSQYEGC5sjGhcPhn7.jpg",
        desc:
          "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
        rating: 8
      },
      {
        _id: "5e59ae31621729770d484134",
        title: "Maleficent: Mistress of Evil",
        releaseDate: "2019-10-16",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg",
        desc:
          "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
        rating: 7.2
      },
      {
        _id: "5e59ae31621729770d484137",
        title: "Uncut Gems",
        releaseDate: "2019-11-14",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7gOozJufKJ9WjcIs38KEs08Iq3D.jpg",
        desc:
          "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
        rating: 7.3
      },
      {
        _id: "5e59ae31621729770d484136",
        title: "To All the Boys I've Loved Before",
        releaseDate: "2018-08-16",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
        desc:
          "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
        rating: 7.8
      },
      {
        _id: "5e59ae31621729770d484135",
        title: "Dark Waters",
        releaseDate: "2019-11-22",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/67AVxH8SM5gDUoPFCGfeUg1TuEs.jpg",
        desc:
          "A tenacious attorney uncovers a dark secret that connects a growing number of unexplained deaths due to one of the world's largest corporations. In the process, he risks everything — his future, his family, and his own life — to expose the truth.",
        rating: 7.4
      },
      {
        _id: "5e59ae31621729770d484139",
        title: "Riddled with Deceit: A Martha's Vineyard Mystery",
        releaseDate: "2020-02-23",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/zmAdeI7kiuoaPX7xIjWmpFHK3il.jpg",
        desc:
          "Former detective Jeff Jackson teams up with Dr. Zee Madieras to track down their friend's missing emerald brooch, a thief, and also... a murderer.",
        rating: 10
      },
      {
        _id: "5e59ae31621729770d484138",
        title: "Nymphomaniac: Vol. I",
        releaseDate: "2013-12-25",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/49HMMZPVJcnUwe2QmVzBfxyLAY2.jpg",
        desc:
          "A man named Seligman finds a fainted wounded woman in an alley and he brings her home. She tells him that her name is Joe and that she is nymphomaniac. Joe tells her life and sexual experiences with hundreds of men since she was a young teenager while Seligman tells about his hobbies, such as fly fishing, reading about Fibonacci numbers or listening to organ music.",
        rating: 6.9
      }
    ];
    // (async function() {
    //   try {
    //     await client.connect();
    //     console.log("Connected correctly to server");

    //     const db = client.db(dbName);
    //     db.collection("movies")
    //       .find()
    //       .toArray((e, d) => {
    //         console.log(d.length);
    //         res.json(d);
    //       });
    //   } catch (err) {
    //     console.log(err.stack);
    //   }
    //   client.close();
    //   console.log("Ended");
    // })();
    res.json(data);
  }
);

module.exports = router;
