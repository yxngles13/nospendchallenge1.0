// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI006n8ayDtFGDEjqiUjYKUvhlPRPtq4w",
  authDomain: "nospendchallenge-898fe.firebaseapp.com",
  projectId: "nospendchallenge-898fe",
  storageBucket: "nospendchallenge-898fe.firebasestorage.app",
  messagingSenderId: "1084481348280",
  appId: "1:1084481348280:web:490b94ebaa1c98e8cd0a4d",
  measurementId: "G-ZGXNRF5SFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const sql = neon("postgresql://neondb_owner:npg_0n3oKDXuzcwC@ep-shiny-bush-a8d6u385-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require");
const db = drizzle({ client: sql });
export const auth=getAuth(app);
