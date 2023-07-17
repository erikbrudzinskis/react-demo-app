import {useState, useEffect} from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isDataLoaded, setDataLoaded] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setDataLoaded(false);
        fetch('https://react-demo-app-3d390-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then(response => {
                return response.json();
            })
            .then(resolvedData => {
            const meetups = [];

            for (const key in resolvedData) {
                const meetup = {
                    id: key,
                    ...resolvedData[key]
                };
                meetups.push(meetup)
            }
            setDataLoaded(true);
            setLoadedMeetups(meetups);
            console.log(meetups);
        });
    }, []);

    return (
        <section>
            <h1>All Meetups</h1>
            {!isDataLoaded && <p>Loading data! Please wait!</p>}
            {isDataLoaded && <MeetupList meetups={loadedMeetups}/>}
        </section>
    )
}

export default AllMeetupsPage;
