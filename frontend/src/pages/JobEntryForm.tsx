import React, { useState } from "react"
import { Button, Card, Col, Form, Input, InputNumber, message, Row, Select } from "antd"
import FormInput from "../components/FormInput"
import { JobEntryData } from "../interface/JobEntryData"
import axios from "axios"



const JobEntryForm : React.FC = () =>{
    // const [jobEntryData,setJobEntryData] = useState<JobEntryData>({
    //     job:"",
    //     address:"",
    //     fee:0,
    //     contractDate: "",
    //     deliveredDate:"",
    //     feescollectedDate:"",
    //     feescollected: 0,
    //     paymentTerms: "",
    //     expense: 0,
    //     expenseTerms: "",
    //     subConductor: "",
    //     subConductorfee: 0,
    //     modumfee: 0,
    //     netfee: 0,
    //     internalReview: "",
    //     marketing:"",
    //     marketingpercent: 0,
    //     marketingfee: 0,
    //     corporatepercent:0,
    //     corporatefee:0,
    //     productionpercent: 0,
    //     productionfee:0,
    //     appraiser1:"",
    //     appraiser1percent: 0,
    //     appraiser1fee:0,
    //     appraiser2:"",
    //     appraiser2percent: 0,
    //     appraiser2fee:0,
    //     appraiser3:"",
    //     appraiser3percent: 0,
    //     appraiser3fee:0,
    //     irpercent: 0,
    //     irfee: 0,
    //     totalPercent: 0,
    //     hourlycharge: false
    // }
    // )


    const [loading, setLoading] = useState(false)
    const onFinish = async (values:any) =>{
        console.log(values)
        try{
            setLoading(true)
            const response = await axios.post('http://localhost:4000/jobList',values)
            message.success('Job Entry Saved')
            console.log(response.data)
        }catch(error){
            console.log("Error Failed to load",error)
        };
    }
    return(
        <div className="container">
            <Card title="Job Entry">
                <Form onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <FormInput name="job" label="Job#" placeholder="Job" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="address" label="Address" placeholder="Address" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="fee" label="Fee" type="number" placeholder="Fee" />

                        </Col>
                        <Col span={4}>
                            <FormInput name="contractDate" label="Contract Date" type="date" placeholder="Contrate Date" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="deliveredDate" label="Delivered Date" type="date" placeholder="Delivered Date" />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={4}>
                            <FormInput name="feescollectedDate" label="Fees collected Date" type="date" placeholder="Fees collected Date" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="feescollected" label="Fees collected" type="number" placeholder="Fees collected" />
                        </Col>
                        <Col span={4}>
                             <FormInput name="paymentTerms" label="Payment Terms" placeholder="Payment Terms" />

                        </Col>
                        <Col span={4}>
                            <FormInput name="expense" label="Expense" type="number" placeholder="Expense" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="expenseTerms" label="Expense Terms" placeholder="Expense Terms" />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Form.Item label="SubConductor" name="subConductor">
                                 <Select placeholder="SubConductor">
                                    
                                 </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                             <FormInput name="subConductorfees" label="SubConductor fees" type="number" placeholder="SubConductor fees" />
                        </Col>
                        <Col span={4}>
                            <FormInput name="modumfee" label="Modum Fee" type="number" placeholder="Modum Fee" />

                        </Col>
                        <Col span={4}>
                            <FormInput name="netfee" label="Net Fee$" type="number" placeholder="Net Fee" />
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Internal Review" name="internalReview">
                                 <Select placeholder="Internal Review">
                                    
                                 </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={3}>
                            <Form.Item label="MARKETING" name="marketing">
                                 <Select placeholder="MARKETING">
                                    
                                 </Select>
                            </Form.Item>                        
                        </Col>
                        <Col span={3}>
                            <FormInput name="marketingpercent" label="Marketing %" type="number" placeholder="Marketing %" />
                        </Col>
                        <Col span={3}>
                            <FormInput name="marketingfee" label="Marketing $" type="number" placeholder="Marketing $" />

                        </Col>
                        <Col span={3}>
                            <FormInput name="corporatepercent" label="Corporate %" type="number" placeholder="Corporate %" />
                        </Col>
                        <Col span={3}>
                          <FormInput name="corporatefee" label="Corporate $" type="number" placeholder="Corporate $" />
                        </Col>
                        <Col span={3}>
                            <FormInput name="productionpercent" label="Production %" type="number" placeholder="Production %" />
                        </Col>
                        <Col span={3}>
                            <FormInput name="productionfee" label="Production $" type="number" placeholder="Production $" />
                        </Col>
                        <Col span={3}>
                            <Form.Item label="APPRAISER 1" name="appraiser1">
                                    <Select placeholder="APPRAISER 1">
                                        
                                    </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={3}>
                            <FormInput name="appraiser1percent" label="APPRAISER 1%" type="number" placeholder="APPRAISER 1%" />
                     
                        </Col>
                        <Col span={3}>
                            <FormInput name="appraiser1fee" label="APPRAISER 1$" type="number" placeholder="APPRAISER 1$" />
                        </Col>
                        <Col span={3}>
                            <Form.Item label="APPRAISER 2" name="appraiser2">
                                    <Select placeholder="APPRAISER 2">
                                        
                                    </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <FormInput name="appraiser2percent" label="APPRAISER 2%" type="number" placeholder="APPRAISER 2%" />
                     
                        </Col>
                        <Col span={3}>
                            <FormInput name="appraiser2fee" label="APPRAISER 2$" type="number" placeholder="APPRAISER 2$" />
                        </Col>
                        <Col span={3}>
                            <Form.Item label="APPRAISER 3" name="appraiser3">
                                    <Select placeholder="APPRAISER 3">
                                        
                                    </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <FormInput name="appraiser3percent" label="APPRAISER 3%" type="number" placeholder="APPRAISER 3%" />
                     
                        </Col>
                        <Col span={3}>
                            <FormInput name="appraiser3fee" label="APPRAISER 3$" type="number" placeholder="APPRAISER 3$" />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={2}>
                            <FormInput name="irpercent" label="IR %" type="number" placeholder="IR %" />
                        </Col>
                        <Col span={2}>
                            <FormInput name="irfee" label="IR $" type="number" placeholder="IR $" />
                        </Col>
                        <Col span={3}>
                            <Form.Item label="Total %" name="totalPercent">
                                <InputNumber value={100} style={{backgroundColor:"green"}}></InputNumber>
                            </Form.Item>
                    </Col>
                    <Col span={3}>
                            <Form.Item label="Hourly Charges" name="hourlycharge">
                                <Input type="checkbox"></Input>
                            </Form.Item>                        
                     </Col>
                    
                </Row>
                <Row gutter={16}>
                    <Col span={24} style={{textAlign:'center'}}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '8px',backgroundColor:'#293756',color:'#ffffff'}}>
                                    Save
                        </Button>
                        <Button htmlType="button">
                                    Discard
                        </Button>
                    </Col>

                </Row>
                    
                </Form>
            </Card>

        </div>
    )
}
export default JobEntryForm