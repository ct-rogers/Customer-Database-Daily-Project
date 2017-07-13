const ul = document.querySelector("ul")

customers.results.forEach(function(customer) {
  const li = document.createElement("li")

  const img = document.createElement("img")
  img.src = customer.picture.large
  li.appendChild(img)

  const name = document.createElement("h2")
  name.classList.add("name")
  name.textContent = `${customer.name.first}, ${customer.name.last}`
  li.appendChild(name)

  const email = document.createElement("p")
  email.classList.add("email")
  email.textContent = `${customer.email}`
  li.appendChild(email)

  const address = document.createElement("address")
  const street = document.createElement("p")
  street.textContent = `${customer.location.street}`
  li.appendChild(street)

  const cityStatePostcode = document.createElement("p")
  cityStatePostcode.textContent = `${customer.location.city}, ${customer.location.state}, ${customer.location.postcode}`
  li.appendChild(cityStatePostcode)

  const phone = document.createElement("p")
  phone.textContent = `${customer.phone}`
  li.appendChild(phone)

  const ssn = document.createElement("p")
  ssn.classList.add("ssn", "no-blur")
  ssn.textContent = `${customer.id.value}`

  ssn.addEventListener("mouseover", function() {
    if (ssn.className != "no-blur") {
      ssn.className = "no-blur"
    }
  })

  li.appendChild(address)

  ul.appendChild(li)
})
