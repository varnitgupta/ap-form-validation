
const countries = [
    {
      name: "India",
      states: [
        {
          name: "MadhyaPradesh",
          cities: [
            {name: "Gwalior"},
            {name: "Indore"},
            {name: "Ujjain"}
          ]
        },
        {
          name: "UttarPradesh",
          cities: [
            { name: "Lucknow" },
            { name: "Kanpur" },
            { name: "Noida" }
          ]
        }
      ]
    },
    {
      name: "USA",
      states: [
        {
          name: "Illinois",
          cities: [
            { name: "Chicago" },
            { name: "Chicago2" }
          ]
        },
        {
          name: "Texas",
          cities:[
            { name: "Pittsburgh" },
            { name: "Massachusetts" }
          ]
        }
      ]
    }
  ];
  
let selectCountry = document.getElementById("country");
let selectState = document.getElementById("state");
let selectCity = document.getElementById("city");

const clearDropown = (elements,removeAll=false)=>{
  console.log("elements", elements)
  for(let element of elements){
    console.log("element", element);
    let newArray = Array.from(element.options)
    console.log(element.options);
    newArray.forEach(option=>{
      if(!option.disabled){
        console.log("remove", option.value);
        option.remove()
      }
      else{
        if(!removeAll){
          console.log("select",option.value);   
          option.selected = true
        }
      }
    })
  }
}
const populateDropdown=(element, data)=> {
  for (let item of data) {
    let option = document.createElement("option");
    option.value = item.name;
    option.innerText = item.name;
    element.appendChild(option);
  }
}

const updateStateAndCity=(purpose)=> {
  let selectedCountryName = selectCountry.value;
  purpose=="forState" && clearDropown([selectState,selectCity])
  purpose=="forCity" && clearDropown([selectCity])
  let selectedStateName = selectState.value;
  console.log("selectedStateName",selectedStateName);
  
  let selectedCountry = countries.find(country => country.name === selectedCountryName);
  
  if (selectedCountry) {
    console.log("country name" ,selectedCountry.name);
    !selectedStateName && populateDropdown(selectState, selectedCountry.states);
    let selectedState = selectedCountry.states.find(state => state.name === selectedStateName);
    if (selectedState) {
      populateDropdown(selectCity, selectedState.cities);
    }
}}

selectCountry.onchange= ()=>updateStateAndCity("forState");
selectState.onchange=()=>updateStateAndCity("forCity");


const defaultLocationState=()=>{
  selectCountry.innerHTML = ''
  selectState.innerHTML = ''
  selectCity.innerHTML = ''

let defaultCountryOption = document.createElement("option");
defaultCountryOption.value = "";
defaultCountryOption.innerText = "Select a Country";
defaultCountryOption.disabled = true;
defaultCountryOption.selected = true;
selectCountry.appendChild(defaultCountryOption);

// Add a default option for the state dropdown
let defaultStateOption = document.createElement("option");
defaultStateOption.value = "";
defaultStateOption.innerText = "Select a State";
defaultStateOption.disabled = true;
defaultStateOption.selected = true;
selectState.appendChild(defaultStateOption);

// Add a default option for the city dropdown
let defaultCityOption = document.createElement("option");
defaultCityOption.value = "";
defaultCityOption.innerText = "Select a City";
defaultCityOption.disabled = true;
defaultCityOption.selected = true;
selectCity.appendChild(defaultCityOption);  
populateDropdown(selectCountry, countries);

// Trigger initial update
updateStateAndCity("forState");
}
defaultLocationState()




// After submit Actions
form = document.forms.form1
let values = [
  {
    name: "FullName",
    value: "",
    errors: ["cfname", "cfname2"]
  },
  {
    name: "Email",
    value: "",
    errors: ["cemail", "cemail2"]
  },
  {
    name: "Mobile",
    value: "",
    errors: ["cmobile", "cmobile2"]
  },
  {
    name: "Password",
    value: "",
    errors: ["cpassword"]
  },
  {
    name: "CnfPassword",
    value: "",
    errors: ["ccnfpassword", "ccnfpassword2"]
  },
  {
    name: "Country",
    value: "",
    errors: ["ccountry"]
  },
  {
    name: "State",
    value: "",
    errors: ["cstate"]
  },
  {
    name: "City",
    value: "",
    errors: ["ccity"]
  },
  {
    name: "Gender",
    value: "",
    errors: ["cgender"]
  },
  {
    name: "Age",
    value: "",
    errors: ["cage"]
  },
  {
    name: "Summary",
    value: "",
    errors: ["csummary"]
  },
  {
    name: "Website",
    value: "",
    errors: ["cwebsite", "cwebsite2"]
  },
  {
    name: "DOJ",
    value: "",
    errors: ["cdoj"]
  },
  {
    name: "ImageProfile",
    value: "",
    errors: ["cimageprofile"]
  },
  {
    name: "Resume",
    value: "",
    errors: ["cresume"]
  }
];

let errors = [
  {
    name: "cfname",
    value: 1
  },
  {
    name: "cfname2",
    value: 1
  },
  {
    name: "cemail",
    value: 1
  },
  {
    name: "cmobile",
    value: 1
  },
  {
    name: "cemail2",
    value: 1
  },
  {
    name: "cmobile2",
    value: 1
  },
  {
    name: "cpassword",
    value: 1
  },
  {
    name: "ccnfpassword",
    value: 1
  },
  {
    name: "ccnfpassword2",
    value: 1
  },
  {
    name: "ccountry",
    value: 1
  },
  {
    name: "cstate",
    value: 1
  },
  {
    name: "ccity",
    value: 1
  },
  {
    name: "cgender",
    value: 1
  },
  {
    name: "cage",
    value: 1
  },
  {
    name: "csummary",
    value: 1
  },
  {
    name: "cwebsite",
    value: 1
  },
  {
    name: "cwebsite2",
    value: 1
  },
  {
    name: "cdoj",
    value: 1
  },
  {
    name: "cimageprofile",
    value: 1
  },
  {
    name: "cresume",
    value: 1
  }
];

const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log("calling handle sbmit");
  fillValuesAndErrors()
  let canSubmit = 1
  canSubmit = handleError()
    if(canSubmit){
      // console.log("can submit the form-- zero errors");
        document.getElementById("table-container").childNodes.length==0 && createTable()
        fillTableFromValues()
        alert("Submitted")    
        resetForm()        
        return true
    } 
    return false;
}
// fill values in object from table and also fill errors object

const fillValuesAndErrors=()=>{
  // console.log("fill values from form and change errros");
  for(let item of values){
    item.value = form[item.name].value
    if(item.name == "ImageProfile"){
      if(form["selectedImage"])
        item.value = form["selectedImage"].src
    }
    if(item.name == "Resume"){
      // console.log("entered resume");
      if(form.querySelector("#selectedResume"))
        // console.log("entered resune 2");
        item.value = form.querySelector("#selectedResume").src
    }
    // console.log(item.name+ " : " + item.value);

    let err= errors.find(error=>error.name==item.errors[0])
    if(item.value==""){
      err["value"] = 1  
    }
    else{
      err["value"] = 0
    }
  }
  let name1 = form["FullName"].value
  let email1 = form["Email"].value
  let mobile1 = form["Mobile"].value
  let password1 = form["Password"].value
  let cpassword1 = form["CnfPassword"].value
  let website1 = form["Website"].value
  let errName= errors.find(error=>error.name=="cfname2")
  let errEmail= errors.find(error=>error.name=="cemail2")
  let errMobile= errors.find(error=>error.name=="cmobile2")
  let errPassword= errors.find(error=>error.name=="ccnfpassword2")
  let errWebsite= errors.find(error=>error.name=="cwebsite2")
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)?(:\d+)?(\/\S*)?$/;
  
  if(name1!=="" && name1.length<=2){
    errName["value"] = 1
  }
  else{
    errName["value"] = 0
  }
  if (email1!=="" && !emailPattern.test(email1)) {
    errEmail["value"] = 1 
  }
  else{
    errEmail["value"] = 0 
  }
  
  if (mobile1!=="" && !/^[0-9]{10}$/.test(mobile1)) {
    errMobile["value"] = 1
  }
  else{
    errMobile["value"] = 0
  }

  if( password1!=="" && cpassword1!=="" &&  password1!==cpassword1){
    errPassword["value"] = 1 
  }
  else{
    errPassword["value"] = 0 
  }
  if(website1!=="" && !urlPattern.test(website1)){
    errWebsite["value"] = 1 
  }
  else{
    errWebsite["value"] = 0 
  }
} 
const handleError = ()=>{
  // console.log("displAYING ERRORS");
  let errorFields = document.getElementsByClassName("error-message")
  let flag = 1
  for(let item of errors){
    if(item.value==1){      
      errorFields[item["name"]].style.display = "block"
      flag = 0
    }    
    else{
      errorFields[item["name"]].style.display = "none"
    }
  }
  return flag;
}


const createTable = ()=>{
  // console.log("Creating table");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headerRow = document.createElement("tr");
  let thAction = document.createElement("th")
  table.id = "data-table"
  tbody.id = "table-body"
  thead.id = "table-head"
  for (let field of values) {
    let th = document.createElement("th");
    th.textContent = field.name;
    headerRow.appendChild(th);
  }
  thAction.textContent = "Actions"
  headerRow.appendChild(thAction)
  thead.appendChild(headerRow);
  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("table-container").appendChild(table);
}

const fillTableFromValues = ()=>{
  // console.log("fill table from values");
  let dataRow = document.createElement("tr");
  let tbody = document.getElementById("table-body")
  let tdAction = document.createElement("td")
  for (let field of values) {
    let td = document.createElement("td");
    if(field.name=="ImageProfile")
    {      
      console.log(field.value);
          td.innerHTML = `<img src =${field.value} width = 80px height = auto><img/>`
    }else if(field.name=="Resume")
    { 
          //  console.log(field.value);
          td.innerHTML = `<iframe src =${field.value} width = 80px height = auto><iframe/>`
    }   
    else
      {   td.innerHTML = field.value;}
        dataRow.appendChild(td);
  }
  tdAction.innerHTML = '<button class = "edit-button" onclick="editRow(this)">Edit</button> <button class = "delete-button" onclick="deleteRow(this)">Delete</button>';

  dataRow.appendChild(tdAction)
  tbody.appendChild(dataRow);
}
const fillValuesFromTable = (button)=>{
  // console.log("fill values from table");
  let row = button.parentNode.parentNode.childNodes
  let i=0
  for(let item of values){
    if(item.name == "ImageProfile" || item.name=="Resume"){
      console.log("imagefilled",row[i].children[0].src);
      item.value=row[i].children[0].src
    }
    else{
      item.value = row[i].innerText
      console.log(item.name + ":" + item.value);
    }
    i++
  }
}
const fillFormFromValues = ()=>{
  console.log("filling form from values")
  for(let item of values){
    if(item.name=="ImageProfile" || item.name=="Resume"){
      let dataURL = item.value;  
      const parts = dataURL.split(";base64,");
      const mimeType = parts[0];
      const base64Data = atob(parts[1]); // Decode the base64 data

      // Convert the binary data to an array buffer
      const arrayBuffer = new ArrayBuffer(base64Data.length);
      const view = new Uint8Array(arrayBuffer);
      for (let i = 0; i < base64Data.length; i++) {
        view[i] = base64Data.charCodeAt(i);
      }

      // Create a Blob from the array buffer
      const blob = new Blob([arrayBuffer], { type: mimeType });

      const fileName = item.name=="Resume"? "your_document":"your_image"; // Specify the desired file name
      const fileType = mimeType.split(":")[1]; // Specify the desired MIME type// Set the desired filename
      console.log("filetype: ", fileType);

      let imageFile = new File([blob], fileName, { type: fileType });  // Adjust the type accordingly
      let fileList = new DataTransfer();

      fileList.items.add(imageFile);
      form[item.name].files = fileList.files
      item.name=="Resume"? editResumeInput():editImageInput()
    }
    else if(item.name=="Country"){
        // populateDropdown(selectCountry,countries)
        form[item.name].value=item.value
        updateStateAndCity("forState");
    }
    else if(item.name == "State"){
      form[item.name].value = item.value
      updateStateAndCity("forcity")
    }
    else if(item.name == "City"){
      form[item.name].value = item.value
    }
    else
      form[item.name].value =item.value
  }
}


const deleteRow= (button)=> {
  // console.log("deleting row");
  // console.log(button);
  let row = button.parentNode.parentNode
  row.parentNode.removeChild(row) 
  document.getElementById("data-table").children["table-body"].children.length == 0 && 
  document.getElementById("data-table").remove()
}

const editRow= (button)=>{
  let row = button.parentNode.parentNode
  // console.log("editing row", row);
  // console.log("button: ", button);
  enableSaveButton(button)
  fillValuesFromTable(button)
  resetForm()
  fillFormFromValues()
  // editResumeInput()
  // editImageInput()
  scrollToTop()
}
const updateRowData = (button)=>{
  // console.log("updating row");
  fillValuesAndErrors()
  let canSave = handleError()
  if(canSave){
    updateTableFromValues(button)
    alert("saved")
    disableSaveButton()
    resetForm()
  }
}

const updateTableFromValues=(button)=>{
  // console.log("updating table from values"+ button);
  let row = button.parentNode.parentNode.childNodes
  let i=0
  for(let field of values){
    if(field.name=="ImageProfile")
    {      
      console.log(field.value);
          row[i].innerHTML = `<img src =${field.value} width = 80px height = auto><img/>`
    }else if(field.name=="Resume")
    { 
          //  console.log(field.value);
          row[i].innerHTML = `<iframe src =${field.value} width = 80px height = auto><iframe/>`
    }   
    else
      {   row[i].innerHTML = field.value;}
    // console.log(field.name + ":" + field.value);
    i++
  }}

const enableSaveButton=(button)=> {
  // console.log("display save button");
    document.getElementById("save-button").classList.remove("hide")
    document.getElementById("save-button").onclick = ()=> updateRowData(button) 
    !document.getElementById("submit").classList.contains("hide") && document.getElementById("submit").classList.add("hide")
}

const disableSaveButton = ()=>{
  // console.log("disable save button");
  !document.getElementById("save-button").classList.contains("hide") && document.getElementById("save-button").classList.add("hide")
  document.getElementById("submit").classList.remove("hide")    
}

const scrollToTop =() => window.scrollTo(
  {
    top: 0,
    behavior: "smooth" // For smooth scrolling animation
  }
);
const resetForm = ()=>{
  form.reset()
  defaultLocationState()
  form.querySelector("#selectedResume")?.remove()
  form.querySelector("#selectedImage")?.remove()
}

let imageInput = document.getElementById("image-profile")
imageInput.onchange = ()=>{
  console.log("on image change");
  if(imageInput.files && imageInput.files[0]){
    console.log("on image input");
    let selectedImage = form["selectedImage"] || document.createElement("img")
    selectedImage.id = "selectedImage"
    selectedImage.style.width = "150px"
    selectedImage.style.height = "auto"
    let reader = new FileReader()
    reader.onload= e=>{
      selectedImage.src = e.target.result
      console.log(selectedImage.src);
    }
    reader.readAsDataURL(imageInput.files[0]);
    imageInput.parentNode.insertBefore(selectedImage, imageInput.nextSibling);

  }
  else{
    console.log("remove image called");
    form.querySelector("#selectedImage").remove()
  }
}

let resumeInput = document.getElementById("resume")
resumeInput.onchange = ()=>{
  console.log("change resume callled");
  if(resumeInput.files && resumeInput.files[0]){
    console.log("on resume input");
    let selectedResume = form.querySelector("#selectedResume") || document.createElement("iframe")
    selectedResume.id = "selectedResume"
    selectedResume.style.width = "150px"
    selectedResume.style.height = "auto"
    let reader = new FileReader()
    reader.onload= e=>{
      selectedResume.src = e.target.result
      console.log(selectedResume.src);
    }
    reader.readAsDataURL(resumeInput.files[0]);
    resumeInput.parentNode.insertBefore(selectedResume, resumeInput.nextSibling);
  }
  else{
    console.log("remove resume callled");
    form.querySelector("#selectedResume").remove()
  }
}

const editResumeInput = ()=>{
  let resumeInput = document.getElementById("resume")
  console.log("change resume callled");
  if(resumeInput.files && resumeInput.files[0]){
    console.log("on resume input");
    let selectedResume = form.querySelector("#selectedResume") || document.createElement("iframe")
    selectedResume.id = "selectedResume"
    selectedResume.style.width = "150px"
    selectedResume.style.height = "auto"
    let reader = new FileReader()
    reader.readAsDataURL(resumeInput.files[0]);
    reader.onload= e=>{
      selectedResume.src = e.target.result
      console.log(selectedResume.src);
    }
    resumeInput.parentNode.insertBefore(selectedResume, resumeInput.nextSibling);
  }
  else{
    console.log("remove resume callled");
    form.querySelector("#selectedResume").remove()
  }
}

const editImageInput = ()=>{
  let imageInput = document.getElementById("image-profile")
  console.log("on image change");
  if(imageInput.files && imageInput.files[0]){
    console.log("on image input");
    let selectedImage = form["selectedImage"] || document.createElement("img")
    selectedImage.id = "selectedImage"
    selectedImage.style.width = "150px"
    selectedImage.style.height = "auto"
    let reader = new FileReader()
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload= e=>{
      selectedImage.src = e.target.result
      console.log(selectedImage.src);
    }
    imageInput.parentNode.insertBefore(selectedImage, imageInput.nextSibling);

  }
  else{
    console.log("remove image called");
    form.querySelector("#selectedImage").remove()
  }
}
