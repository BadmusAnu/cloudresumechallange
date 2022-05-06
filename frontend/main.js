window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiURL = 'https://getresumechallenge.azurewebsites.net/api/GetResumeChallenge?code=2Q2Ffg7EM2/zIMKPagLdfi4BEGiRXjFRbQxRMUCxqBTOz6QKqjlDIQ==';
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

