const Post = require('../model/Post');

class LikeController {
    
    async store(req, res){                
        const post = await Post.findById(req.params.id);
        
        post.likes += 1;
        
        post.save();

        req.io.emit('like', post);

        res.json(post);
    }
}

module.exports = new LikeController();