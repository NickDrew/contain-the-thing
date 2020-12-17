import { writable } from 'svelte/store'
import { localStore } from './localStore.js'

const initialGuards = [
    { id: 1, name: "Drew", onPatrol: false, alive: true, image: "", sound: "", inGame:true },
    { id: 2, name: "Beau", onPatrol: false, alive: true, image: "", sound: "", inGame:true },
    { id: 3, name: "Loberman", onPatrol: false, alive: true, image: "", sound: "", inGame:true },
    { id: 4, name: "Wildey", onPatrol: false, alive: true, image: "", sound: "", inGame:true },
]

const initialBarrierChecks = [
    { id: 1, status: true },
    { id: 2, status: true },
    { id: 3, status: true },
]

export const guards = localStore('guards', initialGuards)
export const barrierChecks = localStore('barrierChecks', initialBarrierChecks)