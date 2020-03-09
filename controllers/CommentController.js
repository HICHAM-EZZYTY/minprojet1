const Comment = require('./../models/comment');

exports.getAllComments = (req, res) => {   
    Comment
        .findAll()
        .then((comments) => {

            res.status(200).json({error:false,data:comments})
        })
        .catch(err => res.status(404).json({error:true,message:"comments not found"}))
}

exports.storeComment = (req, res) => {

    let { commentaire } = req.body;

    Comment.create({
        commentaire: commentaire,
    })
    .then((comment)=>{
        res.status(201).json({error:false,data:comment})
    })
    .catch((err) => res.status(400).json({erro:true,message:'comment not found'}))
   
}

exports.updateComment = (req, res) => {
    console.log(req.body)
    let {commentaire  } = req.body;

    Comment.update({
        commentaire: commentaire,
    }, {
        where: { id: req.params.id }
    })
    .then((result)=>{
        res.status(202).json({error:false,data:result})
    })
    .catch((err)=>{
        res.status(400).json({error:true,message:"bad request !"})
    })
}

exports.showOneComment = async (req, res) => {
        try {
            let comment=await Comment.findByPk(req.params.id);
            return res.status(200).json({error:false,data:comment})
        }
        catch(error){
            return res.status(404).json({error:true,message:'comment not found'})
        }

}

exports.deleteComment =  (req, res) => {
    return res.send('suppression')
}


exports.patchComment = (req, res) => {
    Comment.update(req.body,{
        where:{id:req.params.id}
    })
    .then(result=>{
        res.status(200).json({error:false,data:result})
    })
    .catch((error)=>{
        res.status(400).json({error:true,message:"Bad request"})
    })
}

