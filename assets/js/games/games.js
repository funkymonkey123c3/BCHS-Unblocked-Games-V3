const gamesArr = [
  /*{
    filter: [`shoot`, `mp`],
    link: `sample`,
    imgsrc: `rooftop.jpg`,
    name: `Sample Game`,
    developer: `Sample Game Creator`,
    desc: `Sample Description`,
    controls: [`←/→ Arrow Keys: Move horizontally`]
  },*/
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers`,
    imgsrc: `rooftop.jpg`,
    name: `Rooftop Snipers`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers-2`,
    imgsrc: `rooftop-snipers-2.jpg`,
    name: `Rooftop Snipers 2`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers 2 is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`mp`, `misc`],
    link: `uno-online`,
    imgsrc: `uno-online.png`,
    name: `Uno Online`,
    developer: `Merle Robbins`,
    desc: `UNO Online is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.`,
    controls: [`Mouse`]
  },
  {
    filter: ['mp'],
    link: `just-fall-lol`,
    imgsrc: `just-fall-lol.png`,
    name: `Just Fall.lol`,
    developer: `Unknown`,
    desc: `Play the fun Fall Ultimate Knockout Guys game directly from your PC without download, just in your browser! Try out the penguin hexagon Fall Multiplayer Game.`,
    controls: [`Keyboard`]
  },
  {
    filter: [`mp`],
    link: `tube-jumpers`,
    imgsrc: `tj.jpg`,
    name: `Tube Jumpers`,
    developer: `Pat Eichler`,
    desc: `Tube Jumpers is a local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
    controls: [`W/I: Jump`]
  },
  {
    filter: [`plat`],
    link: `slope`,
    imgsrc: `slope.jpg`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
    controls: [`AD/QE/Arrow Keys: Control movement`]
  },
  {
    filter: [`mp`, `shoot`, `fight`],
    link: `getaway-shootout`,
    imgsrc: `getaway-shootout.jpg`,
    name: `Getaway Shootout`,
    developer: `Pat Eichler`,
    desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
    controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
  },
  {
    filter: [`mp`],
    link: `eaglercraft`,
    imgsrc: `eaglercraft.png`,
    name: `Eaglercraft`,
    developer: `LAX1DUDE`,
    desc: `Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. You can join real Minecraft 1.5.2 servers with it through a custom proxy based on Bungeecord.
    
    If your keyboard inputs aren't registering, try refreshing the page.

    Want to join more servers? You can find supported servers here: https://g.eags.us/eaglercraft/servers`,
    controls: [`Controls can be modified ingame`]
  },
  {
    filter: [`mp`],
    link: `craft-mine`,
    imgsrc: `craft-mine.png`,
    name: `Craft Mine`,
    developer: `Markus Alexej Persson`,
    desc: `Craft Mine is a minecraft themed terraria clone.`,
    controls: [`Controls can be modified ingame`]
  },
  {
    filter: [`misc`],
    link: `crossy-road`,
    imgsrc: `crossy-road.jpg`,
    name: `Crossy Road`,
    developer: `Matt Hall`,
    desc: `The objective of Crossy Road is to move a character through an endless path of static and moving obstacles as far as possible without dying.`,
    controls: [`Arrow Keys/WASD/Mouse`]
  },
  {
    filter: [`misc`],
    link: `cut-the-rope`,
    imgsrc: `cut-the-rope.png`,
    name: `Cut The Rope`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: [`misc`],
    link: `cut-the-rope-holiday`,
    imgsrc: `cut-the-rope-holiday.png`,
    name: `Cut The Rope: Holiday`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: [`misc`],
    link: `cut-the-rope-time-travel`,
    imgsrc: `cut-the-rope-time-travel.png`,
    name: `Cut The Rope: Time Travel`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `2048`,
    imgsrc: `2048.png`,
    name: `2048`,
    developer: `Gabriele Cirulli`,
    desc: `2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `doge-2048`,
    imgsrc: `doge-2048.png`,
    name: `Doge 2048`,
    developer: `Gabriele Cirulli`,
    desc: `Doge 2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same doge touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`emu`],
    link: `emulatorjs`,
    imgsrc: `ejs.png`,
    name: `EmulatorJS`,
    developer: `ethanobrien`,
    desc: `The original decompilation of emulatorjs. Retroarch in your browser! Upload your own ROMS to play!
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem`,
    imgsrc: `gunmayhem.jpg`,
    name: `Gun Mayhem`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem is an extremely interesting flash format shooting game developed by Kevin Gu. The game is designed with 10 maps starting from prehistoric context to modern times. The player's task in this game is to destroy all enemies by shooting them down! Very simple, isn't it! Let's start the adventure now!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-2`,
    imgsrc: `gunmayhem2.jpg`,
    name: `Gun Mayhem 2`,
    developer: `Kevin Gu`,
    desc: `More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once! 
    Gun Mayhem returns with brand new maps, and much more:
    - New campaign with 16 progressively challenging missions
    - Challenge levels to test your skills
    - 7 custom game modes
    - New guns, perks, and customization options`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-redux`,
    imgsrc: `gunmayhemredux.jpg`,
    name: `Gun Mayhem Redux`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem Redux which is the brand new chapter of Gun Mayhem, is now available. This chapter is little bit different compared to other chapters. For instance, game characters and war maps is minimized little bit to have a better view and game play but this doesn't cause the loose of excitement of the this superb game. 
    In this chapter, tens of brand new weapons will be awaiting you. Even, you will have a chance to war by using primitive weapons. The war resumes in the arena with the superior war maps and weapons and entertaining chapters!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`plat`],
    link: `run-3`,
    imgsrc: `run3.jpg`,
    name: `Run 3`,
    developer: `Player03`,
    desc: `There’s a whole new galaxy waiting to be explored! You can play Run 3 in the Explore Mode and the Infinite Mode. To add more levels to your Galaxy Map, choose the Explore Mode. The Runner will encounter lots of new tunnels and areas, and may bump into some friends along the way!
    If the game is stuck on the loading screen and not loading, try disabling your adblocker.`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Reset`, `P: Pause`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `wordle-unlimited`,
    imgsrc: `wordle.png`,
    name: `Wordle +`,
    developer: `Josh Wardle`,
    desc: `Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!`,
    controls: [`Type to interact`]
  },
  {
    filter: [`puzzle`],
    link: `tetris`,
    imgsrc: `tetris.jpg`,
    name: `Tetris`,
    developer: `Kyle Shanks`,
    desc: `Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the rights in the late 1980s.`,
    controls: [`←/→ Arrow Keys: Move horizontally`, `↑: Rotate piece`, `↓: Soft Drop`, `P: Pause`, `Shift: Switch blocks`, `Space: Hard drop`, `R: Reset`]
  },
  {
    filter: [`sport`],
    link: `retro-bowl`,
    imgsrc: `retrobowl.jpg`,
    name: `Retro Bowl`,
    developer: `New Star Games`,
    desc: `Retro Bowl is an American style football game created by New Star Games. Are you ready to manage your dream team into victory? Be the boss of your NFL franchise, expand your roster, take care of your press duties to keep your team and fans happy.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Drag to throw`]
  },
  {
    filter: [`shoot`, `flash`],
    link: `zombocalypse`,
    imgsrc: `zombocalypse.jpg`,
    name: `Zombocalypse`,
    developer: `John Funtanilla`,
    desc: `Only you, and a whole lot of hungry hungry zombies. Fortunately, you get constant airdrops to deliver fresh weapons and med kits. Now, if you can only live long enough to earn some achievements and unlock some bigger guns. When things get really hairy, call in an airstrike!`,
    controls: [`AD/← →: Control movement`, `S/↓: Pick up items`, `W/↑: Call airstrike`, `Space: Attack`, `Shift: Pause game`]
  },
  {
    filter: [`plat`],
    link: `super-mario-64`,
    imgsrc: `sm64.jpeg`,
    name: `Super Mario 64`,
    developer: `Nintendo, ported by sm64js`,
    desc: `Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first Super Mario game to feature 3D gameplay. It was developed by Nintendo EAD and published by Nintendo, now ported over to the web thanks to the folks over at sm64js!
    
    Note: The first key is the one you press, the second key is what it does in game (Ex: in game, it will say to press A. You would press "X" to achieve that.`,
    controls: [`Arrow Keys: Control movement`, `Enter: Start`, `X: A`, `C: B`, `Q: L`, `Space: Z`, `C-Stick: WASD`]
  },
  {
    filter: [`drive`],
    link: `madalin-stunt-cars-2`,
    imgsrc: `msc2.jpg`,
    name: `Madalin Stunt Cars 2`,
    developer: `Madalin Games`,
    desc: `Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps.

    Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2.
    
    Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Shift: Nitrous`, `R: Respawn`, `T: Open map`, `C: Change camera`]
  },
  {
    filter: [`drive`],
    link: `car-simulator`,
    imgsrc: `car-simulator.png`,
    name: `Car Simulator`,
    developer: `Unknown`,
    desc: `Unknown`,
    controls: [`WASD/Arrow Keys`]
  },
  {
    filter: [`misc`],
    link: `core-ball`,
    imgsrc: `core-ball.png`,
    name: `Core Ball`,
    developer: `Tasty Pill`,
    desc: `Core Ball is a simple tapping strategy game fun for users of for all ages. Shoot arrows at the spinning circle target but don't touch the other arrows. Use the right strategy to improve your accuracy and hit the bullseye on the circle as it twists every time. The more arrows you shoot, the harder it is to be accurate and hit the bullseye. Can you beat this impossible rotating wheel? What level can you get to? Download right now and spin the wheel to find out.`,
    controls: [`Mouse`]
  },
  {
    filter: [`drive`],
    link: `cluster-truck`,
    imgsrc: `cluster-truck.png`,
    name: `Cluster Truck`,
    developer: `Wilhelm Nylund`,
    desc: `Clustertruck is a new kind of platformer on top of a speeding highway! Use agility and acrobatics through insane levels in a game of "the floor is lava" on top of unpredictable, speeding trucks! The game only gets harder when dangers such as swinging hammers, lasers and flamethrowers are added!`,
    controls: [`WASD/Arrow Keys/Space`]
  },
  {
    filter: [`shoot`],
    link: `superhot`,
    imgsrc: `superhot.jpg`,
    name: `SUPERHOT`,
    developer: `SUPERHOT Team`,
    desc: `No regenerating health bars. No conveniently placed ammo drops. 
    It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Space: Jump`, `Left Click: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `my-friend-pedro`,
    imgsrc: `mfp.jpg`,
    name: `My Friend Pedro`,
    developer: `Dead Toast Entertainment`,
    desc: `An action packed slow motion face-blasting-simulator about friendship and imagination.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Shoot`, `Shift/Space: Slow down time`]
  },
  {
    filter: [`misc`],
    link: `cookie-clicker`,
    imgsrc: `cookie-clicker.jpg`,
    name: `Cookie Clicker`,
    developer: `Julien "Orteil" Thiennot`,
    desc: `Cookie Clicker is a game about making an absurd amount of cookies. To help you in this endeavor, you will recruit a wide variety of helpful cookie makers, like friendly Grandmas, Farms, Factories, and otherworldly Portals.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `doodle-jump`,
    imgsrc: `doodle.jpg`,
    name: `Doodle Jump`,
    developer: `Lima Sky`,
    desc: `Doodle Jump is a fun and cute game. Your must help our alien jump as high as possible onto a range of different hand-drawn platforms. This game is an endless game, so you must simply keep jumping and try to register as high a score as you possibly can!`,
    controls: [`Arrow Keys: Control movement`, `Space: Start/Restart game`]
  },
  {
    filter: [`misc`],
    link: `snake`,
    imgsrc: `snake.jpg`,
    name: `Snake`,
    developer: `Google`,
    desc: `How long can you last before your tail becomes your dinner? Take the challenge and eat all those apples! Be careful not to hit the wall!`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `solitaire`,
    imgsrc: `solitaire.png`,
    name: `Solitaire`,
    developer: `Google`,
    desc: `Patience, card solitaire or just solitaire, is a genre of card games that can be played by a single player. Patience games can also be played in a head-to-head fashion with the winner selected by a scoring scheme.`,
    controls: [`Click to play`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `a-dark-room`,
    imgsrc: `adr.png`,
    name: `A Dark Room`,
    developer: `Doublespeak Games`,
    desc: `A Dark Room is a minimalist text-based adventure RPG game right in your browser! How far will you go, player?`,
    controls: [`Click to play`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `align-4`,
    imgsrc: `align4.jpg`,
    name: `Align 4`,
    developer: `Will Boyd`,
    desc: `Align 4 is a two-player connection board game just like Connect 4, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. 
    The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The first player can always win by playing the right moves.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `pacman`,
    imgsrc: `pacman.jpg`,
    name: `Pac-Man`,
    developer: `Bandai Namco, remade by Shaun Williams`,
    desc: `Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment.`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `meat-boy`,
    imgsrc: `meatboy.jpg`,
    name: `Meat Boy`,
    developer: `Team Meat`,
    desc: `This is NOT Super Meat Boy!

    Its simply the flash prototype that Super Meat Boy was based off of.
    SMB, will play very differently and is 100% new.. what im saying is if you even slightly enjoy the prototype, you will LOVE SMB!
    
    For more info on Super Meat Boy check out supermeatboy.com
    
    -Team Meat`,
    controls: [`←/→: Control movement`, `Space: Jump`]
  },
  {
    filter: [`misc`],
    link: `fnf`,
    imgsrc: `fnf.png`,
    name: `Friday Night Funkin`,
    developer: `ninjamuffin99`,
    desc: `Friday Night Funkin' is an open-source donationware rhythm game first released in 2020 for a game jam. 
    The game was developed by a team of four Newgrounds users, Cameron "Ninjamuffin99" Taylor, David "PhantomArcade" Brown, Isaac "Kawai Sprite" Garcia, and evilsk8r.`,
    controls: [`WASD/Arrow Keys: Interact`, `+/-: Change volume`]
  },
  {
    filter: [`misc`],
    link: `hackertyper`,
    imgsrc: `hackertyper.jpg`,
    name: `Hacker Typer`,
    developer: `David M.`,
    desc: `Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. 
    Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).`,
    controls: [`Click or type to play`]
  },
  {
    filter: [`plat`, `flash`],
    link: `fancy-pants-adventures`,
    imgsrc: `fancy-pants-adventures.png`,
    name: `Fancy Pants Adventures`,
    developer: `DrNeroCF`,
    desc: `Run Fast, Run Fancy.`,
    controls: [`←/→: Control movement`, `↓: Duck/roll`, `↑: Enter door`, `S: Jump`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war`,
    imgsrc: `age-of-war.jpg`,
    name: `Age of War`,
    developer: `Louissi`,
    desc: `Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy.
    In this game, you start at the cavern men's age, then evolve! There is a total of 5 ages, each with its units and turrets. I hope you have fun with this game! Sooo many hours of hard work.`,
    controls: [`Click to play`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war-2`,
    imgsrc: `aow2.png`,
    name: `Age of War 2`,
    developer: `Louissi`,
    desc: `A terrible struggle is about to take place that will determine the future of your people. Only one possible solution to this conflict: to conquer or die! 
    Establish your strategy carefully, finding the right balance between attack and defense, and use your collected experience to upgrade your troops. 
    Age of War 2 is a great strategy / defense game, with easy handling but vast possibilities.`,
    controls: [`Click to play`]
  },
  {
    filter: [`mp`, `sport`,'fight'],
    link: `basket-random`,
    imgsrc: `basket-random.jpg`,
    name: `Basket Random`,
    developer: `RHM Interactive`,
    desc: `In Basket Random game, try to score a basket by using only one key with different variations from each other! Changing fields, changing players and changing balls do not surprise you! You can be the best of them all. You can play Basket Random game either against CPU or against a friend in 2 player gaming mode!.`,
    controls: [`W/UP ARROW`]
  },
  {
    filter: [`mp`, `sport`,'fight'],
    link: `volley-random`,
    imgsrc: `volley-random.jpg`,
    name: `Volley Random`,
    developer: `RHM Interactive`,
    desc: `There is a Volleyball experience unlike any before. With fun ragdoll physics and a variety of variations, each match will be different. The playing court, ball and players may change.`,
    controls: [`W/UP ARROW`]
  },
  {
    filter: ['misc'],
    link: `elastic-face`,
    imgsrc: `elastic-face.jpg`,
    name: `Elastic Face`,
    developer: `Adult Swim Games`,
    desc: 'Elastic Man is an entertaining arcade game in which you can be free to play with an elastic face. Drag and pinch his face to relax and reduce stress.',
    controls: ['Mouse']
  },
  {
    filter: ['misc'],
    link: `subway-surfers`,
    imgsrc: `subway-surfers.png`,
    name: `Subway Surfers`,
    developer: `Kiloo Gmaes/SYBO`,
    desc: 'Single player mobile gaming app and website developed by Kiloo. The aim of the game is to outrun a train inspector while dodging oncoming trains, barriers and other objects. Collecting coins on the way gives players advantages such as hover boards and high scores.',
    controls: ['Mouse/Arrow Keys']
  },
  {
    filter: ['flash', 'drive'],
    link: `earn-to-die-2012-part-2`,
    imgsrc: `earn-to-die-2012-part-2.png`,
    name: `Earn to Die 2012 Part 2`,
    developer: `Not Doppler`,
    desc: `Drive your car through a zombie apocalypse! Earn to Die 2 is set in a world where the struggle for survival is told through the eyes of only a few people who have survived the zombie apocalypse. Hordes of zombies have taken over the world. One of the last survivors is the player.`,
    controls: [`Arrow Keys/Mouse`]
  },
  {
    filter: [`puzzle`],
    link: `bad-ice-cream`,
    imgsrc: `bad-ice-cream.jpg`,
    name: `Bad Ice Cream`,
    developer: `Nitrome Ltd`,
    desc: `Bad Ice Cream is a fun puzzle game where you play as an ice cream in a maze of fruit and bad guys. The challenge is to get all the fruit before you get caught by an enemy! Thankfully you can shoot walls into existence to help you trap enemies, or hide from them.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`flash`,'misc'],
    link: `big-red-button`,
    imgsrc: `big-red-button.png`,
    name: `Big Red Button`,
    developer: `Big Red Button Entertainment`,
    desc: `Big Red Button is the game of mutually assured destruction. Each player leads a nation armed with an apocalyptic arsenal, a hunger for domination, and a finger on the button. The doomsday clock is set to midnight: only one can win, but everyone can lose`,
    controls: [`Mouse`]
  },
  {
    filter: [`puzzle`],
    link: `bad-ice-cream-3`,
    imgsrc: `bad-ice-cream-3.png`,
    name: `Bad Ice Cream 3`,
    developer: `Nitrome Ltd`,
    desc: `Bad Ice Cream 3 is a fun puzzle game where you play as an ice cream in a maze of fruit and bad guys. The challenge is to get all the fruit before you get caught by an enemy! Thankfully you can shoot walls into existence to help you trap enemies, or hide from them.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`misc`],
    link: `hextris`,
    imgsrc: `hextris.png`,
    name: `Hextris`,
    developer: `David King`,
    desc: `An addictive puzzle game inspired by Tetris.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`plat`, `mp`],
    link: `fbwg1`,
    imgsrc: `fbwg1.jpg`,
    name: `Fireboy and Watergirl 1`,
    developer: `Oslo Albet`,
    desc: `Fireboy and Watergirl 1 is the first cooperative platformer game in the Fireboy and Watergirl series. In this adventure, you explore 32 levels of the Forest Temple, controlling both the Fireboy and Watergirl characters through various puzzles.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`fight`, `mp`, 'shoot'],
    link: `1v1-lol`,
    imgsrc: `1v1-lol.png`,
    name: `1v1.lol`,
    developer: `Unknown`,
    desc: `Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!`,
    controls: [`Keyboard/Mouse/Controller`]
  },
  {
    filter: [`plat`],
    link: `tunnelrush`,
    imgsrc: `tunnelrush.jpg`,
    name: `Tunnel Rush`,
    developer: `Deer Cat`,
    desc: `Tunnel Rush online is the ultimate 3D single-player experience. Blaze your way through caves and tunnels. Each Tunnel Rush level drops you into a whirling kaleidoscope of hazards and 3D tunnels. Play Tunnel Rush to dodge barriers using just your wits and your keyboard.`,
    controls: [`AD/Arrow Keys: Control movement`, `Space: Pause/Restart`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life`,
    imgsrc: `ducklife.png`,
    name: `Duck Life`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-2`,
    imgsrc: `ducklife2.png`,
    name: `Duck Life 2`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-3`,
    imgsrc: `ducklife3.png`,
    name: `Duck Life 3`,
    developer: `Wix Games`,
    desc: `The latest installment of the Duck Life franchise is here! Train your little duck into a lean, mean, racing machine. Practice running, swimming, flying, and climbing to work your way to the top. 
    Compete in different competitions, chow down on some seed to gain up energy, then see if your duck can come out on top!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-4`,
    imgsrc: `ducklife4.png`,
    name: `Duck Life 4`,
    developer: `Wix Games`,
    desc: `Ducklife 4 is here, so get ready to race your ducks! In the near future, genetically engineered ducks have been banned from the races. It's up to you to make an elite duck who is capable of winning any race!
    Go through vigorous training sequences to build up speed and agility! Do you have the skills to win against all the other ducks? Good luck!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`mp`, `puzzle`],
    link: `among-us`,
    imgsrc: `among-us.jpg`,
    name: `Among Us (Fan Made)`,
    developer: `1tim`,
    desc: `Among Us is a multiplayer game where 10 players get dropped into an alien spaceship, sky headquarters or planet base, where each player is designated with a private role of either a “crewmate” and an “impostor.” This is an online multiplayer social deduction game, and a player can either be a crewmate or an imposter`,
    controls: [`Arrow Keys/WASD/Mouse`]
  },
  {
    filter: [`misc`],
    link: `ball-blast`,
    imgsrc: `ball-blast.png`,
    name: `Ball Blast`,
    developer: `fluci2010`,
    desc: `UNOFFICIAL GAME: Ball Blast is the best ball shooting game you have never seen before. It has the mix fun of shooting and dodge. Your task is to shoot things in your sight and break them as many as you can. Keep moving and avoid hitting the drops. The more you break, the more you earn.`,
    controls: [`Mouse`]
  },
  {
    filter: [`sport`,'mp','fight'],
    link: `soccer-random`,
    imgsrc: `soccer-random.png`,
    name: `Soccer Random`,
    developer: `RHM Interactive`,
    desc: `ootball is here with its most funny and random way. In Soccer Random game, try to score a goal by using only one key with different variations from each other! Sometimes you will play on a iced field or you will play on a beach. The goal of the game is, to score five goals and win the game even the balls, players or goal posts change! You can play Soccer Random game either against CPU or against a friend in 2 player gaming mode! Let the soccer match begin!`,
    controls: [`W/Up Arrow`]
  },
  {
    filter: [`misc`],
    link: `rolly-vortex`,
    imgsrc: `rolly-vortex.jpg`,
    name: `Rolly Vortex`,
    developer: `Voodoo`,
    desc: `Roll quickly, be alert, manage your way through the obstacles, score high and challenge friends`,
    controls: [`Mouse/Arrow Keys`]
  },
  {
    filter: [`misc`, `fight`],
    link: `sans-fight`,
    imgsrc: `sans-fight.jpg`,
    name: `Sans Fight`,
    developer: `Jcw87`,
    desc: `Undertale Sans Fight Clone; "do you wanna have a bad time? 'cause if you visit this page... you are REALLY not going to like what happens next."`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`plat`, `puzzle`, `flash`],
    link: `bloxorz`,
    imgsrc: `bloxorz.jpg`,
    name: `Bloxorz`,
    developer: `Damian Clarke`,
    desc: `Bloxorz is a brain twisting puzzle game of rolling blocks and switching bridges. You'll be rolling round in circles over the course of the 33 levels.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars`,
    imgsrc: `raftwars.jpg`,
    name: `Raft Wars`,
    developer: `Martijn Kunst`,
    desc: `Fight against the pirates in the raft wars and win the treasure in the game. The two heroes have cannons which can shoot very far. However this requires a very accurate shooting. Aim well and hit all the pirates in order to win the game.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars2`,
    imgsrc: `raftwars2.jpg`,
    name: `Raft Wars 2`,
    developer: `Martijn Kunst`,
    desc: `Fight in the raft wars and hit all the targets to sabotage the business of the complex and get back the treasure that is buried in the ground. Defeat all enemies and pass all levels in the game. In the end you can submit your game score.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift`,
    imgsrc: `shift.png`,
    name: `Shift`,
    developer: `Antony Lavelle`,
    desc: `Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift-2`,
    imgsrc: `shift-2.png`,
    name: `Shift 2`,
    developer: `Antony Lavelle`,
    desc: `The sequel to The Shift! Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer, part 2!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `portal-flash`,
    imgsrc: `portal-flash.jpg`,
    name: `Portal Flash`,
    developer: `We Create Stuff`,
    desc: `Portal: The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, 
    in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer. 
    The game also includes a console to mess around with after finishing the game, or just being frustrated by thinking with portals!`,
    controls: [`WAD: Control movement`, `Q: Open a blue portal`, `E: Open a yellow portal`, `R: Close portals`, `F: Pick up object`, `Esc/P: Pause game`]
  },
  {
    filter: [`plat`, `flash`],
    link: `alien-hominid`,
    imgsrc: `alien-hominid.png`,
    name: `Alien Hominid`,
    developer: `The Behemoth`,
    desc: `Alien Hominid is a side-scrolling shooter in a similar vein to games such as Metal Slug, where one hit instantly kills and has a two-player simultaneous play. 
    Players take over as the titular hominid, who has to fend off waves of secret agents. 
    His main arsenal is a blaster, while players can also melee close-up enemies and use a limited number of grenades to attack. 
    Advanced moves include rolling under shots, jumping on and biting off enemies' heads, temporarily scaring other enemies, and digging underground to drag enemies down with them.`,
    controls: [`Arrow Keys: Control movement`, `A: Shoot`, `S: Jump`]
  },
  {
    filter: [`sport`],
    link: `basketball-stars`,
    imgsrc: `bbstars.png`,
    name: `Basketball Stars`,
    developer: `MadPuffers`,
    desc: `Basketball Stars is a 2-player basketball game created by Madpuffers. You can play solo or with a friend as a variety of legendary basketball players. 
    Shoot basketball with the likes of LeBron James, James Harden, and Stephen Curry in Basketball Stars!`,
    controls: [`WASD/Arrow Keys: Control movement`, `B/L: Shoot/Steal`, `S/↓: Pump fake/block`, `Double-Tap A/D/←/→: Sprint`, `K/V: Super shot`]
  },
  {
    filter: [`misc`, `flash`],
    link: `btd`,
    imgsrc: `btd.jpg`,
    name: `Bloons Tower Defense`,
    developer: `Ninja Kiwi`,
    desc: `Bloons Tower Defense. Stop any bloons from escaping the maze by building and upgrading bloons popping towers. Towers can throw darts, tacks, bombs, and ice.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`misc`, `flash`],
    link: `bloons-td-2`,
    imgsrc: `bloons-td-2.png`,
    name: `Bloons Tower Defense 2`,
    developer: `Ninja Kiwi`,
    desc: `Bloons Tower Defense 2. Stop any bloons from escaping the maze by building and upgrading bloons popping towers. Towers can throw darts, tacks, bombs, and ice.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `minesweeper`,
    imgsrc: `minesweeper.png`,
    name: `Minesweeper`,
    developer: `PicturElements`,
    desc: `Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.`,
    controls: [`Left Click: Reveal tile`, `Right Click: Flag`, `Smiley Face: Reset game`]
  },
  {
    filter: [`plat`, `mp`, `fight`, `flash`],
    link: `ssf`,
    imgsrc: `ssf.png`,
    name: `Super Smash Flash`,
    developer: `McLeodGaming`,
    desc: `Choose your characters and options and battle it out with 28 different characters in the original title that started it all – Super Smash Flash!
    This award-winning Super Smash Bros. Fangame is complete with Classic Mode, Adventure Mode, and all of the things that make Smash Bros. 
    Feel like Smash Bros, with characters and content you’d never expect sprinkled about. Have fun!`,
    controls: [`Arrow Keys/WASD: Control movement`, `O/G: Jump`, `P/F: Attack`, `Backspace: Pause`]
  },
  {
    filter: [`plat`, `flash`],
    link: `flood-runner-2`,
    imgsrc: `fr2.jpg`,
    name: `Flood Runner 2`,
    developer: `Ben Rad Vinyl`,
    desc: `A fast paced run-for-your-life game.

    Goal is to outrun the giant wave and survive. This game is played with only one button, get your timing right and set a top score!`,
    controls: [`Click/Space: Jump/glide`]
  },
  {
    filter: [`misc`],
    link: `stack`,
    imgsrc: `stack.png`,
    name: `Stack`,
    developer: `Steve Gardner`,
    desc: `Stack is a fun and simple game with a simple goal. Keep stacking up the blocks as high as you can! Just make sure you don't run out of blocks...`,
    controls: [`Click/Space: Place blocks`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `linerider`,
    imgsrc: `linerider.jpg`,
    name: `Line Rider`,
    developer: `Emergent Studios`,
    desc: `Line Rider is a classic sandbox game where you draw a track for the sledder to ride on. Simple concept, endless possibilities, oddly addicting!`,
    controls: [`Click and hold to draw`]
  },
  {
    filter: [`plat`],
    link: `spelunky`,
    imgsrc: `spelunky.png`,
    name: `Spelunky`,
    developer: `Derek Yu`,
    desc: `Spelunky is a cave exploration / treasure-hunting game inspired by classic platform games and roguelikes, where the goal is to grab as much treasure from the cave as possible. 
    Every time you play the cave's layout will be different. Use your wits, your reflexes, and the items available to you to survive and go ever deeper! 
    Perhaps at the end you may find what you're looking for...`,
    controls: [`←/→: Control movement`, `↑: Look up/climb`, `↓: Look down/Crouch/Climb/Run`, `X: Action`, `Z: Jump`, `C: Cycle Item`, `Shift: Run`]
  },
  {
    filter: [`drive`, `misc`],
    link: `tanuki-sunset`,
    imgsrc: `tanuki.png`,
    name: `Tanuki Sunset`,
    developer: `Rewind Games`,
    desc: `Tanuki Sunset Classic is a third-person longboard-skating game where players play as a raccoon skating downhill on a procedurally generated synthwave-themed seaside road.

    Drift your way around the narrow corners, gather Tanuki Bits to fill up your Bonus Roulette Meter and try and gather as many points as you can.
    
    Drift often. Get some air-time and avoid cars and obstacles while pushing your luck close to the walls and edges to get near-miss moments and tight-squeezes to maximize your score.
    
    Get the full game on Steam: https://store.steampowered.com/app/1251460/Tanuki_Sunset/`,
    controls: [`W: Speed Stance (Hold)`, `AD/←/→: Control movement`, `S: 180 Slide`, `Space: Drift`, `Esc: Pause`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz`,
    imgsrc: `tiq.png`,
    name: `The Impossible Quiz`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz is an online quiz game that is… Almost impossible. The questions are all difficult to answer and require lateral thinking. 
    There are 110 questions to get through and you only have three lives, so make sure you’re ready to think creatively! `,
    controls: [`Click: Interact`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz-2`,
    imgsrc: `tiq2.png`,
    name: `The Impossible Quiz 2`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz 2 is the second installment of the most annoying quiz on the internet. Although not entirely impossible, you must navigate through a series of illogical questions and hope to answer them correctly. 
    Each wrong answer costs you a life, so memorize your answers and try again to get further!`,
    controls: [`Click: Interact`]  
  },
  {
    filter: [`drive`],
    link: `motox3m`,
    imgsrc: `motox3m.png`,
    name: `Moto X3M`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`plat`, `flash`],
    link: `learn-to-fly`,
    imgsrc: `learntofly.png`,
    name: `Learn To Fly`,
    developer: `lightbringer777`,
    desc: `One Penguin Takes it personally when he is surfing the web and stumbles upon a web site telling him that he cant fly, 
    after that he sets his mind to research and practice flying until he can prove the world that he can.. Learn to Fly!`,
    controls: [`←/→: Adjust angle`, `Space: Rockets`]
  },
  {
    filter: [`shoot`, `plat`, `flash`],
    link: `binding-of-isaac`,
    imgsrc: `boi.png`,
    name: `Binding of Isaac`,
    developer: `Edmund McMillen, Florian Himsl`,
    desc: `When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.
    The Binding of Isaac is a randomly generated action RPG shooter with heavy Rogue-like elements. 
    Following Isaac on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety.
    
    Full version on Steam: https://store.steampowered.com/app/113200/The_Binding_of_Isaac/`,
    controls: [`WASD: Control movement`, `Arrow Keys: Control shooting`]
  },
  {
    filter: [`emu`,`shoot`],
    link: `doom`,
    imgsrc: `doom.png`,
    name: `Doom`,
    developer: `id Software, GT Interactive`,
    desc: `Doom is a 1993 first-person shooter game developed by id Software. Players assume the role of a space marine, popularly known as Doomguy, fighting their way through hordes of invading demons from Hell.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`],
    link: `jimothy-piggerton`,
    imgsrc: `jimpig.png`,
    name: `Jimothy Piggerton`,
    developer: `Niborious7`,
    desc: `Run and Jump to Save Piggerton from the deadly Butcher!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game`,
    imgsrc: `whg.png`,
    name: `World's Hardest Game`,
    developer: `Stephen Critoph`,
    desc: `This is the self-proclaimed World's Hardest Game. Don't play it; it's too difficult! It really is! Wow this game has to be one of the most challenging but addictive games ever to be made! 
    The aim is simple: all you have to do is guide your red block from one end of the level to the other and collect any yellow circles on the way. This might sound easy, but believe us when we say it isn't!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game-2`,
    imgsrc: `whg2.png`,
    name: `World's Hardest Game 2`,
    developer: `Stephen Critoph`,
    desc: `World's Hardest Game 2 is the second episode of the self-proclaimed world's hardest game series! 
    Hone your reflexes and accuracy as you try to move your little block to the end of each stage without touching the obstacles. 
    Doing so will bring you back to the start so you can try again. 
    The difficulty goes up after every stage, so keep your focus and see how far you can get in the World's Hardest Game 2.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`flash`, `misc`],
    link: `douchebag-workout-2`,
    imgsrc: `dw2.jpg`,
    name: `Douchebag Workout 2`,
    developer: `Pyrozen`,
    desc: `Another Douche wanna be! Help this poor weak guy get into shape, start a social life, get some awesome swag to finally get with the ladies! 
    Do you have what it takes to become big, tanned and ripped? A hilarious game of upgrades and deep social exploration!`,
    controls: [`Click: Interact`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
