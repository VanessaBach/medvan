import { Controller } from "@hotwired/stimulus"
import { csrfToken } from "@rails/ujs"


export default class extends Controller {
  static targets = ["results", "form", "input"]

  connect() {
  }

  search(event) {
    event.preventDefault()
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`

    fetch(url, {
      method: "get",
      headers: { "Accept": "application/json", "X-CSRF-Token": csrfToken() },
    })
    .then(response => response.json())
    .then((data) => {
      this.resultsTarget.insertAdjacentHTML("afterbegin", "<h4>Nome do medicamento:</h4>")
      console.log(data)
      data.forEach( (med) => {
        this.resultsTarget.classList.remove("d-none")

        this.resultsTarget.insertAdjacentHTML('beforeend', med)
        })
      })
  }

}
