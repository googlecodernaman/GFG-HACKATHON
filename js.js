document.addEventListener('DOMContentLoaded', function() {
   const donorsList = document.getElementById('donors');
   const bloodRequestForm = document.getElementById('bloodRequestForm');

   function addDonor(name, bloodType) {
       const listItem = document.createElement('li');
       listItem.textContent = `Name: ${name}, Blood Type: ${bloodType}`;
       donorsList.appendChild(listItem);
   }

   function handleBloodRequest(event) {
       event.preventDefault();
       const patientName = document.getElementById('patientName').value;
       const bloodType = document.getElementById('bloodType').value;

       if (patientName && bloodType) {
           addDonor(patientName, bloodType);
           bloodRequestForm.reset();
       }
   }

   bloodRequestForm.addEventListener('submit', handleBloodRequest);

   // Dummy data for initial donors list
   addDonor('John Doe', 'A+');
   addDonor('Jane Doe', 'B-');
   addDonor('Sam Smith', 'O+');
});
