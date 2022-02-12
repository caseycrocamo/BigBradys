import {post} from "./apiWrapper";
import ContactForm from "../Domain/ContactForm";
import { contactForm } from "../Constants/endpoints";

const submitContactForm = (form: ContactForm) => {
    post(contactForm, form)
    .then(function (response:any) {
        return response;
    })
    .catch(function (error:any) {
        alert(error);
    });
}
export {submitContactForm};