const Contact = require('../model/contact')

class contactController {
    
    static async findAllContact(req,res,next){
        try {
            const AllContact = await Contact.find()
            res.status(200).json(AllContact)
        } catch (error) {
            res.send(error)
        }
    }

    static async findOneContact(req,res,next){
        try {
            const userId = req.params.id
            const findone = await Contact.findById(userId)
            if(findone == null){
                res.status(404).json({"message": "data not found !"})
            }
            res.status(200).json(findone)
        } catch (error) {
            res.send(error)
        }
    }

    static async postContact(req,res,next){
        try {
            const newContact = new Contact({
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                email: req.body.email,
                avatar: req.body.avatar
            })

            const create = await Contact.create(newContact)
            res.status(201).json(create)
        } catch (error) {
            next(error)
        }
    }

    static async putContact(req,res,next){
        try {
            const willUpdate = {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address,
                email: req.body.email,
                avatar:req.body.avatar
            }
            await Contact.findOneAndUpdate({_id: req.params.id},willUpdate,{new:true, runValidators: true},(err,doc)=>{
                if(err){
                    next(err)
                } else{

                    res.status(201).json(doc)
                }
            })
        } catch (error) {
         next(error)
        }
    }

    static async deleteContact(req,res,next){
        const willDeleted = await Contact.findOneAndDelete({_id: req.params.id})
        res.status(201).json(willDeleted)
    }

}

module.exports = contactController