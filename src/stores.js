
import { localStore } from './localStore.js'

const initialGuards = [
    { id: 1, name: "Beau", onPatrol: false, alive: true, image: "beau.jpeg", thingImage:"thing1.png", sound: "monsterDeath1.mp3", inGame:true },
    { id: 2, name: "Angus", onPatrol: false, alive: true, image: "angus.jpeg", thingImage:"thing2.jpg", sound: "monsterDeath2.mp3", inGame:true },
    { id: 3, name: "Catriona", onPatrol: false, alive: true, image: "catriona.jpeg", thingImage:"thing3.jpg", sound: "monsterDeath3.mp3", inGame:true },
    { id: 4, name: "Cherie", onPatrol: false, alive: true, image: "cherie.jpeg", thingImage:"thing4.jpg", sound: "monsterDeath4.mp3", inGame:true },
    { id: 5, name: "Lewis", onPatrol: false, alive: true, image: "lewis.jpeg", thingImage:"thing5.png", sound: "monsterDeath5.mp3", inGame:true },
    { id: 6, name: "Rob", onPatrol: false, alive: true, image: "rob.jpeg", thingImage:"thing1.png", sound: "monsterDeath2.mp3", inGame:true },
    { id: 7, name: "Sohil", onPatrol: false, alive: true, image: "sohil.png", thingImage:"thing4.jpg", sound: "monsterDeath3.mp3", inGame:true },
    { id: 8, name: "Todd", onPatrol: false, alive: true, image: "todd.png", thingImage:"thing3.jpg", sound: "monsterDeath1.mp3", inGame:true },
    { id: 9, name: "Jonny", onPatrol: false, alive: true, image: "jonny.jpeg", thingImage:"thing2.jpg", sound: "monsterDeath5.mp3", inGame:true },
    { id: 10, name: "Michael", onPatrol: false, alive: true, image: "michael.jpeg", thingImage:"thing1.png", sound: "monsterDeath4.mp3", inGame:true },

    { id: 11, name: "Guest1", onPatrol: false, alive: true, image: "testImage.jpg", thingImage:"thing5.png", sound: "monsterDeath4.mp3", inGame:true },
    { id: 12, name: "Guest2", onPatrol: false, alive: true, image: "testImage.jpg", thingImage:"thing2.jpg", sound: "monsterDeath5.mp3", inGame:true },
    { id: 13, name: "Guest3", onPatrol: false, alive: true, image: "testImage.jpg", thingImage:"thing1.png", sound: "monsterDeath2.mp3", inGame:true },

]

const initialBarrierChecks = [
    { id: 1, status: true },
    { id: 2, status: true },
    { id: 3, status: true },
]

export const guards = localStore('guards', initialGuards)
export const barrierChecks = localStore('barrierChecks', initialBarrierChecks)