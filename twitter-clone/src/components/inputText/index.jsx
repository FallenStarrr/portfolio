import styles from './styles.css'
import propTypes from 'prop-types'




const propTypes = {
    onSendText: propTypes.func.isRequired,
    onCloseText: propTypes.func.isRequired,
    userNameToReply: propTypes.func.isRequired
}

function InputText({ onSendText, onCloseText, userNameToReply }) {
    return (
        <form className={styles.form} onSubmit={onSendText}>
            <textarea 
            name="text"
            className={styles.text}
            >
                {(userNameToReply) ? `@${userNameToReply}` : ''}
            </textarea>
            <div className={styles.buttons}>
                <button className={styles.close} onClick={onCloseText}>Close</button>
                <button className={styles.send} type='submit'>Send</button>
            </div>
        </form>
    )
}

InputText.propTypes = propTypes

export default InputText