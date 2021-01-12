const readline = require('readline');

const details = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (or nick name) ', (name) => {
    console.log(`Hello ${name}.\n`);
  rl.question('What\'s an activity you like doing?\n', (activity) => {
    
    console.log(`${activity}...cool!\n`);

    rl.question('Why do you like that activity?\n', (why) => {
    
      console.log(`Wonderful! And...\n`);

      rl.question('What\'s your superpower? (In other words, something you are great at).\n', (superpower) => {
    
        console.log(`Thank you for telling me about yourself, ${name}. Your profile:\n`);
        console.log(`${name} loves ${activity} because ${why} and is great at ${superpower}.\n`) 

        rl.close()   
        
      });    
      
    });  
    
  });
  
});


