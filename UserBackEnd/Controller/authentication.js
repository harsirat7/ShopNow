const authObject = require("../Model/authentication");

class Auth {
    checkUser(req, res) {

        let data = {}

        if (!req.body.userMailAddress) {
            data = {
                userMail: null,
                userNumber: req.body.userPhoneNumber,
                userPassword: req.body.currentPassword,
            };
        }
        else {
            data = {
                userMail: req.body.userMailAddress,
                userNumber: null,
                userPassword: req.body.currentPassword,
            };
        };


        authObject.login(data, (err, result) => {
            if (err) {
                res.json({ result: "error" });
            }
            else {
                if (result.length > 0) {
                    if (result[0].password != `${req.body.currentPassword}`) {
                        res.json({ user: "Incorrect Password" });
                    }
                    else {
                        req.session.userId = result[0].id;

                        req.session.save((err) => {
                            if (err) {
                                console.log(err);
                                return res.json({ user: "session error" });
                            }
                            res.json({ user: "Correct Password" });
                        });
                    }
                }
                else {
                    res.json({ user: "User not found" });
                }
            }
        });
    };

    checkUserSession(req, res) {
        if (req.session.userId) {
            console.log("True")
            res.json({ UserSession: true });
        }
        else {
            console.log("False");
            res.json({ UserSession: false });
        }
    }




};


module.exports = new Auth;