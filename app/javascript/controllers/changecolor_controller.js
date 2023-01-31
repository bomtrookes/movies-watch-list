import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="changecolor"
export default class extends Controller {
  static targets = [ "title" ]

  connect() {
    console.log("change color connected")
  }

  change() {
    titleTarget.style.color = "red"
  }
}
