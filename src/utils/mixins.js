export default {
  data: function () {
    return {
      notificationSystem: {
        options: {
          ballon: {
            position: 'topRight'
          },
          info: {
            position: 'topRight'
          },
          success: {
            position: 'topRight'
          },
          warning: {
            position: 'topRight'
          },
          error: {
            position: 'topRight'
          }
        }
      }
    }
  },
  mounted () {
    // Example Implementations for Toast

    // this.$toast.info('Welcome!', 'Hello', this.notificationSystem.options.info)
    // this.$toast.success(
    //   'Example!',
    //   'Example implementation',
    //   this.notificationSystem.options.success
    // )
    // this.$toast.warning('You forgot important data', 'Caution', this.notificationSystem.options.warning)
    // this.$toast.error('Illegal operation', 'Error', this.notificationSystem.options.error)
  },
  methods: {
    handleError (error) {
      if (error.message === 'Network Error') {
        this.$toast.error(
          'Connection not established, please check your internet connection',
          '',
          this.notificationSystem.options.error
        )
      } else {
        this.$toast.error(
          error.response.data.message,
          '',
          this.notificationSystem.options.error
        )
      }
    },
    /**
     * only return numbers
     */
    isNumber (evt) {
      evt = evt || window.event
      var charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },

    /**
  *  The function generates a random number for a colour in an array
  *
  * @param {Number} payload  length of the array
  */
    getRandomNumber: function (payload) {
      const number = Math.floor(Math.random() * payload)
      return number
    }
  },
  filters: {
  }
}
