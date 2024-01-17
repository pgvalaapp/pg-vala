importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
	apiKey: 'AIzaSyDrDvsZe-L2fGM-rZ3R5trDDIhlliOE0no',
	authDomain: 'pgvala-92933.firebaseapp.com',
	projectId: 'pgvala-92933',
	storageBucket: 'pgvala-92933.appspot.com',
	messagingSenderId: '576055136415',
	appId: '1:576055136415:web:5ba79152aad23ac78a12aa',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
