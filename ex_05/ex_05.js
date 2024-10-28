new Vue({
  el: '#app',
  data: {
      message: ''
  },
  created() {
      // Get the current time and set the message
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.message = `The current time is ${currentTime}.`;
  }
});
