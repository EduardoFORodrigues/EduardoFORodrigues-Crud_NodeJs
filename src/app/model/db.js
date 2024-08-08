import mongoose from "mongoose";

const PostModel = mongoose.model("Post", {
  title: String,
  name: String,
  disciplina: String,
  description: String,
});

class dbmodel {
  async createPost(title, name, disciplina, description) {
    const post = new PostModel({
      title: title,
      name: name,
      disciplina: disciplina,
      description: description,
    });

    await post.save();

    return post;
  }
  async listPosts() {
    const listPosts = await PostModel.find();
    return listPosts;
  }
  async deletePosts(id){
    const deletePosts = await PostModel.findByIdAndDelete(id) 
    
    return deletePosts;
  }
  async atualizaPosts(id,{title,name, disciplina,description}) {
     
    const atualizaPosts = await PostModel.findByIdAndUpdate(id,title,name, disciplina,description)
    
    return atualizaPosts;

  }
}
export default new dbmodel();
