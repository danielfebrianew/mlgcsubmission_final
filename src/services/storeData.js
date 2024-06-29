import { Firestore } from '@google-cloud/firestore';

const db = new Firestore({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'submissionmlgc-daniel',
});

const storeData = async (id, data) => {
  try {
    const predictCollection = db.collection('predictions');
    await predictCollection.doc(id).set(data);
    console.log(`Document ${id} successfully written!`);
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};

export default storeData;
