import {post} from "./apiWrapper";
import ContactForm from "../Domain/ContactForm";
import { contactForm } from "../Constants/endpoints";

function submitContactForm(form: ContactForm):Promise<any>{
    return post(contactForm, form);
}
export {submitContactForm};