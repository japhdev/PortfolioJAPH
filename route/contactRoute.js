const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', (req,res)=>{
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg:"please fill all the fields"})
    }

        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port:465,
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
                
        })
        let mailOptions = {
    from: `"${data.name}" <${data.email}>`,
    to: 'alan.hernandez.18400700@gmail.com',
    replyTo: data.email,
    subject: `New Message from ${data.name} - Portfolio Contact`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
        <div style="background: linear-gradient(to right, #f9f9f9 ); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; #b5b5b5;">📨 New Portfolio Message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new contact form submission</p>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 0 0 8px 8px;">
            <div style="background: #f0f5ff; padding: 20px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid  #3b82f6;">
                <h2 style="color: #c0c0c0; margin-top: 0;">👤 Contact Information</h2>
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 80px; font-weight: bold; color: #555; padding: 8px 0;">Name:</td>
                        <td style="color: #222; padding: 8px 0;">${data.name}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; color: #555; padding: 8px 0;">Email:</td>
                        <td style="padding: 8px 0;">
                            <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; color: #555; padding: 8px 0;">Date:</td>
                        <td style="padding: 8px 0;">${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background: #f9f0ff; padding: 20px; border-radius: 6px; margin-bottom: 25px; border-left: 4px solid #6d5baa;">
                <h2 style="color: #333; margin-top: 0;">📝 Message</h2>
                <div style="background: white; padding: 15px; border: 1px solid #ddd; border-radius: 4px; margin-top: 10px;">
                    <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; margin-bottom: 20px;">This message was sent from your portfolio website contact form</p>
                
                <div style="margin: 20px 0;">
                    <a href="mailto:${data.email}" style="background-color:  #3b82f6; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 0 10px; font-weight: bold;">
                        Reply to ${data.name.split(' ')[0]}
                    </a>
                </div>
                
                <p style="font-size: 12px; color: #999; margin-top: 25px;">
                    Message ID: ${Date.now()}
                </p>
            </div>
        </div>
    </div>
    `,
    text: `New Message from Portfolio Contact Form
    
Name: ${data.name}
Email: ${data.email}
Date: ${new Date().toLocaleString()}

Message:
${data.message}

---
Sent from your portfolio website contact form
`
};
        smtpTransporter.sendMail(mailOptions,(error)=>{
            try{
                if(error) return res.status(400).json({msg: 'please fill all the fields'})
                res.status(200).json({msg: 'Thank you for contacting JAPH!'})

            }catch (error) {
                if(error)return res.status(500).json({msg:"There is server error"})

            }
        })
    
})
module.exports = router

