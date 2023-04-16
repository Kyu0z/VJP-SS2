// const data: DataType[] = [
// {
// key: "1",
// avatar: "https://www.w3schools.com/w3images/mountains.jpg",
// name: "Kyu",
// phone: "0948757151",
// room: "Single",
// checkIn: "14:00 31/2/2023",
// checkOut: "12:00 03/3/2023",
// },
// {
// key: "2",
// avatar: "https://www.w3schools.com/w3images/mountains.jpg",
// name: "Duy Khai",
// phone: "0948757151",
// room: "Single",
// checkIn: "14:00 31/2/2023",
// checkOut: "12:00 03/3/2023",
// },
// {
// key: "2",
// avatar: "https://www.w3schools.com/w3images/mountains.jpg",
// name: "Duy Khai",
// phone: "0948757151",
// room: "Single",
// checkIn: "14:00 31/2/2023",
// checkOut: "12:00 03/3/2023",
// },
// {
// key: "2",
// avatar: "https://www.w3schools.com/w3images/mountains.jpg",
// name: "Duy Khai",
// phone: "0948757151",
// room: "Single",
// checkIn: "14:00 31/2/2023",
// checkOut: "12:00 03/3/2023",
// },
// {
// key: "2",
// avatar: "https://www.w3schools.com/w3images/mountains.jpg",
// name: "Duy Khai",
// phone: "0948757151",
// room: "Single",
// checkIn: "14:00 31/2/2023",
// checkOut: "12:00 03/3/2023",
// },
// ];

// Fetch <Firestore></Firestore>
const [data, setData] = useState<DataType[]>([]);

useEffect(() => {
const fetchData = async () => {
const db = firebase.firestore();
const querySnapshot = await db.collection("bookings").get();
const docs = querySnapshot.docs.map((doc) => doc.data());
const newData = docs.map((doc) => ({
key: doc.id,
name: doc.name,
avatar: doc.avatar,
phone: doc.phone,
room: doc.room,
checkIn: doc.checkIn,
checkOut: doc.checkOut,
}));
setData(newData);
};

    fetchData();

}, []);

{
"compilerOptions": {
"target": "ES6",
"useDefineForClassFields": true,
"lib": ["DOM", "DOM.Iterable", "ESNext"],
"allowJs": false,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"module": "ESNext",
"moduleResolution": "Node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"
},
"include": ["src"],
"exclude": ["node_modules"],
"references": [{ "path": "./tsconfig.node.json" }]
}

// import firebase from "firebase/app";
