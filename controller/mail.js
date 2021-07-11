const nodemailer = require("nodemailer");
function sendEmailInviteLinkHelper(email, subject, body) {
    return new Promise(async (resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'teamscloneassistant@gmail.com',
                pass: 'topkfoutklbmtgpu',
            },
        });

        let info = await transporter.sendMail({
            from: "teamscloneassistant@gmail.com",
            to: email,
            subject: subject,
            text: body,
        });

        resolve();
    })

}

async function sendEmailInviteLink(req, res) {
    try {
        let { email, subject, body } = req.body;
        console.log(email, subject, body )
        let data = await sendEmailInviteLinkHelper(email, subject, body);
        res.json({
            message: "Invite link sent successfully.",
            data: data,
        });
    } catch (err) {
        res.json({
            message: "Failed to send invite link.",
            data: err,
        });
    }
};

module.exports.sendEmailInviteLink = sendEmailInviteLink;