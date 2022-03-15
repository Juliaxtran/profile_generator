const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`Thank you for your valuable feedback: ${activity}`);

    rl.question("What do you listen to while doing that?", (listen) => {
      console.log(`Thank you for your valuable feedback: ${listen}`);

      rl.question("What's your favourite thing to eat for that meal?", (meal) => {
        console.log(`Thank you for your valuable feedback: ${meal}`);

        rl.question("Which sport is your absolute favourite?", (sport) => {
          console.log(`Thank you for your valuable feedback: ${sport}`);

          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {

            console.log(`Thank you for your valuable feedback: ${superpower}`);

            console.log(`User profile : Your name is ${name}. Your favourite activity is ${activity}. You like to listen to ${listen} while you are doing ${activity}. Your favourite meal is ${meal}.Your absolute facourite sport is ${sport}. Your super power is ${superpower}. Thank you ${name} for making your user profile. It is nice meeting you.`)
            rl.close();
          });




        });
      });
    });

  });


});







