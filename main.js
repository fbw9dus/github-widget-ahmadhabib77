
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










    // anync getRepositoriesData(){
    //     await fetch()
    //     .then((response) => {
    //              return response.json();
    //            })
    //            .then((myJson) => {

    //                this.repoData = myData
    //                console.log(this.repoData)
    // })
    // .then(this.renList.bind)











    // async getRepositoriesData(){
    //     await fetch(`https://api.github.com/users/${inputMgd}/repos`)
    //    .then((response) => {
    //      return response.json();
    //    })
    //    .then((myJson) => {
    //      console.log(myJson);
    //    });
      

    // }


    




   // slodBaySon(){

     //   fetch ('https://api.github.com/users/${inputMgd.value}/repos')
        

     //   .then(e =>e.json())
      //  .then(item =>{
        //    console.log(item)

         //   this.inputMgd = "Polygon";
  //  }
   //  renList(){
     //    redData.map (e=>
      //      const repoName = redData.name 
        //    return list.innerHTML=repoName})
 //    }  
