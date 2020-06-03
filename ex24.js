// Exercise 24: OOP Game

const readline = require('readline-sync');

class Game {
    constructor () {
        this.hp = Math.floor(Math.random() * 10) + 1;
    }

    say(prompt) {
        console.log(prompt);
    }

    die(message) {
        this.say(message);
        process.exit(1);
    }

    ask(prompt) {
        console.log(`[[You have ${this.hp} hit points.]]`);
        if (this.hp <= 0) {
            this.die("You died!");
        } else {
            return readline.question(prompt + ' ');
        }
    }

    addRoom(room) {
        this[room.name] = room;
        room.game = this;
    }

    play(name) {
        this[name].enter();
    }

    hit(amount) {
        this.hp -= amount;
    }
}

class Room {
    constructor (name) {
        this.name = name;
    }
}

class Door extends Room {
    enter() {
        // they have to open the door to get the gold
        this.game.say("It breaks off the hinges, slams onto the floor and causes a dust cloud to kick up. The dust settles...");
        // what kind of puzzle will they solve?
        this.game.gold.enter();
    }
}

class Spider extends Room {
    enter() {
        // they enter here, and the spider takes 10 hit points
        this.game.say("A giant spider jumps onto you from the ceiling and sinks it's ivory-white fangs into your chest. You feel the poison surging through your body.");
        // if they live then they can run away

        if(this.game.hp > 0){
            this.game.say("You manage to get away and follow the hallway to the end and...");
            this.game.rope.enter();
        } else {
            this.game.die("You writhe in pain as you slowly lose conciousness. The last thing you see is the giant spider crawl toward you slowly...");
        }
    }
}

class Gold extends Room {
    enter() {
        // end of the game they win if they get the gold
        this.game.say("You found the freaking gold! Enjoy your riches!");
        process.exit(1);
    }
}

class Rope extends Room {
    enter() {
        // they are at the bottom of the well
        this.game.say("You are at the bottom of the well. There is a door to your left and a hallway in front?");
        let next = this.game.ask("\nWhat do you do? [door | hallway]");

        // they can go through the door to the gold
        if (next === 'door') {
            this.game.say("You walk to the door. You push it open and the old hinges squeek loudly.");
            this.game.hit(0);
            this.game.door.enter();
        // or go take a wrong turn to the spider
        } else if (next === 'hallway'){
            this.game.say("You walk towards the hallway and feel something sticky on the floor as you get closer.");
            this.game.hit(5);
            this.game.spider.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

class Well extends Room {
    enter() {
        this.game.say("You are walking through the woods and see a well.");
        this.game.say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = this.game.ask("\nWhat do you do? [climb | jump]");
        
        if (next === "climb") {
            this.game.say("You climb down the rope.");
            this.game.rope.enter();
        } else if (next === "jump"){
            this.game.say("Yikes! Let's see if you survive!");
            this.game.hit(5);
            this.game.rope.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
game.play("well");