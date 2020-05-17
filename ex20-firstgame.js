// Exercise 20: First Game

const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say(message);
    process.exit(1);
}

const deathCheck = (hp, message) => {
    hpDisplay(hp);
    if (hp <= 0) {
        die(message);
        process.exit(1);
    } else {
        return;
    }
}

const ask = (hp, prompt) => {
    hpDisplay(hp);
    if (hp <= 0) {
        die("You died!");   
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp, message) => {
    say(message);
    // They have to open the door to get the gold
    // What kind of puzzle will they solve?
}

const hallway = (hp, message) => {
    say(message);
    say("You walk for a short while and the path diverges into 3.");
    let next = ask(hp, "Left, Middle, Right - which path do you take? ");
    if (next === "left") {
        say("You choose the left path");
        // circle around
        hallway(hp, "The path spirals down and twists... You see a light.");
    } else if (next === "right") {
        say("You choose the right path");
        // leads to the gold room
        gold(hp, "The path spirals up and bends to the right. There you find a doorway.");
    } else {
        say("You chose the middle path");
        // leads to the door
        door(hp, "You open the door cautiously.");
    }
}

const spider = (hp) => {
    // They enter here, and the spider takes 10 hit points
    say("A giant spider crawls out of the wall of the well and pounces on you!")
    hp = Math.floor(hp / 4);
    deathCheck(hp , "You feel the spider's fangs pump its venom into you and slowly go numb as you watch it wrap you up in webbing.");
    // If they live then they can run away
    hallway(hp, "You manage to leap out of the way and run towards what looks like a tunnel");
}

const gold = (hp, message) => {
    // End of the game they win if they get the gold
    say(message);
    say("The sacks of gold and jewels lay in a huge pile. You're filthy stinkin' rich!!!");
    process.exit(1);
}

const rope = (hp) => {
    // They are climbing down
    say("As you climb down further another glint of light catches your eye at the bottom.");
    // Climb down normally or quickly
    let next = ask(hp, "Do you climb down normally or slide down?");

    if (next === "normal" || next === "normally") {
        say("In no rush, you make it to the bottom of the well and are greeted with ankle-deep water.");
        baseOfWell(hp);
    } else if (next === "slide") {
        hp = Math.floor(hp / 4);
        hpDisplay(hp);
        say("In your moment of greed, you loosen your grip a bit and slide quickly. In the process getting rope burn.");
        baseOfWell(hp);
    } else {
        hp = Math.floor(hp / 2);
        // console.log(hp);
        hpDisplay(hp);
        say("Your grip slips and you fall to the watery bottom!\nYou land on your back completely soaked and muddy."); 
        baseOfWell(hp);
    } 
}

const jumped = (hp) => {
    say("You're mad! Fueled by greed you leap in and land at the bottom.");
    hp = Math.floor(hp / 2);
    // hp = 0;
    deathCheck(hp, "Your avarice got the best of you and your lungs were punctured by a cracked rib... you die a slow death.");
    say("You break your right ankle in the process and you are soaking wet and muddy.");
    baseOfWell(hp);
}

const baseOfWell = (hp) => {
    say("At the base of the well, a few steps in front of you, lies the shiny object you saw from above.");
    let next = ask(hp , "You walk up to the coin, do you pick it up?")

    if (next === "yes") {
        let pickup = ask(hp, "You grab the coin, but it's stuck. Do you use more force to get it out?");
        // pull harder and pocket the coin
        if (pickup === "yes") {
            say("You readjust your position and bend at the knees and ... PULL\nYou feel whatever the coin was attached to snap and the coin is in your hands!\nYou slip the shiny gold coin in your pocket");
            // Or go take a wrong turn to the spider
            spider(hp);
        // coin is stuck, hard to pull - leave it
        } else {
            say("It's really stuck in there. You take a mental note of the location to come back later.");
        }
    } else {
        say("You take a mental note of the location to come back later.");
        hallway(hp, "You look around and see what looks like a tunnel and walk towards it.");
    }
    
    // They can go through the door to the gold

}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if(next === "climb") {
        say("You take ahold of the rope and begin to climb down.");
        rope(hp);
    } else if (next === "jump") {
        say("Yikes! Let's see if you survive!");
        jumped(hp);     
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// Setup the hit points
let hp = Math.floor(Math.random() * 10) + 1;
let hpDisplay = (hp) => {
    console.log(`[[You have ${hp} hit points.]]`);
};

// Starts the game
well(hp);