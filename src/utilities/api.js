import axios from "axios";

export const callServerForNewSong = async (filters) => await axios.post('http://localhost:1447/songRec', {filters})