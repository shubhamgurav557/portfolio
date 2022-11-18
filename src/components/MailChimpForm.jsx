import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const MailChimpForm = () => {
    const postURL = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            <MailchimpSubscribe url={postURL} render={({ subscribe, status, message }) => (
                <Newsletter status={status} message={message} onValidate={FormData => subscribe(FormData)} />
            )} />
        </>
    )
}

export default MailChimpForm