const ul = document.querySelector('ul')

customers.results.forEach(function(customer) {
  const li = document.createElement('li')

  const img = document.createElement('img')
  img.src = customer.picture.large
  li.appendChild(img)

  const nameHeader = document.createElement('h2')
  const name = document.createElement('span')
  name.textContent = `${customer.name.first}, ${customer.name.last}`
  li.appendChild(nameHeader)

  const address = document.createElement('address')

  const email = document.createElement('p')
  email.classList.add('email')
  email.textContent = customer.email
  address.appendChild(email)

  const cityStatePostcode = document.createElement('p')
  cityStatePostcode.textContent = `${customer.location.city}, ${customer.location.state}, ${customer.location.postcode}`
  address.appendChild(cityStatePostcode)

  const phone = document.createElement('p')
  phone.textContent = customer.cell
  address.appendChild(phone)

  li.appendChild(address)

  ul.appendChild(li)
}
