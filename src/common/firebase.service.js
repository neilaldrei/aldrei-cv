import db from '@/firebase/firebaseInit';
import { doc, getDoc } from 'firebase/firestore/lite';

const firebaseService = {
    async getDoc (collection, document) {
        const meRef = doc(db, collection, document);
        const docSnap = await getDoc(meRef);
    
        if (docSnap.exists()) {
            return (docSnap.data())
        } else {
            console.log({errors: 'no such data'});
        }
    }
}

export default firebaseService;