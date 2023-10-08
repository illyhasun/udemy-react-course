import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetup() {

  const navigate = useNavigate()

  function addMeetUpHandler(meetupData) {
    fetch(
      'https://udemy-react-924c0-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  )
}
