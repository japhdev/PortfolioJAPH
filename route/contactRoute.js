const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', async (req, res) => {
    const data = req.body

    if (!data.name || !data.email || !data.message) {
        return res.status(400).json({ msg: "please fill all the fields" })
    }

    try {
        const smtpTransporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from: `"${data.name}" <${process.env.EMAIL_USER}>`,
            to: 'alan.hernandez.18400700@gmail.com',
            replyTo: data.email,
            subject: `New Message from ${data.name} - Portfolio Contact`,
            html: `
                <h2>New Portfolio Message</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `,
            text: `
Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
            `
        }

        console.log("📨 INTENTANDO ENVIAR CORREO...")

        const info = await smtpTransporter.sendMail(mailOptions)

        console.log("✅ CORREO ENVIADO:", info.response)

        return res.status(200).json({ msg: "Thank you for contacting JAPH!" })

    } catch (error) {
        console.error("❌ ERROR NODEMAILER:", error)
        return res.status(500).json({ msg: "Mailer error" })
    }
})

module.exports = router
