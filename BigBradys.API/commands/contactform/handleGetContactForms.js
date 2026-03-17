const { getForms } = require("../../data/mongodb");

const handleGetContactForms = async () => {
    try{
        const response = await getForms();
        if (!response.successful){
            return {
                successful: false,
                data: "Unable to load contact form submissions."
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

exports.handleGetContactForms = handleGetContactForms;
