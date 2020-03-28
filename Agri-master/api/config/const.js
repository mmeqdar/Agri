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
    QUANTITY_WRONG:"Quantity is wrong",
    PRIX_WRONG:"Price is wrong",
    DES_WRONG:"Description must contain less than 200"
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
    GET_CATEGORY:
    'SELECT * FROM `categorie` WHERE 1',
    UPDATE_PSWD:
    'UPDATE `user` SET `password`=? WHERE phone = ?',
    ADD_IMAGE:
    'INSERT INTO `Images`(`name_images`, `id_annonce`) VALUES (?,?)',
    ADD_ANNONCE:
    "INSERT INTO `annonces`(`description`, `quantity`, `prix`, `id_categorie`, `id_user`) VALUES (?,?,?,?,?)"
  }
}
module.exports = {
  REQ,
  RESPONSES
}