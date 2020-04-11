import React,{useState} from 'react';
import axios from "axios";
import { makeStyles , withStyles, ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TranslateOutlinedIcon from '@material-ui/icons/GTranslate';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { grey, green} from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import logo from  "../../images/logo.jpeg";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import avata from  "../../images/avtr.jpg";
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './index.css';

var to 
var user
//-----------Style Drag & Drop ------------

const NavBar = withStyles(theme => ({
  root: {
    backgroundColor: "#F6F6F6",
    color: "black"
  },
}))(AppBar);
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  btn: {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: green[700],
      backgroundColor: "#F6F6F6",
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navbarLinkActive: {
    color: green[800],
    borderColor: green[700],
    border: "solid",
    borderRightWidth: "2px",
    borderRadius: "10px",
    borderLeftWidth: "2px",
  
  },
  image: {
    width: '80px',
  },
  pic:{
    margin:'0px',
    padding:'0px',
    width: '40px',
    height:'30px',
    borderRadius: "50%",
  },
  img123: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '200px',
    height: '200px',
},
spacing: {
  margin: theme.spacing(4, 0, 4),
}
}));

export default function PrimarySearchAppBar() {
  const {t} = useTranslation();
     const [data, setData] = useState({ type:null,token:null });
  axios.post('http://localhost:3001/check_token',{token:localStorage.getItem('token')}).then((r)=>{
       user = r.data.data 
    })
    axios.post('http://localhost:3001/check_type',{type:localStorage.getItem('type')}).then((r)=>{
        setData({type:r.data.data});
    })
  if(data.type == 0)
    to = '/annonce'
  else
    to = '/demande'
  const classes = useStyles();
  const [tn, setDatan] = React.useState({ n: false});
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isLanguageMenuOpen = Boolean(languageAnchorEl);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = event => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  
  };
  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  
  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
    handleMobileMenuClose();
  };
  const changeL = (lng) => {
    i18next.changeLanguage(lng)
    localStorage.setItem('langue', lng)
  };
  const handleLogout =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('type');
  };
  const Profile =()=>
    {
      
      if(document.getElementById("prfl").style.display == 'block')
      document.getElementById("prfl").style.display = 'none'
      else
      document.getElementById("prfl").style.display = 'block'
    };
    const close =()=>
  {
    setDatan({n:false});
    alert(tn.n)
  };
  const handleChangeName = event=>
    {
      const t = event.target.value
      var letter = /^[a-zA-Z ]+$/;
      for(var i=0;i<t.length;i++)
      {
        if(!t[i].match(letter))
          {
            const v = t.replace(t[i],"")
            event.target.value = v
          }
      }
      if(event.target.value.length<5 || event.target.value.length >30)
        event.target.style.color= "red"
      else
        event.target.style.color= "green"
       // form.name = event.target.value
    };
    const handleChangePhone =event =>
    {
      const t = event.target.value
            const v = t.replace(t,"")
            event.target.value = v
    }
    const [values, setValues, ] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };
    const handleChangePassword =event =>
    {
      var n = 0;
      var u = 0;
      var l = 0;
      var Upper = /^[A-Z]+$/;
      var Lower = /^[a-z]+$/;
      var number = /^[0-9]+$/;
      for(var i = 0 ;i<event.target.value.length;i++)
      {
        if(event.target.value[i].match(Upper))
            u = 1
        if(event.target.value[i].match(Lower))
            l = 1
        if(event.target.value[i].match(number))
            n = 1
      }
      if(event.target.value.length<6 || event.target.value.length >20 || n === 0 || u === 0 || l === 0)
       event.target.style.color= "red"
      else
       event.target.style.color= "green"
       // form.pswd =event.target.value
    };

  const LmenuId = 'primary-search-language-menu';
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={LmenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem onClick={() => {handleLanguageMenuClose(); changeL('ar')}} className={classes.btn}>العربية</MenuItem>
      <MenuItem onClick={() => {handleLanguageMenuClose(); changeL('eng')}} className={classes.btn}>English</MenuItem>
      <MenuItem onClick={() => {handleLanguageMenuClose(); changeL('fr')}} className={classes.btn}>Français</MenuItem>
    </Menu>
  );

  if (localStorage.getItem('langue')  !== 'ar'){
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
      {user !== "-2" && <NavLink exact to="/" className={classes.btn} activeClassName={classes.navbarLinkActive}>
          <MenuItem >
            <HomeOutlinedIcon /> <Box fontWeight="fontWeightBold" >{t('nav.HOME')}</Box>
          </MenuItem>
        </NavLink>}

       {user === "-2" && <NavLink  to="/login" className={classes.btn} activeClassName={classes.navbarLinkActive}>
       <MenuItem  >{t('nav.LOGIN')}</MenuItem>
        </NavLink>}

       {user === "-2" && <NavLink  to="/register" className={classes.btn} activeClassName={classes.navbarLinkActive}>
        <MenuItem  >{t('nav.REGISTER')}</MenuItem>
         </NavLink>
        }

        {user !== "-2" &&  <NavLink    to={to} className={classes.btn} activeClassName={classes.navbarLinkActive}>
          <MenuItem>
            {/* <ShoppingCartOutlinedIcon />  */}
            <Box fontWeight="fontWeightBold" >{t('nav.CART')}</Box>
          </MenuItem>
        </NavLink>}
        <MenuItem className={classes.btn} onClick={handleLanguageMenuOpen}>
          <TranslateOutlinedIcon /> <Box fontWeight="fontWeightBold">{t('nav.LANGUAGE')}</Box><ArrowDropDownOutlinedIcon />
        </MenuItem>
        {user !== "-2" &&  <div   className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem>
                  <Box fontWeight="fontWeightBold" ><img onClick={Profile} className={classes.pic} src={avata}/></Box>
                </MenuItem>
              </div>}
        {user !== "-2" && <NavLink to ="#" className={classes.btn} >
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleLogout}
                >
                 <Box fontWeight="fontWeightBold" ><ExitToAppIcon/> </Box>
                </MenuItem>
              </NavLink>}
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <NavBar position="static">
          <Toolbar >
            <Typography >
                <img src={logo} alt="Logo" className={classes.image}/>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {user !== "-2" &&<NavLink exact to="/" className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Box fontWeight="fontWeightBold">{t('nav.HOME')}</Box>
                </MenuItem> 
              </NavLink>}
          
              {user === "-2" && <NavLink  to="/login" className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem  >{t('nav.LOGIN')}</MenuItem>
              </NavLink>}

              {user === "-2" && <NavLink  to="/register" className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem  >{t('nav.REGISTER')}</MenuItem>
                </NavLink>
                }
              {user !== "-2" && <NavLink   to={to} className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Box fontWeight="fontWeightBold" >{t('nav.CART')}</Box>
                </MenuItem>
              </NavLink>}
              <NavLink  to="#">
                <MenuItem
                  edge="end"
                  aria-label="language of current user"
                  aria-haspopup="true"
                  color="inherit"
                  aria-controls={LmenuId}
                  onClick={handleLanguageMenuOpen }
                  className={classes.btn}
                >
                  <TranslateOutlinedIcon /> <Box fontWeight="fontWeightBold">{t('nav.LANGUAGE')}</Box><ArrowDropDownOutlinedIcon />
                </MenuItem>
              </NavLink>
              {user !== "-2" &&  <div className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem>
                  <Box fontWeight="fontWeightBold" ><img onClick={Profile} className={classes.pic} src={avata}/></Box>
                </MenuItem>
              </div>}
            {user !== "-2" && <NavLink to ="#" className={classes.btn} >
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleLogout}
                >
                 <Box fontWeight="fontWeightBold" ><ExitToAppIcon/> </Box>
                </MenuItem>
              </NavLink>}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </NavBar>
        {renderMobileMenu}
        {renderLanguageMenu}  
        <div id="prfl" className="modal productQuickView show" style={{paddingRight: '16px',display:'none'}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <button type="button" className="close" onClick={Profile}  data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true"><HighlightOffIcon/></span>
                        </button>
                        <div className={classes.img123} style={{ width: "250px", height: "250px", }} >
                <Avatar className={classes.img123} src={avata} alt="" />
            </div>
            <form className={classes.spacing}>
                <Grid container justify="center" spacing={2}>
                <ThemeProvider theme={theme}>
                <Grid item xs={5}>
                <TextField
                    variant="outlined"
                    required
                    autoFocus
                    fullWidth
                    id="fullName"
                    label={t('register.LABEL_NAME')}
                    name="fullName"
                    autoComplete="fname"
                    onChange={handleChangeName}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                    }}
                  />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phone"
                      label={t('register.LABEL_PHONE')}
                      name="phone"
                      autoComplete="phone"
                      disabled
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneOutlinedIcon /></InputAdornment>,
                        readOnly: true,
                      }}
                      onChange={handleChangePhone}
                    />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={values.Password}
                  label={t('register.LABEL_PASS')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={handleChangePassword}
                />
                    </Grid>
                    <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Cpassword"
                  label={t('register.LABEL_CPASS')}
                  type="password"
                  id="Cpassword"
                  value={values.Password}
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={(e)=>
                  {
                    //form.cpswd = e.target.value
                  }}
                />
                    </Grid>
                    <Grid item container justify='center' xs={3}>
                        <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
                    </Grid>
                    </ThemeProvider>
                </Grid>
            </form>
                      </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
       {user !== "-2" &&  <NavLink exact to="/" className={classes.btn} activeClassName={classes.navbarLinkActive}>
          <MenuItem >
            <HomeOutlinedIcon /> <Box fontWeight="fontWeightBold" >الرئيسية</Box>
          </MenuItem>
        </NavLink>}

       {user === "-2" && <NavLink to="/login" className={classes.btn} activeClassName={classes.navbarLinkActive}>
          <MenuItem  >تسجيل الدخول</MenuItem>
        </NavLink>}
        {user === "-2" && <NavLink to="/register" className={classes.btn} activeClassName={classes.navbarLinkActive}>
        <MenuItem  >أفتح حساب</MenuItem>
        </NavLink>}

        {user !== "-2" &&   <NavLink    to={to} className={classes.btn} activeClassName={classes.navbarLinkActive}>
          <MenuItem>
          {/* <ShoppingCartOutlinedIcon /> */}
             <Box fontWeight="fontWeightBold" >إعلان</Box>
          </MenuItem>
        </NavLink>}

        <MenuItem className={classes.btn} onClick={handleLanguageMenuOpen}>
          <TranslateOutlinedIcon /> <Box fontWeight="fontWeightBold">اللغة</Box><ArrowDropDownOutlinedIcon />
        </MenuItem>
        {user !== "-2" &&  <div className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem>
                  <Box fontWeight="fontWeightBold" ><img onClick={Profile} className={classes.pic} src={avata}/></Box>
                </MenuItem>
              </div>}
        {user !== "-2" && <NavLink to ="#" className={classes.btn} >
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleLogout}
                >
                 <Box fontWeight="fontWeightBold" ><ExitToAppIcon/> </Box>
                </MenuItem>
              </NavLink>}
              <div id="prfl" className="modal productQuickView show" style={{paddingRight: '16px',display:'none'}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <button type="button" className="close" onClick={Profile}  data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true"><HighlightOffIcon/></span>
                        </button>
                        <div className={classes.img123} style={{ width: "250px", height: "250px", }} >
                <Avatar className={classes.img123} src={avata} alt="" />
            </div>
            <form className={classes.spacing}>
                <Grid container justify="center" spacing={2}>
                <ThemeProvider theme={theme}>
                <Grid item xs={5}>
                <TextField
                    variant="outlined"
                    required
                    autoFocus
                    fullWidth
                    id="fullName"
                    label="الاسم الكامل"
                    name="fullName"
                    autoComplete="fname"
                    onChange={handleChangeName}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                    }}
                  />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phone"
                      label="رقم الهاتف"
                      name="phone"
                      autoComplete="phone"
                      disabled
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneOutlinedIcon /></InputAdornment>,
                        readOnly: true,
                      }}
                      onChange={handleChangePhone}
                    />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={values.Password}
                  label="كلمة السر"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={handleChangePassword}
                />
                    </Grid>
                    <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Cpassword"
                  label="تأكيد كلمةالسر"
                  type="password"
                  id="Cpassword"
                  value={values.Password}
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={(e)=>
                  {
                    //form.cpswd = e.target.value
                  }}
                />
                    </Grid>
                    <Grid item container justify='center' xs={3}>
                        <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >تحديث</Button>
                    </Grid>
                    </ThemeProvider>
                </Grid>
            </form>
                      </div>
          </div>
        </div>
      </Menu>
    );
  return (
      <div className={classes.grow}>
        <NavBar position="static">
          {/* <Toolbar width= "100%"> */}
          <Box display="flex" flexDirection="row-reverse" style={{padding: "1% 3% 1% 1%"}}>
            <Typography style={{ textAlign: "right"}} className={classes.grow}>
                <img src={logo} alt="Logo" className={classes.image}/>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}  style={{paddingTop: "3px"}}>
            {user !== "-2" && <NavLink to ="#" className={classes.btn} >
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleLogout}
                >
                 <Box fontWeight="fontWeightBold" ><ExitToAppIcon/> </Box>
                </MenuItem>
              </NavLink>}
              {user !== "-2" &&  <div className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem>
                  <Box fontWeight="fontWeightBold" ><img onClick={Profile} className={classes.pic} src={avata}/></Box>
                </MenuItem>
              </div>}
              <NavLink to="#" className={classes.btn}>
                <MenuItem
                  edge="end"
                  aria-label="language of current user"
                  aria-haspopup="true"
                  color="inherit"
                  aria-controls={LmenuId}
                  onClick={handleLanguageMenuOpen }
                  className={classes.btn}
                >
                  < ArrowDropDownOutlinedIcon/> <Box fontWeight="fontWeightBold">اللغة</Box>< TranslateOutlinedIcon/>
                </MenuItem>
              </NavLink>
              {user !== "-2" &&   <NavLink  to={to} className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Box fontWeight="fontWeightBold" >إعلان</Box>
                  {/* <ShoppingCartOutlinedIcon /> */}
                </MenuItem>
              </NavLink>}
              {user === "-2" && <NavLink to="/login" className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem  >تسجيل الدخول</MenuItem>
              </NavLink>}
              {user === "-2" && <NavLink to="/register" className={classes.btn} activeClassName={classes.navbarLinkActive}>
              <MenuItem  >أفتح حساب</MenuItem>
              </NavLink>}
              {user !== "-2" &&  <NavLink exact to="/" className={classes.btn} activeClassName={classes.navbarLinkActive}>
                <MenuItem
                  edge="end"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Box fontWeight="fontWeightBold">الرئيسية</Box>
                </MenuItem> 
              </NavLink>}
            </div>
            <div className={classes.sectionMobile} >
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            </Box>
          {/* </Toolbar> */}
        </NavBar>
        {renderMobileMenu}
        {renderLanguageMenu}
        <div id="prfl" className="modal productQuickView show" style={{paddingRight: '16px',display:'none'}}>
          <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <button type="button" className="close" onClick={Profile}  data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true"><HighlightOffIcon/></span>
                        </button>
                        <div className={classes.img123} style={{ width: "250px", height: "250px", }} >
                <Avatar className={classes.img123} src={avata} alt="" />
            </div>
            <form className={classes.spacing}>
                <Grid container justify="center" spacing={2}>
                <ThemeProvider theme={theme}>
                <Grid item xs={5}>
                <TextField
                    variant="outlined"
                    required
                    autoFocus
                    fullWidth
                    id="fullName"
                    label="الاسم الكامل"
                    name="fullName"
                    autoComplete="fname"
                    onChange={handleChangeName}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon /></InputAdornment>,
                    }}
                  />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phone"
                      label="رقم الهاتف"
                      name="phone"
                      autoComplete="phone"
                      disabled
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneOutlinedIcon /></InputAdornment>,
                        readOnly: true,
                      }}
                      onChange={handleChangePhone}
                    />
                    </Grid>
                    <Grid item xs={5}>
                    <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={values.Password}
                  label="كلمة السر"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={handleChangePassword}
                />
                    </Grid>
                    <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Cpassword"
                  label="تأكيد كلمةالسر"
                  type="password"
                  id="Cpassword"
                  value={values.Password}
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  }}
                  onChange={(e)=>
                  {
                    //form.cpswd = e.target.value
                  }}
                />
                    </Grid>
                    <Grid item container justify='center' xs={3}>
                        <Button  className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >تحديث</Button>
                    </Grid>
                    </ThemeProvider>
                </Grid>
            </form>
                      </div>
          </div>
        </div>
      </div>
    );
  }
}