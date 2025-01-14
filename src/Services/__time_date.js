export const timeDataToUnixTimeStamp = (data)=>{
    const unixTimeStamp = Math.floor(new Date(data).getTime() / 1000);

    return unixTimeStamp
}



export const DMY =(time)=>{
    const timestamp = time * 1000; // Convert seconds to milliseconds
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate
}



export const DMYT = (timestamp) =>{
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    const options = {
    weekday: 'short', // 'Wed'
    year: 'numeric', // '2024'
    month: 'short', // 'Jul'
    day: 'numeric', // '5'
    hour: '2-digit', // '04'
    minute: '2-digit', // '02'
    hour12: true, // 'PM'
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate
}