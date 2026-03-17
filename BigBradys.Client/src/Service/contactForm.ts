import {post} from "./apiWrapper";
import ContactForm from "../Domain/ContactForm";
import { backofficeContactForms, contactForm } from "../Constants/endpoints";

function submitContactForm(form: ContactForm):Promise<any>{
    return post(contactForm, form);
}

function getBackofficeContactForms(password: string):Promise<any>{
    return post(backofficeContactForms, { password });
}

export {submitContactForm, getBackofficeContactForms};
