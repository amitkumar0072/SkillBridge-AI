import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: "src/uploads",
    filename: (req , file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
}
});

const fileFilter = (req , file, cb) =>{
    if(path.extname(file.originalname) === '.pdf'){
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed'), false);
    }
};

export const upload = multer({ storage, fileFilter });