

let Guestlist :string[] = ['Kamran Tessori','Daniyal Nagori','Zia Khan',];

// for(let i=0; i<Guestlist.length; i++){

// console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

// }

let absent_Guest :string = 'Zia Khan' ;

let new_Guest :string = 'Imran Khan' ;

Guestlist[2] = new_Guest ;

for(let i=0; i<Guestlist.length; i++){

    console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    
    }

console.log(`Mr. ${absent_Guest} is not coming in the party.`)

console.log('Good News! We find big Table So we are inviting 3 more guest.')

Guestlist.unshift('Rajab');
Guestlist.splice(2 , 0 ,'Haroon');
Guestlist.push('Shahzaib');

for(let i=0; i<Guestlist.length; i++){

    console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    
    }
