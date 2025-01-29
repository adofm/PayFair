// Wrapper function to catch any errors thrown by async controllers
// It's for reducing redundant try-catch blocks
export default function catchAsync(func){
    return (req,res,next)=>{
        func(req,res,next)
            .catch(err => next(err))
    }
}
