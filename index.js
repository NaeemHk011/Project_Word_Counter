import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write your Sentence for  words Count in your Sentence"
    }
]);
const words = answers.Sentence.split(" ");
console.log(`${words.length} => words in your sentence: ${answers.Sentence}`);
