import nodemailer from 'nodemailer';

const sendEmailController = () => {
  async function sendEmail(req, res, next) {
    const { mail } = req.body;
    const API = 'http://localhost:5000/api/v1';
    let transporter = nodemailer.createTransport({
      // TODO: move this to dotenv
      service: 'Gmail',
      auth: {
        user: 'chenCymulate@gmail.com',
        pass: 'chenCymulate2022',
      },
    });

    await transporter.sendMail({
      from: '"Fred Foo 👻" <covid@fizerr.com>',
      to: mail,
      subject: 'Amazing covid medicine',
      text: 'Hello world?',
      html: `<b>Hello world? <a href=${API}/covid-info?id=${mail}> Click to learn more
       about the new amazing covid medicne </a> </b>`,
    });
  }
  return { sendEmail };
};

export default sendEmailController;
