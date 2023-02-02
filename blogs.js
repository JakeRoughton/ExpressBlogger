//Create variable to hold function data for validation
const validateblogs = (blogs) => {
    //Blog title is required and must be string
        if(blogs.title === undefined || typeof(blogs.title) !=="string"){
            return {
                isValid: true,
                message: "Title is required and must be a string"
        }
    }
    //Blog text is required and must be string
        if (blogs.text === undefined || typeof(blogs.text) !== "string"){
            return {
                isValid: true,
                message: "Text is required and must be a string"
        }
    }
    //Blog author is required and must be string
        if (blogs.author === undefined || typeof(blogs.author) !== "string"){
            return {
                isValid: true,
                message: "Author is required and must be a string"
        }
    }

    //Create variable to hold blogs title that is a string
    const blogTitle = blogs.title.filter((title)=>{

        if(typeof(title) !== "string"){
            return true
    }   else{
            return false
        }
    })
    //Blog title must not exceed 40 characters
        if (blogTitle > 40){
            return{
                isValid: false,
                message: "Blog title needs to be less than 40 characters"
        }
    }
        //Create variable to hold blogs author that is a string
    const blogAuthor = blogs.author.filter((author)=>{
    
        if(typeof(author) !== "string"){
            return true
        } else{
            return false
        }
    })
        //Blog author must not exceed 40 characters
        if (blogAuthor > 40){
            return{
                isValid: false,
                message: "Blog author needs to be less than 40 characters"
            }
        }

    return{
        isValid: true
    }

}
module.exports = {
    validateblogs
}
