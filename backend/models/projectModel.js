import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    repoUrl: {
      type: String,
      required:true
    },
    imageUrl: {
      type: String,
      required:true
    },
  }, { timestamps: true }); 

const projectModel = mongoose.models.Project || mongoose.model("Project",projectSchema);

export default projectModel;