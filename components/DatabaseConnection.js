
import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCFFNar_m6RThFQvLbRuK9k4tbh_zo96RA",
    authDomain: "studioapp-36f3d.firebaseapp.com",
    databaseURL: "https://studioapp-36f3d-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "studioapp-36f3d",
    storageBucket: "studioapp-36f3d.appspot.com",
    messagingSenderId: "151874024223",
    appId: "1:151874024223:web:f6c6718a87013bd75a762a"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function DatabaseConnection() {
    return database;   
}