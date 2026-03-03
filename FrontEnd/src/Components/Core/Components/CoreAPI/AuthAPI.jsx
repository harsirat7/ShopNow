export default async function AuthAPI({ userInput }) {

    let { accountDetail, currentPassword } = userInput;

    // debugger
    accountDetail = accountDetail.trim();
    currentPassword = currentPassword.trim();

    if (!accountDetail) {
        alert("Please Enter A valid Email or Phone Number");
        return;
    }

    if (!currentPassword) {
        alert("Please Enter A valid Password");
        return;
    }

    let userMailAddress = "";
    let userPhoneNumber = "";

    if (accountDetail.includes("@") && accountDetail.includes(".")) {
        userMailAddress = accountDetail;
    } 
    else if (accountDetail.length === 10) {
        userPhoneNumber = accountDetail;
    } 
    else {
        alert("Please Enter a Valid Information");
        return;
    }

    const response = await fetch("http://localhost:3000/user/checkUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userMailAddress,
            userPhoneNumber,
            currentPassword
        }),
    });

    const result = await response.json();
    return result;
}