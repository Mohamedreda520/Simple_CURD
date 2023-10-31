let input = document.querySelector(".input")
    let add = document.getElementById("add");
    let task =document.querySelector(".task")
    let id;
    let mood = 'Add'
    let datapro ;
    let local = localStorage.getItem('product')
    if (local != null) {
  datapro = JSON.parse(local);
  
} 
else {
  datapro = [];
 
}
    add.onclick = function(){
        let pro = {
            name: input.value
        }
       if( mood === 'Add'){
        datapro.push(pro)
    }
    else{
       datapro[id] = pro
       add.innerHTML = 'Add';
       mood = 'Add'
    }
       
        
        localStorage.setItem('product', JSON.stringify(datapro));
        input.value = ""
        shawdata()
        
        
    }
    
    function shawdata() {
        let tasks = ''
        for(let i = 0; i< datapro.length; i++){
            tasks += `
            <div class="parintdiv">
            <p> ${datapro[i].name}</p>
        <span class="Delate" onclick = delate(${i})><i class="fa-solid fa-trash"></i></span>
        <span class="UPdata" onclick = update(${i})><i class="fa-sharp fa-solid fa-pen"></i></span>
    </div>
            
            `
        }
        task.innerHTML = tasks;
    let alldata = document.getElementById('alldata')
        if (datapro.length > 0) {
            alldata.innerHTML = `
            <h3 onclick = DeleteAll()>Delete All (${datapro.length}) </h3>

            `
        }else{
            alldata.innerHTML =" " 
        }
    }
    shawdata() 

    function delate(i) {
        datapro.splice(i,1)
        localStorage.product = JSON.stringify(datapro);
        shawdata();
    }
    function update(i) {
        input.value = datapro[i].name;
        add.innerHTML = 'Update'
        mood = 'Update'
        id=i
    }
    function DeleteAll() {
        datapro.splice(0);
        localStorage.clear()
        shawdata() 
    }