// Ass: Q NO:14. Invited Guest List

let Guestlist :string[] = ['Kamran Tessori','Daniyal Nagori','Zia Khan',];
// for(let i=0; i<Guestlist.length; i++){

// console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

// }

// Ass: Q NO:15. Changing Guest list

let absent_Guest :string = 'Zia Khan' ;
let new_Guest :string = 'Imran Khan' ;
Guestlist[2] = new_Guest 

// for(let i=0; i<Guestlist.length; i++){

    // console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    
    // }
console.log(`Mr. ${absent_Guest} is not coming in the party.`)

// Ass: Q NO 16. 3 New More Guest

console.log('Good News! We find big Table So we are inviting 3 more guest.')
Guestlist.unshift('Rajab');
Guestlist.splice(2 , 0 ,'Haroon');
Guestlist.push('Shahzaib');

for(let i=0; i<Guestlist.length; i++){
    console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
    }
    
// Ass: Q NO 17. Shrinking Guest List only 2 invited

    console.log('\nSorry we can not arrange big table, Only Two Peoples will be invited.');

    while(Guestlist.length > 2){
        let remove_Guest = Guestlist.pop();
        console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinnner.`);
    }

    for(let i=0; i<Guestlist.length; i++){
         console.log('Dear Mr. ' + Guestlist[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
         }

Guestlist.splice(0, 2)

console.log(Guestlist);