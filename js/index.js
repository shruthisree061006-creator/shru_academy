const eventName = document.getElementById("eventName")
const eventDate = document.getElementById("eventDate")
const eventLocation = document.getElementById("eventLocation")
const eventCategory = document.getElementById("eventCategory")
const eventDescription = document.getElementById("eventDescription")
const eventImage = document.getElementById("eventImage")
const addbtn = document.getElementById("addbtn");
const displaydiv = document.getElementById("displaydiv");
const eventcontainer = document.getElementById("eventcontainer");
const eventsestiontable = document.querySelector(".eventsestiontable");
eventsestiontable.style.display = "none";



// console.log('shruthi');
// alert()

addbtn.addEventListener("click",function crudprogram(){
    eventcontainer.style.display = "none";
    eventsestiontable.style.display = "block";

   const eventNamevalues = eventName.value;
   const eventDatevalues = eventDate.value;
   const eventLocationvalues = eventLocation.value;
   const eventCategoryvalues = eventCategory.value;
   const eventDescriptionvalues = eventDescription.value;
   const eventImagevalues =eventImage.value;

   if (
    eventName.value === "" ||
    eventDate.value === "" ||
    eventLocation.value === "" ||
    eventCategory.value === "" ||
    eventDescription.value === ""
) {
    alert("Please fill all fields");
    return;
}
//    const newdiv = document.createElement("div");
//    displaydiv.appendChild(newdiv);

   const trcreate = document.createElement("tr")
   const eventImagevaluetd  = document.createElement("td");
   const eventNamevaluestd  = document.createElement("td");
   const eventDatevaluestd  = document.createElement("td");
   const eventLocationvaluestd  = document.createElement("td");
   const eventCategoryvaluestd  = document.createElement("td");
   const eventDescriptionvaluestd  = document.createElement("td");
   const Actionstd  = document.createElement("td");




   const newinputtagforimage = document.createElement("img");
    newinputtagforimage.src = eventImagevalues;
    newinputtagforimage.setAttribute("readonly","readonly");
    eventImagevaluetd.appendChild(newinputtagforimage);
    newinputtagforimage.classList.add('formimg')

   const newinputtag = document.createElement("input");
    newinputtag.value = eventNamevalues;
    newinputtag.setAttribute("readonly","readonly");
    eventNamevaluestd.appendChild(newinputtag);
    newinputtag.classList.add('inputtagborder')


    const newinputtagfordate = document.createElement("input");
    newinputtagfordate.value = eventDatevalues;
    newinputtagfordate.setAttribute("readonly","readonly");
    eventDatevaluestd.appendChild(newinputtagfordate);
    newinputtagfordate.classList.add('inputtagborder')

    const newinputtagforlocation = document.createElement("input");
    newinputtagforlocation.value = eventLocationvalues;
    newinputtagforlocation.setAttribute("readonly","readonly");
    eventLocationvaluestd.appendChild(newinputtagforlocation);
    newinputtagforlocation.classList.add('inputtagborder')

    const newinputtagforcategory = document.createElement("input");
    newinputtagforcategory.value = eventCategoryvalues;
    newinputtagforcategory.setAttribute("readonly","readonly");
    eventCategoryvaluestd.appendChild(newinputtagforcategory);
    newinputtagforcategory.classList.add('inputtagborder')

    const newinputtagfordescription = document.createElement("input");
    newinputtagfordescription.value = eventDescriptionvalues;
    newinputtagfordescription.setAttribute("readonly","readonly");
    eventDescriptionvaluestd.appendChild(newinputtagfordescription);
    newinputtagfordescription.classList.add('inputtagborder')

    
    const neweditbutton = document.createElement("button");
    neweditbutton.innerHTML = "Edit"
    Actionstd.appendChild(neweditbutton);
    neweditbutton.classList.add("editbtn");

    const newsavebutton = document.createElement("button");
    newsavebutton.innerHTML = "Save";
    Actionstd.appendChild(newsavebutton);
    newsavebutton.classList.add("editbtn");

    const newdeletebutton = document.createElement("button");
    newdeletebutton.innerHTML = "Delete";
    Actionstd.appendChild(newdeletebutton);
    newdeletebutton.classList.add("editbtn");

    trcreate.appendChild(eventImagevaluetd);
    trcreate.appendChild(eventNamevaluestd);
    trcreate.appendChild(eventDatevaluestd);
    trcreate.appendChild(eventLocationvaluestd);
    trcreate.appendChild(eventCategoryvaluestd);
    trcreate.appendChild(eventDescriptionvaluestd);
    trcreate.appendChild(Actionstd);

    displaydiv.appendChild(trcreate)


    neweditbutton.addEventListener("click",function editfunction() {
        newinputtagforimage.removeAttribute("readonly");
        newinputtag.removeAttribute("readonly");
        newinputtagfordate.removeAttribute("readonly");
        newinputtagforlocation.removeAttribute("readonly");
        newinputtagforcategory.removeAttribute("readonly");
        newinputtagfordescription.removeAttribute("readonly");
        
});

    

    newsavebutton.addEventListener("click",function savefunction() {
        newinputtagforimage.setAttribute("readonly", "readonly");
        newinputtag.setAttribute("readonly", "readonly");
        newinputtagfordate.setAttribute("readonly", "readonly");
        newinputtagforlocation.setAttribute("readonly", "readonly");
        newinputtagforcategory.setAttribute("readonly", "readonly");
        newinputtagfordescription.setAttribute("readonly", "readonly");
       

    });

  

    newdeletebutton.addEventListener("click",function deletefunction() {
    trcreate.remove();

    });

});