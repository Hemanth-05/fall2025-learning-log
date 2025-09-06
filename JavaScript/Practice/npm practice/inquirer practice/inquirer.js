import { input, select } from '@inquirer/prompts';

const answer = await input({ message: 'Enter your name' });

console.log(answer);

const pizzaChoice = await select({
  message: 'Select the Pizza',
  choices: [
    {
      name: 'Large',
      value: 'L',
      description: 'Big Piz',
    },
    {
      name: 'Medium',
      value: 'M',
      description: 'Mid Piz',
    },
    {
      name: 'Small',
      value: 'S',
      description: 'Small Piz',
    },
    {
      name: 'Very Smoll',
      value: 'XS',
      description: 'Smoll Piz',
    },
    ]
})

console.log(pizzaChoice);