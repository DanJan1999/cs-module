const perf = require('execution-time')();


const pangram = (s) => {
    let alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let expression = /\s/g;
    let lowercase = s.toLowerCase().replace(expression, ``);

    for(let i = 0; i < alphabet.length; i++){
        if(lowercase.indexOf(alphabet[i]) === -1){
          return "Not a pangram";
        } else {
            return `Is a pangram`
        }
    }
};

perf.start();
console.log(pangram(`This Pangram contains four a’s, one b, two c’s, one d, thirty e’s, six f’s, five g’s, seven h’s, eleven i’s, one j, one k, two l’s, two m’s, eighteen n’s, fifteen o’s, two p’s, one q, five r’s, twenty-seven s’s, eighteen t’s, two u’s, seven v’s, eight w’s, two x’s, three y’s, & one z. - Lee Sallows`));
let resultsInsert = perf.stop();

console.log("Pangram runtime", resultsInsert.preciseWords);

// Initial Pangram runtime test  "The quick brown fox jumps over the lazy dog." = 4.163... ms
// Second Pangram runtime test "Watch "Jeopardy!", Alex Trebek's fun TV quiz game." = 3.7395 ms
// Last Pangram runtime test = 4.43875 ms