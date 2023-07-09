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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Prevent default form submission

    // Get input field values
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    var message = document.getElementById("message").value

    // Create JSON object with form data
    var formData = {
      name: name,
      email: email,
      message: message,
    }

    // Send POST request to server-side script
    fetch("send_email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // Handle response from server-side script (e.g., display success message)
        console.log(data)
      })
      .catch(function (error) {
        // Handle error
        console.error(error)
      })
  })
