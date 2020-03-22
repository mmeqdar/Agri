const RESPONSES = {
  ERRORS: {
    GENERAL: 'An error occured. Please try Again later.',
    DATA_MISSING: 'One or more arguments are missing.',
    LOGINPHONE: "Wrong phone",
    LOGINPSWD: "Wrong password",
    VERIF: "Account is not verified",
    NAME: "Full name must have between 5 and 30 and only Alphabetic",
    PHONE:"Phone is not Valid",
    PSWD:"Password requires at least 1 lower 1 upper case letter and 1 digit and between 5 and 20",
    REGISTER_PHONE: "PHONE Already Exists",
    CODE: " Wrong CODE",
    REGION:"Wrong Region",
  },
}
const REQ = {
  USERS:
  {
    // /*-------------------------register--------------*/
    GET_BY_PHONE:
    'SELECT count(*) as cnt,id_user,password,confirmation FROM user WHERE phone = ?',
    GET_BY_EMAIL:
     'SELECT count(*) as cnt FROM user WHERE email = ?',
    GET_BY_PSWD:
     'SELECT count(*) as cnt from user WHERE password = ?',
     GET_BY_NEXMO_PHONE:
     'SELECT count(*) as cnt from user WHERE nexmo = ? AND phone = ?',
     ADD_USER:
     'INSERT INTO `user`(`fullName`, `phone`, `password`,`id_region`) values (?, ?, ?,?)',
     UPDATE_NEXMO:
     'UPDATE `user` SET nexmo=? WHERE phone = ?',
     GET_VER:
     'SELECT confirmation FROM `user` WHERE `phone` = ?',
     DELETE_USER:
     'DELETE FROM `user` WHERE `phone` = ?',
     CONFIRMATON:
     'UPDATE user SET  confirmation =  1 WHERE `phone` = ?',
     GET_REGION:
      'SELECT * FROM `regions` WHERE 1',
    UPDATE_PSWD:
    'UPDATE `user` SET `password`=? WHERE phone = ?',
    // GET_ID_BY_CODE:
    // 'SELECT `id` FROM `users` WHERE `verification_code` = ?',
    // VERIFICATION:
    // 'UPDATE users SET  email_verified =  1, verification_code = 0 WHERE `id` = ?',
    // ADD_USER1:
    // 'INSERT INTO users (username, avatar, first_name, last_name, password, email, verification_code) values (?, ?, ?, ?, ?, ?, ?)',
  }
}
module.exports = {
  REQ,
  RESPONSES
}