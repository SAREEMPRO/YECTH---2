import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUt1gs5l4R4OlEZlVd3emi4La9oFvvM",
  authDomain: "ytechcomputer-2ebc6.firebaseapp.com",
  projectId: "ytechcomputer-2ebc6",
  storageBucket: "ytechcomputer-2ebc6.firebasestorage.app",
  messagingSenderId: "1091405212803",
  appId: "1:1091405212803:web:86cd8bd12aa3f7b0a4bfb6",
  measurementId: "G-HXG3D89KFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Visitor count functions
export const visitorCountService = {
  // Get current visitor count
  async getVisitorCount() {
    try {
      const docRef = doc(db, "websiteStats", "visitorCount");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data().count || 0;
      } else {
        // Initialize if document doesn't exist
        await setDoc(docRef, { count: 0 });
        return 0;
      }
    } catch (error) {
      console.error("Error getting visitor count:", error);
      return 0;
    }
  },

  // Increment visitor count
  async incrementVisitorCount() {
    try {
      const docRef = doc(db, "websiteStats", "visitorCount");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // Update existing count
        await updateDoc(docRef, {
          count: increment(1)
        });
      } else {
        // Create new document with count 1
        await setDoc(docRef, { count: 1 });
      }
      
      // Get updated count
      const updatedDoc = await getDoc(docRef);
      return updatedDoc.data().count;
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      return null;
    }
  },

  // Update visitor count (set specific value)
  async updateVisitorCount(count) {
    try {
      const docRef = doc(db, "websiteStats", "visitorCount");
      await setDoc(docRef, { count });
      return count;
    } catch (error) {
      console.error("Error updating visitor count:", error);
      return null;
    }
  }
};

export default db;