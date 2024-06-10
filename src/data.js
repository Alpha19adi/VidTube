// export const API_KEY="AIzaSyCwo2MruW9UF2mmYdIWPEp3ug9aFWxitEc"
// data.js
export const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const valueConverter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+'M views'
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K views'
    }
    else{
        return value+' views'
    }
}
export const valueConverterForLikes = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K'
    }
    else{
        return value+''
    }
}

export const darkmode=false;