// # **Instructions**

// * Remember Tamagotchis? They were those little toys that contained "digital pets" which you could feed, pet, play with, and care for. Kind of like Furbies but a whole lot less terrifying. Over the next thirty minutes or so, you are going to create your own basic Tamagotchi clone using constructors.

// * Create a constructor called "DigitalPal" which will create four properties and four methods...
//   * The first property is "hungry" and it initially starts out as false
//   * The second property is "sleepy" and it initially starts out as false
//   * The third property is "bored" and it initially starts out as true
//   * The fourth property is "age" and it initially starts out at 0
function DigitalPal(hungry, sleepy, bored, age){
    this.hungry= false, 
    this.sleepy= false, 
    this.bored= true,
    this.age= 0,
    // * The first method is "feed()" - If hungry is true, print "That was yummy!", set hungry to false, and then set sleepy to true. If hungry is false, print "No thanks! I'm full."
    this.feed= function feed(){
        if(this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }else{
            console.log("No, thanks! I'm full");
        };
    },
    // * The second method is "sleep()" - If sleepy is true, print `Zzzzzzzz`, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."
    this.sleep= function sleep(){
        if(this.sleepy){
            console.log("Zzzzzz..zz..");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        }else{
            console.log("No way! I'm not tired");
        };
    },
    // * The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"
    this.play= function play(){
        if(this.bored){
            console.log("Yay!! Let's play!");
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("Not right now. Later?")
        };
    },
    // * The fourth method is "increaseAge()" - This method is called by the sleep() method when the DigitalPal goes to sleep and increases the DigitalPal's age by one while also printing "Happy Birthday to me! I am "+age+" old!"
    this.increaseAge= function increaseAge(){
            this.age++;
            console.log("Happy Birthday to me! I am " +age+" old!")
    },
};


// * Create a variable named "dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...
var dog = new DigitalPal();
//   * outside - Initially set to false
dog.outside = false;
//   * bark() - Prints out "Woof! Woof!" when run
dog.bark = function(){
    console.log("Woof! Woof!!");
}
//   * goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs bark(). If outside is true, prints "We're already outside though..."
dog.letOutside = function(){
    if (this.outside ===false){
        console.log("Yay! I love the outdoors");
        this.outside = true;
        this.bark()
    }else{
        console.log("We're already outside thought... ");
    }
};
//   * goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."
dog.letInside = function(){
    if (this.outside === true){
        console.log("Aww.. Do I have to?");
        this.outside = false;
    }else{
        console.log("We're already inside though...");
    },
};
// * Make a second variable named "cat" that is set to a new DigitalPal and add the following methods to it:
var cat = new DigitalPal();
//   * houseCondition - Initially set to 100... But not for long...
cat.houseCondition = 100;
//   * meow() - prints out "Meow! Meow!" when run
cat.meow() {
    console.log("Meow.. prrr.. prrr");
};
//   * destroyFurniture() - Decreases houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.
cat.destroyFurniture(){
    if(this.houseCondition - 10 > 0){
    this.houseCondition -= 10;
    console.log("MUAHAHAHA..! TAKE THAT FURNITURE!");
    this.bored = false;
    this.sleepy = true;
    }else{
        console.log("I've already destroyed it all!")
    }
};
//   * buyNewFurniture() - Increases houseCondition by 50 and prints "Are you sure about that?" to the screen.
car.buyNewFurniture(){
    cat.houseCondition + 50;
    console.log("Are you sure about that?");
};

// * Play around with your newly created digital pets for a bit and see what else you could add in order to make them even more exciting!

// * BONUS: Make it so your Tamagotchis run off of user-input from the command line. It may sound easy at first, but this can actually be quite challenging. We will be going over this in more detail during the next class.