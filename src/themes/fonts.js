import PoppinsWOFF from "../assets/fonts/Poppins-Regular.woff";
import DMSansBoldWOFF from "../assets/fonts/DMSans-Bold.woff";

const DMSans = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
		local('DM Sans'),
		local('DMSans-Bold'),
		url(${DMSansBoldWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const poppins = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('Poppins'),
		local('Poppins-Regular'),
		url(${PoppinsWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const fonts = [poppins,DMSans];

export default fonts;
