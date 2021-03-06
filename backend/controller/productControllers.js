const Product=require('../modules/Products');

const getAllProducts=async(req,res)=>{
    try{
        const products= await Product.find({});
        res.json(products);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server Error"});
    }
};

const getProductsById=async(req,res)=>{
    try{
        const products= await Product.findById(req.params.id);
        res.json(products);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server Error"});
    }
};

module.exports={
   getAllProducts,
   getProductsById, 
}