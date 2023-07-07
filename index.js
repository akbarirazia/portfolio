// Wait for the page to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Get the reference to the website element
  const websiteElement = document.getElementById("h1")
  const text = "THIS IS MY PORTFLIO"
  let currentIndex = 0
  let isDeleting = false

  // Function to type and delete the text
  function typeAndDelete() {
    const currentText = websiteElement.innerHTML

    if (!isDeleting) {
      websiteElement.innerHTML = currentText + text[currentIndex]
      currentIndex++

      if (currentIndex === text.length) {
        isDeleting = true
        setTimeout(typeAndDelete, 2000)
        return
      }
    } else {
      websiteElement.innerHTML = currentText.slice(0, -1)

      if (currentText.length === 0) {
        isDeleting = false
        currentIndex = 0
      }
    }

    const typingSpeed = isDeleting ? 100 : 300
    setTimeout(typeAndDelete, typingSpeed)
  }

  // Start typing and deleting
  typeAndDelete()
})
