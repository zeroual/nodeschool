function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (user) {
            return goodUsers.some(function (e) {
                return e.id==user.id;
            });
        });
    };
}
module.exports=checkUsersValid;