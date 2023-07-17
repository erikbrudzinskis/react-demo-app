import {useRef} from "react";

import styles from './NewMeetupForm.module.css'
import Card from "../ui/Card";

function NewMeetupForm(props) {

    const titleInputRef = useRef("");
    const imageInputRef = useRef("");
    const addressInputRef = useRef("");
    const descriptionInputRef = useRef("");

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImageUrl = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            imageUrl: enteredImageUrl,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}/>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;
