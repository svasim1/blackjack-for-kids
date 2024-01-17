// Här jobbar jag (Ted Strömne) med Firebase för att spara datan vi tar emot från och skickar till andra moduler

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MuskNetWorth = 245000000000; // 245,000,000,000 (just making it easier to read the numbers with comments)
const BezosNetWorth = 171400000000; // 171,400,000,000
const ZuckerNetWorth = 127000000000; // 127,000,000,000

// a function I found online to make large numbers more readable by adding commas
// for example, 4000000 becomes 4,000,000 (pretty neat, huh)
let humanRead = (num,intSep = ',',floatSep = '.') => {
    return new Intl
    .NumberFormat('en-US')
    .format(num)
    .replaceAll('.',floatSep)
    .replaceAll(',',intSep);
}

// fetch and display 'most money earned' leaderboard
async function displayPointsLeaderboard() {
    const pointsLeaderboard = document.getElementById('pointsLeaderboard');

    pointsLeaderboard.innerHTML = '';

    const pointsQuery = query(collection(db, 'pointsLeaderboard'), orderBy('score', 'desc'), limit(10));
    const querySnapshot = await getDocs(pointsQuery);

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const listItem = document.createElement('li');
        listItem.textContent = `${data.username}: 💲${humanRead(data.score)}`;
        pointsLeaderboard.appendChild(listItem);
    });
}

// fetch and display speedrun leaderboard data
async function displayTimedLeaderboard(leaderboardId, netWorthThreshold, collectionName) {
    const leaderboard = document.getElementById(leaderboardId);

    leaderboard.innerHTML = '';

    const leaderboardQuery = query(collection(db, collectionName), orderBy('timeTaken', 'asc'), limit(10));
    const querySnapshot = await getDocs(leaderboardQuery);

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data.username, data.score, data.score >= netWorthThreshold);
        if (data.score > netWorthThreshold) {
            const listItem = document.createElement('li');
            if (data.timeTaken == 1) {
                listItem.textContent = `${data.username}: 💲${humanRead(data.score)} in ${data.timeTaken} minute`;
                leaderboard.appendChild(listItem);
            } else {
                listItem.textContent = `${data.username}: 💲${humanRead(data.score)} in ${data.timeTaken} minutes`;
                leaderboard.appendChild(listItem);
            }
        }
    });
}

// leaderboard ID, minimum net worth required, collection name in firebase
displayPointsLeaderboard();
displayTimedLeaderboard('muskLeaderboard', MuskNetWorth, 'muskLeaderboard');
displayTimedLeaderboard('bezosLeaderboard', BezosNetWorth, 'bezosLeaderboard');
displayTimedLeaderboard('zuckerLeaderboard', ZuckerNetWorth, 'zuckerLeaderboard');