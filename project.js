const students =[
    
    {  id: 1,
      first_name: "Calley",
      last_name: "Rivitt",
      email: "crivitt0@dell.com",
      gender: "Female",
      ip_address: "128.88.59.251",
      phone_numer: "010-7277-2282",
      home_adress: "경상북도 경산시 당로 44-3"
  }]
  const students2 =[
  {
      id: 2,
      first_name: "Germayne",
      last_name: "MacCartney",
      email: "gmaccartney1@newsvine.com",
      gender: "Male",
      ip_address: "214.42.108.177",
      phone_numer: "010-4647-8899",
      home_adress: "대구 뇌연구원"
  }]
  const students3 =[
  {
      id: 3,
      first_name: "Honor",
      last_name: "Becken",
      phone_numer: "010-2535-5563",
      email: "hbecken2@themeforest.net",
      gender: "Female",
      ip_address: "229.118.185.13",
      home_adress: "32796 Victoria Place"
  }]


  //1)casynchronous
  //callback function


//   function container(){
//       let result='';
//       setTimeout(() => {
//           students.forEach(element =>{
//             result+= `<li>${element.first_name} ${element.last_name}</li>`
//           })
//           document.body.innerHTML=result

          
//       }, 1000);
//   }

//   function addStudent(names, callback){
//       setTimeout(() => {
//           students.push(names)
//           callback();
          
//       }, 2000);
//   }
//   addStudent({   first_name: "Germayne", last_name: "MacCartney",}, container)
//   container();







//2)promise function







// function container(){
//     let result='';
//     setTimeout(() => {
//         students.forEach(element=>{
//             result+=`<li>${element.home_adress}</li>`
//         })
//         document.body.innerHTML=result
//     }, 1000);
// }

// function addStudent(adress){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             students.push(adress)
//             const error=false
//             if(!error){resolve()}
//             else{reject('error caution!!')}
//         }, 2000);
//     })
// }

// addStudent({ home_adress: "대구 뇌연구원"})
// .then(container)
// .catch(err=>console.log(err))

//3)async function


function container(){
    let result='';
    setTimeout(() => {
        students.forEach(element=>{
            result+=`<li>${element.phone_numer}</li>`
        })
        document.body.innerHTML=result
    }, 1000);
}

function addStudent(phone){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            students.push(phone)
            const error=false
            if(!error){resolve()}
            else{reject('ups')}
        }, 2000);
    })
}
async function result(){
    await addStudent({   phone_numer: "010-4647-8899",})
    container()
}
result()
.catch(err=>console.log(err))


