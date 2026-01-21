const router = require('express').Router()
const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "please fill all the fields" })
    }

    try {
        console.log("📨 ENVIANDO CORREO CON RESEND...")

        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['alan.hernandez.18400700@gmail.com'],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
                <h2>New Portfolio Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        })

        console.log("✅ CORREO ENVIADO CON RESEND")
        res.status(200).json({ msg: "Thank you for contacting JAPH!" })

    } catch (error) {
        console.error("❌ ERROR RESEND:", error)
        res.status(500).json({ msg: "Error sending email" })
    }
})

module.exports = router
