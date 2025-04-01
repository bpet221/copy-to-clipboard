<a href="#" class="btn" id="custom1-trigger-btn">
  <span class="dot"></span>
  <span class="label default">Let's talk</span>
  <span class="label hover">Let's talk</span>
</a>

<!-- Hidden button that needs to be clicked -->
<button id="button-vILF0UtI11" style="display: none;">Hidden Trigger</button>

<script>
  document.querySelector("#custom1-trigger-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const triggerButton = document.querySelector("#button-vILF0UtI11_btn");
    if (triggerButton) {
      triggerButton.click();
    } else {
      console.error("Trigger button with ID not found.");
    }
  });
</script> 