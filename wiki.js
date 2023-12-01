let userinput=document.getElementById('userinput');
let unorder=document.getElementById('unorder');
let spinner=document.getElementById('spinner');

function display(result){
    let {link, title, description } = result;

    let div=document.createElement('div');
    div.classList.add('result');
    unorder.appendChild(div);

    let titleE=document.createElement('a');
    titleE.href=link;
    titleE.classList.add('title');
    titleE.target='_blank';
    titleE.textContent=title;
    div.appendChild(titleE);

    let br1=document.createElement('br');
    div.appendChild(br1);

    let linkL=document.createElement('a');
    linkL.textContent=link;
    linkL.classList.add('link')
    linkL.href=link;
    linkL.target='_blank';
    div.appendChild(linkL);

    let br2=document.createElement('br');
    div.appendChild(br2);

    let descriptionD=document.createElement('p');
    descriptionD.textContent=description;
    descriptionD.classList.add('description');
    div.appendChild(descriptionD);
}

function arrayof(searchresult){
    spinner.classList.toggle('d-none');
    for (let result of searchresult){
        display(result);
    }
    
}
function checkdata(event){
    if(event.key==='Enter'){
        unorder.textContent='';
        spinner.classList.toggle('d-none');

    let searchValue=userinput.value;
        let options={
            method:'GET'
        };
        let url='https://apis.ccbp.in/wiki-search?search=' + searchValue;
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            arrayof(search_results);
        });

    }
}
userinput.addEventListener('keydown',checkdata);