const originalUrlInput = document.querySelector("#original_url_input");
const submitButton = document.querySelector("#submit_btn");
const showShortUrl = document.querySelector("#show_short_url");
const loadingMessage = document.querySelector("#loading_message");

function clickHandler(){
    const originalUrl = originalUrlInput.value;

    const ShortnerUrl = 'https://url-shortner-backend-lxav.onrender.com/url/create';

    const data = {
        "originalURL" : originalUrl
    }

    loadingMessage.classList.remove("hide");

    fetch(ShortnerUrl,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then((res)=> res.json())
    .then((data) => {
        console.log(data.shortUrl)
        showShortUrl.value = data.shortUrl;
    })
    .catch(error=>{
        console.log("error",error)
    })
    .finally(()=>{
        loadingMessage.classList.add("hide");
    })
}

submitButton.addEventListener("click",clickHandler);
