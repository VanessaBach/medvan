import { Controller } from "@hotwired/stimulus"
import { CountUp } from 'countup.js';

export default class extends Controller {

  static targets = ["medication", "patient", "center"]

  connect() {
    this.counted = false
  }

  updateNumber() {
    if ((window.scrollY >= window.innerHeight - 500) && !this.counted)  {
      const countUp = new CountUp(this.medicationTarget, 6320);
      countUp.start()

      const countUp2 = new CountUp(this.patientTarget, 3884);
      countUp2.start()

      const countUp3 = new CountUp(this.centerTarget, 1501);
      countUp3.start()

      this.counted = true
    }
  }
}
