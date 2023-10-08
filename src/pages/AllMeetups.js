import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetupList'

export default function AllMeetups() {

  const [loading, setLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])


  useEffect(() => {
    setLoading(true)
    fetch(
      'https://udemy-react-924c0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }


      setLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])


  if (loading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}
