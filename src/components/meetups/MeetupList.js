import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css"

function MeetupList(props) {
    return (
        <ul className={styles.list}>
            {props.meetups.map((meetup) => {
                return <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    image={meetup.imageUrl}
                    address={meetup.address}
                    description={meetup.description}
                />
            })}
        </ul>
    )
}

export default MeetupList;
