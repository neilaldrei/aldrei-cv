import db from '@/firebase/firebaseInit';
import { 
    doc, 
    getDoc, 
    getDocs, 
    collection, 
    query,
    orderBy,
    limit,
} from 'firebase/firestore/lite';

const firebaseService = {
    async getDoc (collection, document) {
        const meRef = doc(db, collection, document);
        const docSnap = await getDoc(meRef);
    
        if (docSnap.exists()) {
            return (docSnap.data())
        } else {
            console.log({errors: 'no such data'});
        }
    },

    async getDocuments (col, nLimit, orderItem, isOrderedBy) {
        let documents = [];

        const q = query(
            collection(db, col), 
            orderBy(orderItem, isOrderedBy), 
            limit(nLimit)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            documents.push(doc.data());
        });

        return documents
    }
}

export default firebaseService;