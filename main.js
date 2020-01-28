
    const sondBack = async() =>{
    let input = document.querySelector('.input')
    let name = input.value
    let ul = document.querySelector('.ul')
     await fetch (`https://api.github.com/users/${name} /repos`)


        .then(data => data.json()) 
        .then(item =>{
            console.log(item)

            for(x of item){
               

                var list =`

                <li class="li1">
                   <a href=${x.html_url}>${x.name}</a>
                </li>

                <li class="li2">
                ${x.description} <span>${x.created_at.slice(8,10)}.${x.created_at.slice(5,7)}.${x.created_at.slice(0,4)}</span>
                </li>
                `

                ul.insertAdjacentHTML('beforeend',list)
            }
        })  
            
    }










    


