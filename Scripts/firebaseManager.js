// Här jobbar jag (Ted Strömne) med Firebase för att spara datan vi tar emot från och skickar till andra moduler
// Jag märkte i efterhand att jag skrev kommentarerna högst upp i svenska men alla andra i engelska... 🤔

// i needed to rewrite the ENTIRE firebase code because of some issue with importing from firebase...
// FUCK FIREBASE

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaIpXASxAq07Wp4-TloUkOGLP4ff1MnOE",
    authDomain: "blackjack-for-kids.firebaseapp.com",
    projectId: "blackjack-for-kids",
    storageBucket: "blackjack-for-kids.appspot.com",
    messagingSenderId: "159518911306",
    appId: "1:159518911306:web:6e126443492859b70eefb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const MuskNetWorth = 245000000000; // 245,000,000,000 (just making it easier to read the numbers with comments)
const BezosNetWorth = 171400000000; // 171,400,000,000 imagine having so much money it strains your eyes just to look at your bank account...
const ZuckerNetWorth = 127000000000; // 127,000,000,000

// a function i found online to make large numbers more readable by adding commas
// for example, 4000000 becomes 4,000,000 (thanks random stackoverflow guy!)
let humanRead = (num,intSep = ',',floatSep = '.') => {
    return new Intl
    .NumberFormat('en-US')
    .format(num)
    .replaceAll('.',floatSep)
    .replaceAll(',',intSep);
}

// function to display 'most money earned' leaderboard
function displayPointsLeaderboard() {
    const pointsLeaderboard = document.getElementById('pointsLeaderboard');

    db.collection('pointsLeaderboard')
    .orderBy('score', 'desc')
    .limit(10)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const data = doc.data();
            const score = data.score
            const username = data.username

            const listItem = document.createElement('li');
                listItem.innerHTML = `${username}: 💲${humanRead(score)}`
            pointsLeaderboard.appendChild(listItem);
        })
    })
}

// // function to display speedrun leaderboard (Musk & Co.)
// async function displayTimedLeaderboard(leaderboardId, netWorth, collectionName) {
//     const leaderboard = document.getElementById(leaderboardId);

//     leaderboard.innerHTML = '';

//     const leaderboardQuery = query(collection(db, collectionName), orderBy('timeTaken', 'asc'), limit(10));
//     const querySnapshot = await getDocs(leaderboardQuery);

//     querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         if (data.score > netWorth) {
//             const listItem = document.createElement('li');
//             if (data.timeTaken == 1) {
//                 listItem.textContent = `${data.username}: 💲${humanRead(data.score)} in ${data.timeTaken} minute`;
//                 leaderboard.appendChild(listItem);
//             } else {
//                 listItem.textContent = `${data.username}: 💲${humanRead(data.score)} in ${data.timeTaken} minutes`;
//                 leaderboard.appendChild(listItem);
//             }
//         }
//     });
// }

displayPointsLeaderboard();
// functionName(leaderboard ID, minimum net worth required, collection name in firebase)
// displayTimedLeaderboard('muskLeaderboard', MuskNetWorth, 'muskLeaderboard');
// displayTimedLeaderboard('bezosLeaderboard', BezosNetWorth, 'bezosLeaderboard');
// displayTimedLeaderboard('zuckerLeaderboard', ZuckerNetWorth, 'zuckerLeaderboard');