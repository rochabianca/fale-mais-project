import firebase from './firebaseUtils';
import getCurrentDate from './getCurrentDate';

const sendToFirebase = (
  origin,
  destination,
  minutes,
  minutesGranted,
  finaltaxes
) => {
  const db = firebase.firestore();
  const date = getCurrentDate();
  if (parseFloat(minutes) > 0) {
    db.collection('entries').add({
      origin: `0${origin}`,
      destination: `0${destination}`,
      minutes: minutes,
      plain: `FaleMais ${minutesGranted}`,
      fixedTax: finaltaxes.fixed,
      faleMaisTax: finaltaxes.faleMais,
      created_at: date
    });
  }
};

export default sendToFirebase;
