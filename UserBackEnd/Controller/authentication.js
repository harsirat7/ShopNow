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
                        console.log(result);
                        res.json({ user: "Incorrect Password" });
                    }
                    else {
                        req.session.userId=result[0].id;
                        res.json({ user: "Correct Password" });
                    }
                }
                else {
                    console.log(result);
                    res.json({ user: "User not found" });
                }
            }
        });

    };

    


};


module.exports = new Auth;