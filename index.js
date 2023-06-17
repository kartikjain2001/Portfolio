function sendMail() {
  var params = {
    name: document.getElementsByName("name").value,
    email: document.getElementsByName("email").value,
    subject: document.getElementsByName("subject").value,
    message: document.getElementsByName("message").value
  };
  const serviceID = "service_17sgp73";
  const templateID = "template_8o4u40j";

  emailjs
    .send(serviceID, templateID, params)
    .then(res => {
      document.getElementsByName("name").value = "";
      document.getElementsByName("name").value = "";
      document.getElementsByName("name").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch(err => console.log(err));
}
