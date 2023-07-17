// // Wait for the page to finish loading
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the reference to the website element
//   const websiteElement = document.getElementById("type")
//   const array = ["THIS IS MY PORTFLIO", "MY NAME IS RAZIA", "HELLO WORLD"]
//   let currentIndex = 0
//   let isDeleting = false

//   // Function to type and delete the text
//   function typeAndDelete() {
//     const currentText = websiteElement.innerHTML

//     if (!isDeleting) {
//       for (let index = 0; index < array.length; index++) {
//         const element = array[index]

//         websiteElement.innerHTML = currentText + element[currentIndex]
//         currentIndex++

//         if (currentIndex === element.length) {
//           isDeleting = true
//           setTimeout(typeAndDelete, 2000)
//           return
//         }
//       }
//     } else {
//       websiteElement.innerHTML = currentText.slice(0, -1)

//       if (currentText.length === 0) {
//         isDeleting = false
//         currentIndex = 0
//       }
//     }

//     const typingSpeed = isDeleting ? 100 : 300
//     setTimeout(typeAndDelete, typingSpeed)
//   }

//   // Start typing and deleting
//   typeAndDelete()
// })
// var all = document.getElementsByTagName("*"),
//   i = 0,
//   rect,
//   docWidth = document.documentElement.offsetWidth
// for (; i < all.length; i++) {
//   rect = all[i].getBoundingClientRect()
//   if (rect.right > docWidth || rect.left < 0) {
//     console.log(all[i])
//     all[i].style.borderTop = "1px solid red"
//   }
// }
// window.addEventListener("scroll", function () {
//   var navbar = document.getElementById("navbar")
//   var content = document.getElementsByTagName("*")

//   if (window.pageYOffset > navbar.offsetHeight) {
//     content.classList.add("blur")
//   } else {
//     content.classList.remove("blur")
//   }
// })
// const texts = ["THIS IS MY PORTFOLIO", "MY NAME IS RAZIA", "HELLO WORLD"]
// const typeContainer = document.getElementById("type")

// function typeAndDelete(text) {
//   return new Promise((resolve, reject) => {
//     let currentIndex = 0
//     let intervalId

//     intervalId = setInterval(() => {
//       if (currentIndex < text.length) {
//         typeContainer.textContent += text[currentIndex]
//         currentIndex++
//       } else {
//         clearInterval(intervalId)

//         setTimeout(() => {
//           intervalId = setInterval(() => {
//             const currentText = typeContainer.textContent
//             typeContainer.textContent = currentText.slice(0, -1)
//             currentIndex--

//             if (currentIndex === 0) {
//               clearInterval(intervalId)
//               resolve()
//             }
//           }, 100)
//         }, 1000)
//       }
//     }, 100)
//   })
// }

// async function autoTypeAndDelete() {
//   while (true) {
//     for (let i = 0; i < texts.length; i++) {
//       await typeAndDelete(texts[i])
//       typeContainer.innerHTML += "<br>" // Add a line break after each text is deleted
//     }
//   }
// }

// autoTypeAndDelete()

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault() // Prevent default form submission

//     // Get input field values
//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value

//     var message = document.getElementById("message").value

//     // Create JSON object with form data
//     var formData = {
//       name: name,
//       email: email,
//       message: message,
//     }

let sendMessage = document.getElementById("sendMessage")
sendMessage.addEventListener("click", (e) => {
  e.preventDefault()
  sendMail()
})
function sendMail(e) {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_gbeqyjq"
  const templateID = "template_cehrdzh"

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      console.log(res)
      alert("Your message sent successfully!!")
    })
    .catch((err) => console.log(err))
}

// window.addEventListener("scroll", (e) => {
//   console.log(e.target.)
// })
const elements = document.querySelectorAll(".section")

// Function to check which element is in view
function checkInView() {
  const scrollPosition = window.scrollY

  elements.forEach((element) => {
    const elementTop = element.offsetTop
    const elementBottom = elementTop + element.offsetHeight

    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
      if (element) {
        // Element with ID "skill log" exists

        if (element.id == "about" || element.id == "skills") {
          let ul = document.getElementById("ul")
          ul.style.border = "2px solid black"

          var anchor = ul.getElementsByTagName("a")
          for (var i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "black"
          }
        } else {
          let ul = document.getElementById("ul")
          ul.style.border = "2px solid white"
          var anchor = ul.getElementsByTagName("a")
          for (var i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "white"
            // anchor[i].style.zIndex = "99999"
          }
        }
      } else {
        // Element with ID "skill log" does not exist
        console.log("Element with ID 'skill log' not found!")
      }
    }
  })
}

// Call the function on scroll event
window.addEventListener("scroll", checkInView)
