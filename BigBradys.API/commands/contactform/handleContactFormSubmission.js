const { createForm } = require("../../data/mongodb");

const handleContactFormSubmission = async (request) => {
    try{
        const response = await createForm(request);
        if (!response.successful){
            return {
                successful: false,
                data: "We really dropped the ball. Your form submission was not saved. Please try again."
            };
        }
        return response;
    }
    catch(e){
        console.error(e);
        return {
            successful: false,
            data: e
        }
    }
};
exports.handleContactFormSubmission = handleContactFormSubmission;