window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiURL = 'https://badmusresumefuction.azurewebsites.net/api/GetResumeChallenge?code=P7cuJ0jDdBuLEi0kWI_uMlwqERTuCXtlUgHMTasMJ-xxAzFuMw6w_w==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeChallenge';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;   
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

