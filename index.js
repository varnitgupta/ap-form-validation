let countries = [
    {
      name: "India",
      states: [
        {
          name: "MadhyaPradesh",
          cities: ["Gwalior", "Indore", "Ujjain"]
        },
        {
          name: "UttarPradesh",
          cities: ["Lucknow", "Kanpur", "Noida"]
        }
      ]
    },
    {
      name: "USA",
      states: [
        {
          name: "Illinois",
          cities: ["Chicago", "Chicago2"]
        },
        {
          name: "Texas",
          cities: ["Pitsburg", "Messachhusets"]
        }
      ]
    }
  ];

let selectCountry = document.getElementById("country");
let selectState = document.getElementById("state");
let selectCity = document.getElementById("city");

function populateDropdown(element, data) {
    element.innerHTML = ""; // Clear existing options
    for (let item of data) {
      let option = document.createElement("option");
      option.value = item.name;
      option.innerText = item.name;
      element.appendChild(option);
    }
}

function updateStateAndCity() {
    let selectedCountryName = selectCountry.value;
    let selectedStateName = selectState.value;
  
    let selectedCountry = countries.find(country => country.name === selectedCountryName);
  
    if (selectedCountry) {
      populateDropdown(selectState, selectedCountry.states);
  
      let selectedState = selectedCountry.states.find(state => state.name === selectedStateName);
  
      if (selectedState) {
        populateDropdown(selectCity, selectedState.cities);
      } else {
        selectCity.innerHTML = ""; // Clear City dropdown if no state selected
      }
    } else {
      selectState.innerHTML = ""; // Clear State dropdown if no country selected
      selectCity.innerHTML = ""; // Clear City dropdown if no state selected
    }
  }
  
  // Event listeners to trigger updates
  selectCountry.addEventListener("change", updateStateAndCity);
  selectState.addEventListener("change", updateStateAndCity);
  
  // Initialize the Country dropdown
  populateDropdown(selectCountry, countries);
  
  // Trigger initial update
  updateStateAndCity();
  






function handleSubmit(e){
    e.preventDefault()
    let errors = {
        fname:1,
        email:1,
        mobile:1
    }
    form = document.forms.form1
    let fname = form.fname.value
    let email = form.email.value
    let mobile = form.mobile.value
    let resume = form.resume
    if(fname.trim()==""){
        alert("Name must be filled out")
        return ;
    }
    if(email==""){
        alert("email must be filled out")
        return ;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return ;
    }
    
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Invalid mobile number. Please enter a 10-digit phone number.");
        return;
    }

    if(!resume.files || resume.files.length==0){
        alert("please upload your resume")
        return;
    }
    let allowedResumeFormats = [".pdf",".doc",".docx"]
    let validResume = false
    let resumeName = resume.value.split("\\")[2]
    console.log(resumeName);
    for(let i=0;i<allowedResumeFormats.length;i++){
        if(resumeName.endsWith(allowedResumeFormats[i])){
            validResume = true
            break;
        }
    }
    if(!validResume){
        alert("Enter a valid file(.pdf,.doc,.docx)")
        return
    }



    let x=document.getElementById("fname").value
    let table = document.getElementById("data-table")
    let tr= document.createElement("tr")
    let td = document.createElement("td")
    td.innerText=x
    tr.appendChild(td)
    table.appendChild(tr)
    alert("Submitted")
}

