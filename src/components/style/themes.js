const colors = {
  p1: "#447AEF",
  transparent: "transparent",
  white: "#ffffff",
  black: "#000",
  red: {
    flamingo: "#F14949",
    mojo: "#c03a3a",
    stiletto: "#992e2e",
    fireBrick: "#b31c1c",
    lotus: "#853A3E",
    salmon: "#FA6D6D",
    blush: "#FDD8DF",
    peach: "#E8928A",
    carnation: "#F74563",
    tickleMePink: "#FF88B4",
    sunglo: "#C95C58",
  },
  yellow: {
    goldTips: "#EEC21A",
    creamBrulee: "#FFEA99",
    broom: "#EBDB0F",
    budhaaGold: "#C69C17",
    gorse: "#FFE92D",
  },
  orange: {
    buff: "#F0C87B",
    coral: "#FF8C47",
    meteor: "#CA7012",
    neonCarrot: "#FF9131",
    rajah: "#FBAF62",
    supernova: "#FFAD28",
    tahitiGold: "#E65F28",
    froly: "#E8928A",
    vividTangerine: "#FF977A",
  },
  green: {
    algaeGreen: "#87DEBF",
    shamrock: "#37C998",
    jungleGreen: "#2CA076",
    conifer: "#BEE266",
    eucalyptus: "#217859",
    darkCyan: "#009186",
    gossip: "#9BCC6D",
    mint: "#B2EDD8",
    pastel: "#6ADB4F",
    seaGreen: "#3AAD6E",
    watercourse: "#065B3F",
    shamrockShade: "#33BD8E",
  },
  blue: {
    brightTurquoise: "#22D7EF",
    deepSkyBlue: "#00ACF3",
    ebonyClay: "#2F3645",
    midTurquoise: "#3AC9C5",
    prussion: "#32568A",
    royalBlue: "#447AEF",
    sail: "#ADDFF5",
    skyBlue: "#35D4FC",
    viking: "#4FB4DC",
    bondie: "#048ABA",
    indigo: "#596BD4",
    jacarta: "#292969",
  },
  purple: {
    cerise: "#DD2BB3",
    chantilly: "#F6C5EC",
    darkViolet: "#6E08C8",
    deepLilach: "#B446B7",
    lightSlate: "#A53EFF",
    midSlate: "#B48CF5",
    lightOrchid: "#DDA2D6",
    vividViolet: "#9832A1",
    wineBerry: "#511547",
    plum: "#79206B",
    scampi: "#6161A8",
    lavender: "#E0E0FF",
    electricViolet: "#8A3AF4",
    christalle: "#2B006E",
  },
  gray: {
    fog: "#f6f4f6",
    iron: "#dbdcdd",
    aluminium: "#a6a8ab",
    midGray: "#66676b",
    jumbo: "#616670",
    charcoal: "#231f20",
    gray100: "#f9f9f9",
    gray200: "#f3f3f3",
    gray300: "#e6e7e8",
    gray400: "#cacaca",
    gray500: "#c2c8cc",
    gray600: "#808184",
    gray700: "#404041",
    grayChateau: "#9C9DA1",
  },
};

const button = {
  contained: {
    primary: {
      default: `color: #fff;
  background-color: ${colors.green.shamrock};
  border:1px solid ${colors.green.shamrock};
  `,
      hover: `color: #fff;
  background-color: ${colors.green.jungleGreen};
  border:1px solid ${colors.green.jungleGreen};
  `,
      active: `color: #fff;
  background-color: ${colors.green.eucalyptus};
  border:1px solid ${colors.green.eucalyptus};
  `,
      disabled: `color:#fff;
  background-color: ${colors.green.algaeGreen};
  border:1px solid ${colors.green.algaeGreen};
  
  `,
    },
    secondary: {
      default: `color: #fff;
  background-color: ${colors.gray.aluminium};
  border:1px solid ${colors.gray.aluminium};
  `,
      hover: `color: #fff;
  background-color: ${colors.gray.gray600};
  border:1px solid ${colors.gray.gray600};
  `,
      active: `color: #fff;
  background-color: ${colors.gray.midGray};
  border:1px solid ${colors.gray.midGray};
  `,
      disabled: `color: #fff;
  background-color: ${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  
  `,
    },
    danger: {
      default: `color: #fff;
  background-color: ${colors.red.flamingo};
  border:1px solid ${colors.red.flamingo};
  `,
      hover: `color: #fff;
  background-color:${colors.red.mojo};
  border:1px solid ${colors.red.mojo}};
  `,
      active: `color: #fff;
  background-color:${colors.red.stiletto};
  border:1px solid ${colors.red.stiletto};
  `,
      disabled: `color: #fff;
  background-color:${colors.red.stiletto};
  border:1px solid ${colors.red.stiletto};
  
  `,
    },
    invert: {
      default: `color: ${colors.gray.charcoal};
  background-color: ${colors.gray.gray200};
  border:1px solid ${colors.gray.gray200};
  `,
      hover: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray100};
  border:1px solid ${colors.gray.gray100};
  `,
      active: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray100};
  border:1px solid ${colors.gray.gray100};
  `,
      disabled: `color: ${colors.gray.charcoal};
  background-color: ${colors.gray.jumbo};
  border:1px solid ${colors.gray.jumbo};
  
  `,
    },
    light: {
      default: `color: ${colors.gray.charcoal};
  background-color: ${colors.gray.gray200};
  border:1px solid ${colors.gray.gray200};
  `,
      hover: `color: ${colors.white};
  background-color:${colors.gray.gray600};
  border:1px solid ${colors.gray.gray600};
  `,
      active: `color: ${colors.white};
  background-color:${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  `,
      disabled: `color: #fff;
  background-color: ${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  
  `,
    },
    white: {
      default: `color: ${colors.gray.charcoal};
  background-color: ${colors.white};
  border:1px solid ${colors.white};
  `,
      hover: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray300};
  border:1px solid ${colors.gray.gray300};
  `,
      active: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray300};
  border:1px solid ${colors.gray.gray300};
  `,
      disabled: `color: ${colors.gray.charcoal};
  background-color: ${colors.gray.gray300};
  border:1px solid ${colors.gray.gray300};
  
  `,
    },
  },
  outlined: {
    primary: {
      default: `color: ${colors.green.shamrock};
  background-color: transparent;
  border:1px solid ${colors.green.shamrock};
  `,
      hover: `color:#fff;
  background-color: ${colors.green.shamrock};
  border:1px solid ${colors.green.shamrock};
  `,
      active: `color: #fff
  background-color: ${colors.green.jungleGreen};
  border:1px solid ${colors.green.jungleGreen};
  `,
      disabled: `color:  #fff;
  background-color: ${colors.green.algaeGreen};
  border:1px solid ${colors.green.algaeGreen};
  
  `,
    },
    secondary: {
      default: `color: ${colors.gray.gray600};
  background-color: transparent;
  border:1px solid ${colors.gray.aluminium};
  `,
      hover: `color: #fff;
  background-color: ${colors.gray.aluminium};
  border:1px solid ${colors.gray.aluminium};
  `,
      active: `color: #fff;
  background-color: ${colors.gray.midGray};
  border:1px solid ${colors.gray.midGray};
  `,
      disabled: `color: #fff;
  background-color: ${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  
  `,
    },
    danger: {
      default: `color: ${colors.red.flamingo};
  background-color: transparent;
  border:1px solid ${colors.red.flamingo};
  `,
      hover: `color: #fff;
  background-color:${colors.red.flamingo};
  border:1px solid ${colors.red.flamingo};
  `,
      active: `color: #fff;
  background-color:${colors.red.stiletto};
  border:1px solid ${colors.red.stiletto};
  `,
      disabled: `color: #fff;
  background-color: ${colors.red.stiletto};
  border:1px solid ${colors.red.stiletto};
  
  `,
    },
    invert: {
      default: `color: ${colors.gray.gray500};
  background-color: transparent;
  border:1px solid ${colors.gray.gray500};
  `,
      hover: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  `,
      active: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray200};
  border:1px solid ${colors.gray.gray200};
  `,
      disabled: `color: ${colors.gray.charcoal};
  background-color: ${colors.gray.jumbo};
  border:1px solid ${colors.gray.jumbo};
  
  `,
    },
    light: {
      default: `color: ${colors.gray.gray600};
  background-color: transparent;
  border:1px solid ${colors.gray.gray400};
  `,
      hover: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray300};
  border:1px solid ${colors.gray.gray300};
  `,
      active: `color: ${colors.gray.charcoal};
  background-color:${colors.gray.gray300};
  border:1px solid ${colors.gray.gray300};
  `,
      disabled: `color: #fff;
  background-color: ${colors.gray.iron};
  border:1px solid ${colors.gray.iron};
  
  `,
    },
    white: {
      default: `color: ${colors.white};
  background-color: transparent;
  border:1px solid ${colors.white};
  `,
      hover: `color: ${colors.gray.charcoal};
  background-color:${colors.white};
  border:1px solid ${colors.white};
  `,
      active: `color: ${colors.gray.charcoal};
  background-color:${colors.white};
  border:1px solid ${colors.white};
  `,
      disabled: `color: ${colors.gray.gray400};
  background-color: ${colors.gray.gray200};
  border:1px solid ${colors.gray.gray200};
  
  `,
    },
  },
};

const hexOpacity = {
  _100: "FF",
  _99: "FC",
  _98: "FA",
  _97: "F7",
  _96: "F5",
  _95: "F2",
  _94: "F0",
  _93: "ED",
  _92: "EB",
  _91: "E8",
  _90: "E6",
  _89: "E3",
  _88: "E0",
  _87: "DE",
  _86: "DB",
  _85: "D9",
  _84: "D6",
  _83: "D4",
  _82: "D1",
  _81: "CF",
  _80: "CC",
  _79: "C9",
  _78: "C7",
  _77: "C4",
  _76: "C2",
  _75: "BF",
  _74: "BD",
  _73: "BA",
  _72: "B8",
  _71: "B5",
  _70: "B3",
  _69: "B0",
  _68: "AD",
  _67: "AB",
  _66: "A8",
  _65: "A6",
  _64: "A3",
  _63: "A1",
  _62: "9E",
  _61: "9C",
  _60: "99",
  _59: "96",
  _58: "94",
  _57: "91",
  _56: "8F",
  _55: "8C",
  _54: "8A",
  _53: "87",
  _52: "85",
  _51: "82",
  _50: "80",
  _49: "7D",
  _48: "7A",
  _47: "78",
  _46: "75",
  _45: "73",
  _44: "70",
  _43: "6E",
  _42: "6B",
  _41: "69",
  _40: "66",
  _39: "63",
  _38: "61",
  _37: "5E",
  _36: "5C",
  _35: "59",
  _34: "57",
  _33: "54",
  _32: "52",
  _31: "4F",
  _30: "4D",
  _29: "4A",
  _28: "47",
  _27: "45",
  _26: "42",
  _25: "40",
  _24: "3D",
  _23: "3B",
  _22: "38",
  _21: "36",
  _20: "33",
  _19: "30",
  _18: "2E",
  _17: "2B",
  _16: "29",
  _15: "26",
  _14: "24",
  _13: "21",
  _12: "1F",
  _11: "1C",
  _10: "1A",
  _9: "17",
  _8: "14",
  _7: "12",
  _6: "0F",
  _5: "0D",
  _4: "0A",
  _3: "08",
  _2: "05",
  _1: "03",
  _0: "00",
};

const Theme = {
  hexOpacity,
  colors: colors,
  palette: {
    colors: [
      colors.purple.cerise,
      colors.orange.rajah,
      colors.blue.brightTurquoise,
      colors.green.darkCyan,
      colors.red.carnation,
      colors.blue.bondie,
      colors.yellow.gorse,
      colors.green.algaeGreen,
      colors.red.fireBrick,
      colors.purple.plum,
      colors.purple.lightOrchid,
      colors.orange.coral,
      colors.red.salmon,
      colors.green.conifer,
      colors.blue.midTurquoise,
      colors.orange.neonCarrot,
      colors.purple.midSlate,
      colors.blue.skyBlue,
      colors.blue.prussion,
      colors.yellow.creamBrulee,
      colors.red.radicalRed,
      colors.orange.meteor,
      colors.blue.viking,
      colors.green.mint,
      colors.yellow.goldTips,
      colors.red.tickleMePink,
      colors.purple.lightSlate,
      colors.green.gossip,
      colors.blue.royalBlue,
      colors.red.blush,
      colors.red.lotus,
      colors.orange.buff,
      colors.purple.deepLilach,
      colors.green.seaGreen,
      colors.red.peach,
      colors.blue.sail,
      colors.green.eucalyptus,
      colors.purple.vividViolet,
      colors.orange.supernova,
      colors.yellow.broom,
      colors.purple.wineBerry,
      colors.blue.deepSkyBlue,
      colors.orange.tahitiGold,
      colors.yellow.budhaaGold,
      colors.purple.chantilly,
      colors.green.pastel,
      colors.green.watercourse,
      colors.purple.darkViolet,
    ],
  },
  tabs: {
    default: {
      primary: {
        color: colors.gray.gray700,
        activeColor: colors.blue.royalBlue,
      },
      secondary: {
        color: colors.gray.aluminium,
        activeColor: colors.blue.royalBlue,
      },
      dark: {
        color: colors.gray.aluminium,
        activeColor: colors.blue.ebonyClay,
      },
    },
    fill: {
      primary: {
        color: colors.gray.charcoal,
        activeColor: colors.gray.charcoal,
        activeBgColor: colors.gray.gray200,
      },
    },
  },
  viewFields: {
    primary: colors.gray.charcoal,
    secondary: colors.gray.gray600,
    tertiary: colors.gray.aluminium,
    danger: colors.red.flamingo,
    invert: colors.white,
    link: colors.blue.royalBlue,
    warning: colors.orange.supernova,
    success: colors.green.jungleGreen,
    info: colors.blue.indigo,
  },
  checkbox: {
    primary: colors.green.shamrock,
    secondary: colors.gray.gray600,
    danger: colors.red.flamingo,
  },
  messageBox: {
    success: colors.green.jungleGreen,
    error: colors.red.salmon,
    warning: colors.orange.supernova,
    info: colors.blue.indigo,
  },
  shadow: {
    none: "0px",
    shadow1:
      "0 2px 1px -1px rgba(0,0,0,0.02), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)",
    shadow2: "0 4px 6px 0 rgba(0,0,0,0.05), 0 4px 3px 0 rgba(0,0,0,0.05)",
    shadow3: "0 2px 5px 0 rgba(0,0,0,0.10), 0 2px 10px 0px rgba(0,0,0,0.08)",
    shadow4:
      "0 3px 9px 0 rgba(249,249,249,0.08), 0 19px 30px -8px rgba(0,0,0,0.05)",
  },

  radius: {
    none: "0px",
    small: "4px",
    medium: "10px",
    xl: "30px",
  },
  overlay: {
    light: "rgba(47,54,69,0.6)",
    medium: "rgba(47,54,69,0.7)",
  },
  button: button,
};

export default Theme;
