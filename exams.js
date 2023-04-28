class ExamEvent {
    constructor(date, subject, room, cfu, color, isPartial, partialId, partialNumber, obfuscate) {
      this.date = date;
      this.subject = subject;
      this.room = room;
      this.cfu = cfu;
      this.color = color;
      this.isPartial = isPartial;
      this.partialId = partialId;
      this.partialNumber = partialNumber;
      this.obfuscate = obfuscate
    }
  
    getCountdown() {
      let now = new Date();
      let diff = this.date - now;
  
      if (diff < 0) {
        return "";
      }
  
      let days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      let seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
  
      let countdown_html =
        `<div> ${days} <br> Days</div> 
      <div> ${hours} <br> Hours</div> 
      <div> ${minutes} <br> Minutes</div> 
      <div> ${seconds} <br> Seconds</div>`;
  
      return countdown_html;
    }
  
    getHTML() {
      let opacity = 1
      if (this.obfuscate == true || this.date - new Date() < 0) {
        opacity = 0.5
      }
      let exam_html = `<div class="exam" style="background-color: ${this.color}; opacity: ${opacity}">
        <div class="exam-title">${this.subject}</div>
        <div class="exam-date">${this.date.toLocaleDateString('it-IT', { weekday: "long", month: "short", day: "numeric", year: "numeric", })}</div>
        <div class="exam-room">${this.room}</div>
        <div class="exam-cfu">${this.cfu} CFU</div>
        <div class="exam-countdown">${this.getCountdown()}</div>
      </div>
      `;
      if (this.isPartial == true && this.partialNumber <= 1) {
        console.log("Parziale inizializzato")
        return `<div class="partial-container"> ${exam_html} </div>`;
      } else {
  
        console.log("P")
      }
      return exam_html;
    }
  }
  
  function updateCountdowns() {
    const countdownElements = document.querySelectorAll(".exam-countdown");
    for (let i = 0; i < examEvents.length; i++) {
      const countdown = examEvents[i].getCountdown();
      countdownElements[i].innerHTML = countdown;
    }
  }
  
  