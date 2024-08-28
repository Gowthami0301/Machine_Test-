const bodyParser = require('body-parser');
const express = require('express');
const  mongoose  = require('mongoose');
const cors = require('cors');
const app = express()
const PORT = 4000;
const JobEntry = require('./schema/JobSchema')

app.use(bodyParser.json)
app.use(cors())

// Api 

app.post('/jobList', async(req,res)=>{
    console.log(req.body)
    try{
        const jobEntry = new JobEntry({
            job:req.body.job,
            address:req.body.address,
            fee:req.body.fee,
            contractDate: req.body.contractDate,
            deliveredDate:req.body.deliveredDate,
            feescollectedDate:req.body.feescollectedDate,
            feescollected: req.body.feescollected,
            paymentTerms: req.body.paymentTerms,
            expense: req.body.expense,
            expenseTerms: req.body.expenseTerms,
            subConductor: req.body.subConductor,
            subConductorfee: req.body.subConductorfee,
            modumfee: req.body.modumfee,
            netfee: req.body.netfee,
            internalReview: req.body.internalReview,
            marketing:req.body.marketing,
            marketingpercent: req.body.marketingpercent,
            marketingfee:req.body.marketingfee,
            corporatepercent:req.body.corporatepercent,
            corporatefee:req.body.corporatefee,
            productionpercent: req.body.productionpercent,
            productionfee:req.body.productionfee,
            appraiser1:req.body.appraiser1,
            appraiser1percent: req.body.appraiser1percent,
            appraiser1fee:req.body.appraiser1fee,
            appraiser2:req.body.appraiser2,
            appraiser2percent: req.body.appraiser2percent,
            appraiser2fee:req.body.appraiser2fee,
            appraiser3:req.body.appraiser3,
            appraiser3percent: req.body.appraiser3percent,
            appraiser3fee:req.body.appraiser3fee,
            irpercent: req.body.irpercent,
            irfee: req.body.irfee,
            totalPercent: req.body.totalPercent,
            hourlycharge: req.body.hourlycharge
        });
        const savedJobList = await jobEntry.save()
        res.status(201).json(savedJobList)
    }catch (error){
        res.status(400).json({message:error.message})
    }
})

app.get('/jobList',async (req,res)=>{
    try{
        const jobList = await JobEntry.find()
        res.json(jobList)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

app.delete('/jobList/:id', async (req, res)=>{
    try{
        const jobList = await JobEntry.findById(req.params.id)
        if(!jobList) return res.status(404).json({message: 'User not found'})
        await jobList.remove()
        res.json({message: 'JobList Deleted'})
    
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



mongoose.connect('mongodb://localhost:27017/jobList',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'))
db.once('open',()=>{
    console.log('Connected to MongoDB')
})
app.listen(PORT,()=>{
    console.log(`Server running in PORT ${PORT}`);
    
})