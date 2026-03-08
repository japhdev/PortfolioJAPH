const router = require("express").Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (text) => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};

router.post("/contact", async (req, res, next) => {
    let { name = "", email = "", message = "" } = req.body;

    name = name.trim();
    email = email.trim().toLowerCase();
    message = message.trim();

    if (!name) {
        return res.status(400).json({ msg: "Name is required" });
    }
    if (!email) {
        return res.status(400).json({ msg: "Email is required" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ msg: "Enter a valid email address" });
    }
    if (!message) {
        return res.status(400).json({ msg: "Message is required" });
    } else if (message.length < 10) {
        return res
            .status(400)
            .json({ msg: "Message must be at least 10 characters" });
    } else if (message.length > 2000) {
        return res.status(400).json({ msg: "Message is too long" });
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["alan.hernandez.18400700@gmail.com"],
            replyTo: email,
            subject: `New message from ${name}`,
            html: `
                <h2>New Portfolio Message</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message)}</p>
            `,
        });

        console.log("✅ CORREO ENVIADO CON RESEND");
        res.status(200).json({ msg: "Thank you for contacting JAPH!" });
    } catch (error) {
        console.error("❌ ERROR RESEND:", error);
        next(error);
    }
});

module.exports = router;
