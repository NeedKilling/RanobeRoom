import axios from "axios";

export const fetchText = () => (dispatch)=>{
    axios.get(`https://ranobe-room.onrender.com/text`).then(({data}) =>{
    dispatch(setText(data));
});
};


export const setText = (textItems) => ({
    type: "SET_TEXT",
    payload: textItems,

});