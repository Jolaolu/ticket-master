import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
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
  created () {
    dayjs.extend(advancedFormat)
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
    // formats to something like  21st september 2019
    format: function (date) {
      return dayjs(date).format('Do MMMM YYYY')
    },
    // formats to something like "Sunday, September 9th 2018, 7:12 PM"
    formatdate: function (date) {
      return dayjs(date).format('dddd, MMMM Do YYYY, h:mm A')
    },
    // get minimum and maximum of a price
    getMinMax: function (tickets) {
      const price = []
      tickets.map(ticket => {
        price.push(ticket.price)
      })
      const min = Math.min(...price)
      const max = Math.max(...price)
      let minMax
      max === min ? minMax = `N${max.toLocaleString()}` : minMax = `N${min.toLocaleString()} - N${max.toLocaleString()}`
      return minMax
    }
  },
  filters: {
  }
}
