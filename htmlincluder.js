async function includeHTML(){
    let includeList = document.querySelectorAll("[data-include]");
    let promises = Array.from(includeList).map(el => {
        const source = el.getAttribute("data-include") + ".html";
        return fetch(source)
        .then(res => res.text())
        .then(htmlData => el.innerHTML = htmlData)
        .catch(err => {
                console.error("include error : ", source, err);
            });
        })
        //.catch(error => console.log("include error : " + error))
    // includeList.forEach(el => {
    //     const source = el.getAttribute("data-include") + ".html";
    //     fetch(source)
    //     .then(res => res.text())
    //     .then(htmlData => el.innerHTML = htmlData)})
    
    await Promise.all(promises);
}

includeHTML();