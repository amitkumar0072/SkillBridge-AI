export const uploadResume = async(req,res) =>{
    try{
        if(!req.file){
            return res.status(400).json({message: 'No file uploaded'});
        }
            res.status(200).json({
            message: 'File uploaded successfully',
            fileName:req.file.filename,
            uploadedAt : new Date()
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Upload failed',
            error: error.message
        });
    }
};