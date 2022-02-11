import styles from '../styles/Home.module.css'

export default function Modal({ formData, handleClose }: { formData: any, handleClose: Function }) {
    return (
        <div className={styles.modal_container}>
            <div className={styles.modal}>
                <span className={styles.close_icon} onClick={() => handleClose()}>×</span>
                <h2>Confirm Modal</h2>
                <div className={styles.modal_content}>
                {
                    formData && Object.keys(formData).map((key, index) => (
                        <div key={index} className={styles.content_text}><span>{key}:</span> {formData[key]}</div>
                    ))
                }
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.confirmBtn} onClick={() => handleClose()}>Confirm</button>
                </div>
            </div>
        </div>
    )
}