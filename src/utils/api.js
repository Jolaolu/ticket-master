import axios from 'axios'

export const getAllEvents = () => {
  return new Promise((resolve, reject) => {
    axios.get('events')
      .then(response => {
        const data = []
        const pageInfo = response.data.data.pageInfo

        response.data.data.events.forEach(event => {
          axios.get(`ticket-types/events/${event.id}`)
            .then(response => {
              const tickets = response.data.data
              data.push({ tickets: tickets, ...event })
            })
            .catch(err => {
              reject(err)
            })
        })
        const eventsData = { pageInfo, data }
        console.log(eventsData)
        resolve(eventsData)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const ReconstructObject = () => {

}
// export const getEvent = () => {
//   return new Promise((resolve, reject) => {
//     axios.get('events')
//       .then(response => {
//         const events = []
//         response.data.data.events.forEach(event => {
//           axios.get(`ticket-types/events/${event.id}`)
//             .then(response => {
//               const tickets = response.data.data
//               events.push({ tickets: tickets, ...event })
//             })
//             .catch(err => {
//               reject(err)
//             })
//         })
//         console.log(events)
//         resolve(events)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
