// 1. //
const baseUrl = 'http://numbersapi.com'


async function getNumFact(num){
    let res = await axios.get(`${baseUrl}/${num}?json`)
    let text = res.data.text
    console.log(text)
    return text;
}
// getNumFact(4);

// 2. //
// favNum = [7,20,19,87];
favNums = [7,20,19,87];
async function LogNumFact(numArray){
    for(let num of numArray){
        await getNumFact(num);
    }
}

LogNumFact(favNums);

// 3. //
favNum = [7,20,19,87];
async function showNumFact(numArray){
    for(let num of numArray){
        let text =await getNumFact(num);
        $('#facts').append($('<li>').text(text));
    }
}

// showNumFact(favNum);

    // NumArray.forEach(num =>{
    //     let text = getNumFact(num);
    //     $('#facts').append($('<li>').text(text));
        
    // })
