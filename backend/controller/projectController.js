import projectModel from "../models/projectModel.js";

const getProjects = async (req,res) => {
    try {
        const data = await projectModel.find({});
        res.json({success:true,data});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {getProjects};