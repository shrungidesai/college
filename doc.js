// Doctor data
var doctors = [
    { name: "Dr. Meenu Walia", photo: "doctor1.jpg", available: true },
    { name: "Dr. Sachin Gupta", photo: "doctor2.jpg", available: false },
    { name: "Dr. Shikha Halder", photo: "doctor3.jpg", available: true },
    { name: "Dr. Satyam Taneja", photo: "doctor4.jpg", available: true },
    { name: "Dr. Charu Garg", photo: "doctor5.jpg", available: false },
  ];
  
  // Generate doctor list HTML
  function generateDoctorList() {
    var doctorListElem = document.getElementById("doctor-list");
  
    doctors.forEach(function (doctor) {
      var listItemElem = document.createElement("li");
      listItemElem.innerHTML = `
        <div>
          <img class="doctor-photo" src="${doctor.photo}" alt="${doctor.name}">
          <div>
            <h3>${doctor.name}</h3>
            <p>Status: <span class="${doctor.available ? 'available' : 'not-available'}">${doctor.available ? 'Available' : 'Not Available'}</span></p>
          </div>
        </div>
      `;
      doctorListElem.appendChild(listItemElem);
    });
  }
  
  // Wait for the page to load
  document.addEventListener("DOMContentLoaded", function() {
    generateDoctorList();
  });
  