"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 3535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// UNUSED EXPORTS: Body

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./components/common/Containers/index.js + 7 modules
var Containers = __webpack_require__(7351);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 165 modules
var motion = __webpack_require__(3571);
// EXTERNAL MODULE: ./prismicio.js + 1 modules
var prismicio = __webpack_require__(1322);
;// CONCATENATED MODULE: ./components/common/Header/utils.js




const LinkPage = (data, pagename)=>{
    const dataMenu = {
        _meta: {
            type: data.type,
            lang: data.lang,
            uid: data.uid,
            url: data.uid
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: data.url === "" ? `/${(0,prismicio/* linkResolver */.kG)(dataMenu)}` : data.uid,
            passHref: true,
            prefetch: true,
            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                id: data.id,
                className: data.uid === pagename ? "selected" : "",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(motion/* motion.li */.E.li, {
                    className: "nav-item",
                    animate: true,
                    children: [
                        data.text,
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "underline"
                        })
                    ]
                })
            })
        }, `top-nav-${data.id}`)
    });
};
const LinkLogo = ()=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: `/`,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("picture", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("source", {
                        srcSet: "logo.png",
                        media: "(max-width: 500px)"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("source", {
                        srcSet: "logo.png",
                        media: "(max-width: 960px)"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "logo.png",
                        alt: "clarosur"
                    })
                ]
            })
        })
    });
const validNavbarLink = (menuLink)=>{
    const { label , link  } = menuLink;
    if (link.link_type === "Document" && link.uid !== "" && label[0].text !== "") {
        return true;
    } else if ((link.link_type === "Web" || link.type === "Media") && link.url !== "" && label[0].text !== "") {
        return true;
    } else {
        return false;
    }
};
const renderedMenuLinks = (menuLinks, pageName)=>Array.isArray(menuLinks) ? menuLinks.map((menuLink, index)=>{
        const { label , link  } = menuLink;
        if (validNavbarLink(menuLink)) {
            return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: /*#__PURE__*/ jsx_runtime.jsx(LinkPage, {
                    pageName: pageName,
                    uid: link?.uid || "",
                    lang: link?.lang || "",
                    type: link?.type || "",
                    text: label || "-",
                    id: link?.id || "#",
                    slug: link?.slug || "#",
                    url: link?.url || ""
                }, index + "_menu_links")
            });
        }
    }) : "";

;// CONCATENATED MODULE: ./components/common/Header/HeaderStyles.js

const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};
const navMenuItems = {
    hidden: {
        opacity: 0,
        x: 50
    },
    show: {
        opacity: 1,
        x: 0
    }
};
const Anchor = styled_components_cjs/* default.a.withConfig */.ZP.a.withConfig({
    componentId: "sc-c2870a0a-0"
})`
  margin: 0;
  &.fullwidth {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  text-decoration: none;
`;
const ButtonContainer = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
    componentId: "sc-c2870a0a-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: ${(props)=>props.theme.typography.fontFamily};
  white-space: nowrap;
  border-radius: ${(props)=>props.theme.button.borderRadius};
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  height: ${(props)=>props.theme.button.height};
  
  background:${(props)=>props.theme.colors.bgColorTertiary};
  
  color:${(props)=>props.theme.colors.white};
  
  :hover {
    background: #e4e1e1;
    color:${(props)=>props.theme.colors.grey};
  }
  padding:${(props)=>props.theme.button.padding};
  
  @media (max-width: ${(props)=>props.theme.breakpoints.md}) {
    width: 100%;
  }
`;
const NavContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2870a0a-2"
})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    padding: 8px 16px;
    font-size: 16px;
    height: 40px;
  }

  
  background: ${(props)=>props.theme.colors.secondary};
  color: ${(props)=>props.theme.colors.secondary};
  border-bottom: 1px solid rgba(0, 17, 51, 0.05);
  z-index: 9999;
  height: 65px;

  @media (max-width: 1000px) {
    height: 57px;
  }

  .navButton {
    height: 24px;
  }
`;
const SectionContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2870a0a-3"
})`
  max-width: ${(props)=>props.theme.sliceContainer.maxWidth};
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  // flex-direction: row;
  align-items: center;
  
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
    display: none;
    margin-right: -12px;
    @media (max-width: 1000px) {
      display: flex;
      max-width: 44px;
    }
  }
  .hamRotate.active {
    transform: rotate(45deg);
    .line {
      stroke: #001133c1;
    }
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #013;
    stroke-width: 5.5;
    stroke-linecap: round;
    transition: all 0.4s ease;
  }
  .ham8 .top {
    stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: transform 400ms, stroke-dashoffset 400ms;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
`;
// export const SectionContainer = styled.div`
//   max-width: ${(props) => props.theme.sliceContainer.maxWidth};
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 24px;
//   a {
//     display: flex;
//     height: 39px;
//     letter-spacing: 0px;
//   }
// `;
const LeftWrap = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2870a0a-4"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px;
    list-style: none;
    height: 100%;
    padding: 0;
    a {
      letter-spacing: 0px;
      height: 100%;
      li {
        position: relative;
        height: 100%;
        padding: 0 20px 0 20px;
        margin: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
        color: #00113399;
        transition: color 0.4s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0px;
        &:hover {
          color: ${(props)=>props.theme.colors.textPrimary};
        }
        .underline {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: -1px;
          transition: all 0.5s ease;
          height: 2px;
          // background: ${(props)=>props.theme.colors.primary};
          opacity: 0;
          transition: opacity 0.4s ease;
        }
      }
    }
    a.selected {
      li {
        letter-spacing: 0px;
        color: ${(props)=>props.theme.colors.primary};
        .underline {
          opacity: 1;
        }
      }
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    a {
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`;
const MobileNavContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-c2870a0a-5"
})`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  // background: rgb(250, 250, 251);
  // background: ${(props)=>props.theme.colors.secondary};
  transform: translateX(100%);
  transition: transform 0.3s ease;

  #NavMobile {
    padding: 9px 0px 0px 24px;
  }

  #NavMenuMobile {
    margin-top: 38px;
    padding-left: 24px;
  }

  .button-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 8px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
      flex-direction: column;
      gap: 24px;
    }
    a {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  ul {
    list-style: none;
    display: flex;
    letter-spacing: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 0;
    padding: 9px 0px 0px 24px;
    &:first-child {
      margin-top: 81px;
    }
    li {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 42px;
      letter-spacing: 0px;
      color: #00113399;
      display: flex;
      &.lang {
        text-transform: uppercase;
        svg {
          margin-right: 8px;
        }
      }
      &.selected {
        a {
          color: ${(props)=>props.theme.colors.primary};
        }
      }
      a {
        align-items: center;
        height: auto;
        letter-spacing: 0px;
        font-weight: normal;
        text-decoration: none;
        color: #00113399;
        &.selected {
          color: ${(props)=>props.theme.colors.primary};
        }
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
  }
  &.on {
    transform: translateX(0%);
  }
`;

;// CONCATENATED MODULE: ./components/common/Header/Header.js




const Header = ({ header , pagename , activeDocMeta ,  })=>{
    const { 0: open , 1: setOpen  } = (0,react.useState)(false);
    const HamburgerBehavior = ()=>{
        setOpen(!open);
    };
    activeDocMeta.lang = header.lang;
    const menuLinks = header?.data?.menulinks || [];
    const calltoactiontext = header?.data?.calltoactiontext || [];
    const calltoactionUri = header?.data?.calltoactionurl.url || {};
    return /*#__PURE__*/ jsx_runtime.jsx(NavContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SectionContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(LinkLogo, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(LeftWrap, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: renderedMenuLinks(menuLinks, pagename)
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Anchor, {
                            id: calltoactionUri,
                            href: calltoactionUri,
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx(ButtonContainer, {
                                fullwidth: true,
                                children: calltoactiontext[0]?.text || "Contact"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    className: `ham hamRotate ham8 ${open && "active"}`,
                    viewBox: "0 0 100 100",
                    width: "50",
                    onClick: HamburgerBehavior,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line top",
                            d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line middle",
                            d: "m 30,50 h 40"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            className: "line bottom",
                            d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MobileNavContainer, {
                    className: open && "on",
                    children: open && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                style: {
                                    padding: "10px 10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(LinkLogo, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                children: renderedMenuLinks(menuLinks, pagename)
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Anchor, {
                                id: calltoactionUri,
                                href: calltoactionUri,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(ButtonContainer, {
                                    fullwidth: true,
                                    children: calltoactiontext[0]?.text || "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/common/Header/index.js


// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1581);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterList/FooterListStyles.jsx

const FooterListContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-af92e4c9-0"
})`
	// width: 100%;
	margin-left: 200px;
	
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
		margin-left: 0px;
	}
	
	font-family: ${(props)=>props.theme.typography.fontFamily};
		h3 {
			line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
			font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
			font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
			color: ${(props)=>props.theme.colors.white};
			letter-spacing: .4px;
			text-transform: uppercase;
			margin: 0;
			margin-bottom: 24px;
			@media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
				width: 200%;
				margin-top: 24px;
				margin-bottom: 16px;
				line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
				font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
				font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
			}
		}
		ul {
			margin: 0;
			padding: 0;
			li {
				list-style: none;
					&:hover {
						transform: scale(1.1);
						}
					&:not(:last-child){
						margin-bottom: 8px;
						margin-right: 20px;
					}
				a {
					text-decoration: none;
					font-size: 16px;
					font-weight: 400;
					line-height: 24px;
					color: white;
					transition: color .3s ease;
					&:hover {
						color: white;
					}
				}
			}
	}
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterList/FooterList.jsx





// eslint-disable-next-line no-unused-vars
const FooterList = ({ title ="" , items =[] , socialLinks  })=>{
    const { data: { linkgroup  }  } = items;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterListContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: linkgroup.map((item, id)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: item?.link?.slug && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: (0,prismicio/* hrefResolver */.Ew)(item.link),
                            scroll: false,
                            passHref: true,
                            children: item.label
                        })
                    }, id))
            })
        ]
    });
};
FooterList.propTypes = {
    title: (prop_types_default()).string,
    items: (prop_types_default()).array
};
FooterList.defaultProps = {
    title: "Company",
    items: [
        {
            name: "item-1",
            url: "/url-1"
        },
        {
            name: "item-2",
            url: "/url-2"
        },
        {
            name: "item-3",
            url: "/url-3"
        },
        {
            name: "item-4",
            url: "/url-4"
        }
    ]
};
/* harmony default export */ const FooterList_FooterList = (FooterList);

;// CONCATENATED MODULE: ./components/common/footer/subComponents/SocialLinks/SocialLinksStyles.jsx

const SocialLinksStyles_SocialLinksContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d708d07f-0"
})`
// width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: ${(props)=>props.theme.typography.fontFamily};
h3 {
    
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
        width: 200%;
        margin-top: 24px;
        margin-bottom: 16px;
        line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
        font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
        font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
    }
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`;

;// CONCATENATED MODULE: ./components/Logos/LogoInstagram.js

const LogoInstagram = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.9234 14.7321C33.8578 13.2443 33.6172 12.2215 33.2726 11.3352C32.917 10.3945 32.3701 9.5522 31.6534 8.85202C30.9533 8.14095 30.1054 7.58841 29.1756 7.23843C28.2842 6.89378 27.2667 6.6532 25.7789 6.5876C24.2801 6.51645 23.8043 6.5 20.0027 6.5C16.2012 6.5 15.7254 6.51645 14.2321 6.58205C12.7443 6.64764 11.7215 6.88844 10.8354 7.23287C9.89447 7.58841 9.0522 8.13539 8.35202 8.85202C7.64094 9.5522 7.08862 10.4 6.73843 11.3299C6.39378 12.2215 6.1532 13.2388 6.0876 14.7265C6.01645 16.2254 6 16.7012 6 20.5027C6 24.3043 6.01645 24.7801 6.08205 26.2734C6.14764 27.7611 6.38844 28.784 6.73308 29.6702C7.08862 30.611 7.64094 31.4533 8.35202 32.1534C9.0522 32.8645 9.90002 33.4171 10.8299 33.767C11.7215 34.1117 12.7388 34.3523 14.2267 34.4179C15.7198 34.4837 16.1959 34.4999 19.9974 34.4999C23.7989 34.4999 24.2747 34.4837 25.768 34.4179C27.2558 34.3523 28.2786 34.1117 29.1647 33.767C31.0464 33.0395 32.5342 31.5518 33.2617 29.6702C33.6061 28.7786 33.8469 27.7611 33.9125 26.2734C33.9781 24.7801 33.9946 24.3043 33.9946 20.5027C33.9946 16.7012 33.989 16.2254 33.9234 14.7321ZM31.402 26.164C31.3417 27.5315 31.112 28.2699 30.9206 28.7622C30.4501 29.982 29.482 30.9501 28.2621 31.4206C27.7699 31.612 27.0261 31.8417 25.664 31.9018C24.1871 31.9676 23.7442 31.9838 20.0083 31.9838C16.2724 31.9838 15.8239 31.9676 14.3524 31.9018C12.9849 31.8417 12.2465 31.612 11.7542 31.4206C11.1472 31.1962 10.5946 30.8407 10.1462 30.3758C9.68123 29.9217 9.32569 29.3747 9.10134 28.7677C8.9099 28.2754 8.68021 27.5315 8.62017 26.1696C8.55436 24.6927 8.53812 24.2496 8.53812 20.5136C8.53812 16.7777 8.55436 16.3292 8.62017 14.8579C8.68021 13.4905 8.9099 12.752 9.10134 12.2598C9.32569 11.6525 9.68123 11.1002 10.1517 10.6515C10.6055 10.1866 11.1525 9.83103 11.7598 9.6069C12.252 9.41546 12.996 9.18577 14.3579 9.12551C15.8348 9.05992 16.2779 9.04347 20.0136 9.04347C23.7551 9.04347 24.198 9.05992 25.6695 9.12551C27.037 9.18577 27.7754 9.41546 28.2677 9.6069C28.8747 9.83103 29.4273 10.1866 29.8757 10.6515C30.3407 11.1055 30.6962 11.6525 30.9206 12.2598C31.112 12.752 31.3417 13.4958 31.402 14.8579C31.4675 16.3348 31.484 16.7777 31.484 20.5136C31.484 24.2496 31.4675 24.6871 31.402 26.164ZM20.0027 13.3099C16.0318 13.3099 12.8099 16.5316 12.8099 20.5027C12.8099 24.4739 16.0318 27.6955 20.0027 27.6955C23.9739 27.6955 27.1956 24.4739 27.1956 20.5027C27.1956 16.5316 23.9739 13.3099 20.0027 13.3099ZM20.0027 25.1685C17.4266 25.1685 15.337 23.0791 15.337 20.5027C15.337 17.9264 17.4266 15.8369 20.0027 15.8369C22.5791 15.8369 24.6685 17.9264 24.6685 20.5027C24.6685 23.0791 22.5791 25.1685 20.0027 25.1685ZM27.4799 14.7047C28.4075 14.7047 29.1594 13.9528 29.1594 13.0255C29.1594 12.098 28.4075 11.3463 27.4799 11.3463C26.5526 11.3463 25.8008 12.098 25.8008 13.0255C25.8008 13.9528 26.5526 14.7047 27.4799 14.7047Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoFacebook.js

const LogoFacebook = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M27.0137 22.25L27.7913 17.1827H22.9291V13.8943C22.9291 12.508 23.6083 11.1566 25.786 11.1566H27.9964V6.84234C27.9964 6.84234 25.9905 6.5 24.0726 6.5C20.0684 6.5 17.451 8.92703 17.451 13.3206V17.1827H13V22.25H17.451V34.5H22.9291V22.25H27.0137Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoTwitter.js

const LogoTwitter = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M31.1219 15.1675C31.1397 15.4162 31.1397 15.665 31.1397 15.9137C31.1397 23.5 25.3656 32.2412 14.8122 32.2412C11.5609 32.2412 8.54063 31.2995 6 29.6651C6.46195 29.7183 6.90607 29.7361 7.38579 29.7361C10.0685 29.7361 12.5381 28.83 14.5102 27.2843C11.9873 27.231 9.87309 25.5787 9.14465 23.3046C9.50001 23.3579 9.85532 23.3934 10.2285 23.3934C10.7437 23.3934 11.2589 23.3223 11.7386 23.198C9.10916 22.665 7.13701 20.3553 7.13701 17.566V17.495C7.90095 17.9214 8.78935 18.1879 9.73091 18.2233C8.18521 17.1929 7.17256 15.434 7.17256 13.4441C7.17256 12.3782 7.45677 11.401 7.95427 10.5482C10.7792 14.0304 15.0254 16.3045 19.7868 16.5533C19.698 16.1269 19.6446 15.6828 19.6446 15.2386C19.6446 12.0761 22.203 9.5 25.3832 9.5C27.0355 9.5 28.5279 10.1929 29.5761 11.3122C30.8731 11.0635 32.1167 10.5837 33.2183 9.9264C32.7918 11.2589 31.8858 12.3782 30.6954 13.0888C31.8503 12.9645 32.9696 12.6447 34 12.2005C33.2184 13.3375 32.2412 14.3502 31.1219 15.1675Z",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/LogoSpotify.js

const LogoSpotify = ({ bgColor =""  })=>/*#__PURE__*/ _jsx("svg", {
        width: "36",
        height: "37",
        viewBox: "0 0 91.36 91.36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M512,466.32A45.68,45.68,0,1,0,557.68,512,45.68,45.68,0,0,0,512,466.32Zm20.95,65.89a2.85,2.85,0,0,1-3.91.95c-10.73-6.56-24.23-8-40.13-4.4a2.85,2.85,0,1,1-1.27-5.55c17.4-4,32.33-2.27,44.37,5.09A2.85,2.85,0,0,1,532.95,532.21Zm5.59-12.44a3.56,3.56,0,0,1-4.9,1.17c-12.28-7.55-31-9.73-45.52-5.32a3.56,3.56,0,1,1-2.07-6.81c16.59-5,37.22-2.6,51.31,6.07A3.56,3.56,0,0,1,538.54,519.77Zm.48-13c-14.72-8.74-39-9.55-53.07-5.28a4.27,4.27,0,1,1-2.48-8.18c16.14-4.9,43-4,59.91,6.11a4.27,4.27,0,0,1-4.36,7.35Z",
            transform: "translate(-466.32 -466.32)",
            fill: bgColor === "" ? "#667085" : bgColor
        })
    });

;// CONCATENATED MODULE: ./components/Logos/index.js





;// CONCATENATED MODULE: ./components/common/footer/subComponents/SocialLinks/SocialLinks.jsx




const SocialLinks = ({ socialTitle ="" , socialUrl =[]  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SocialLinksStyles_SocialLinksContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: socialTitle
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: /*#__PURE__*/ jsx_runtime.jsx("li", {})
            })
        ]
    });
};
SocialLinks.propTypes = {
    socialTitle: (prop_types_default()).string,
    socialUrl: (prop_types_default()).array
};
SocialLinks.defaultProps = {
    socialTitle: "Follow us",
    socialUrl: [
        {
            url: "#"
        },
        {
            url: "#"
        },
        {
            url: "#"
        }, 
    ]
};
/* harmony default export */ const SocialLinks_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./components/common/footer/subComponents/TrustPilot/TrustPilot.jsx

const TrustPilot_SocialLinksContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d69c08d0-0"
})`
width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: ${(props)=>props.theme.typography.fontFamily};
h3 {
    
    line-height:  ${(props)=>props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props)=>props.theme.typography.h3.desktop.fontSize};
    font-weight:${(props)=>props.theme.typography.h3.desktop.fontWeight};
    color: ${(props)=>props.theme.colors.white};
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props)=>props.theme.breakpoints.sm}) {
        width: 200%;
        margin-top: 24px;
        margin-bottom: 16px;
        line-height:  ${(props)=>props.theme.typography.h3.mobile.lineHeight};
        font-size: ${(props)=>props.theme.typography.h3.mobile.fontSize};
        font-weight:${(props)=>props.theme.typography.h3.mobile.fontWeight};
    }
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/TrustPilot/index.jsx


const TrustPilot = ()=>{
    return /*#__PURE__*/ _jsx(SocialLinksContainer, {});
};
/* harmony default export */ const subComponents_TrustPilot = ((/* unused pure expression or super */ null && (TrustPilot)));

;// CONCATENATED MODULE: ./components/common/footer/subComponents/Logo/LogoStyles.jsx

const LogoContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-5b45dfdc-0"
})`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  svg {
    width: 50px;
  }
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/Logo/Logo.jsx


// import { LogoRia, LogoRiaGray } from "../../../Logos/index"

const Logo = ({ brand ="Ria"  })=>{
    ;
    return /*#__PURE__*/ jsx_runtime.jsx(LogoContainer, {});
};
Logo.propTypes = {
    brand: prop_types_default().oneOf([
        "Ria",
        "Ria-Gray"
    ])
};
Logo.defaultProps = {
    brand: "Ria-Gray"
};
/* harmony default export */ const Logo_Logo = ((/* unused pure expression or super */ null && (Logo)));

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterCopyright/FooterCopyrightStyles.jsx

const FooterCopyrightContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-d7f78b6c-0"
})`
	// width: 100%;
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
    font-family: ${(props)=>props.theme.typography.fontFamily};
    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin: 48px 0 0;
        color: white;
    }
`;

;// CONCATENATED MODULE: ./components/common/footer/subComponents/FooterCopyright/FooterCopyright.jsx



const FooterCopyright = ({ copyrightText  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterCopyrightContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                    width: "200",
                    height: "30",
                    viewBox: "0 0 200 30",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M79.2255 29.4771C79.0153 29.4771 78.9102 29.2971 78.9102 28.937V0.540039C78.9102 0.180013 79.0153 0 79.2255 0H85.2447C87.7098 0 89.506 0.750053 90.6334 2.25016C91.7608 3.72026 92.3246 5.88041 92.3246 8.73062C92.3246 10.8008 92.0188 12.5559 91.4073 13.996C90.815 15.4061 89.9264 16.3812 88.7416 16.9212V17.0112L93.3564 28.847C93.4329 29.027 93.4424 29.1771 93.3851 29.2971C93.3469 29.4171 93.2609 29.4771 93.1271 29.4771H89.9455C89.7735 29.4771 89.6398 29.3571 89.5442 29.1171L85.2161 17.7313H82.3497V28.937C82.3497 29.2971 82.2351 29.4771 82.0058 29.4771H79.2255ZM82.3497 13.456H85.1014C86.4199 13.456 87.3754 13.0959 87.9677 12.3759C88.5792 11.6558 88.885 10.5007 88.885 8.91063C88.885 7.35052 88.6079 6.24044 88.0537 5.58039C87.4996 4.92035 86.5632 4.59032 85.2447 4.59032H82.3497V13.456Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M112.857 29.4771C110.737 29.4771 109.146 28.5654 108.086 26.7421C107.026 24.8898 106.496 22.2417 106.496 18.7976V10.6795C106.496 7.20647 107.026 4.55831 108.086 2.73499C109.146 0.911662 110.737 0 112.857 0C114.961 0 116.544 0.911662 117.604 2.73499C118.664 4.55831 119.194 7.20647 119.194 10.6795V18.7976C119.194 22.2417 118.664 24.8898 117.604 26.7421C116.544 28.5654 114.961 29.4771 112.857 29.4771ZM112.857 24.9188C113.998 24.9188 114.857 24.3833 115.435 23.3125C116.013 22.2127 116.303 20.6209 116.303 18.5371V10.9399C116.303 8.85615 116.013 7.27883 115.435 6.20799C114.857 5.1082 113.998 4.55831 112.857 4.55831C111.717 4.55831 110.849 5.1082 110.255 6.20799C109.677 7.27883 109.387 8.85615 109.387 10.9399V18.5371C109.387 20.6209 109.677 22.2127 110.255 23.3125C110.849 24.3833 111.717 24.9188 112.857 24.9188Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M139.536 29.4771C137.958 29.4771 136.653 29.1438 135.62 28.4771C134.606 27.8105 133.874 26.854 133.423 25.6077C132.972 24.3324 132.794 22.7962 132.888 20.9992C132.925 20.5064 133.057 20.2601 133.282 20.2601H135.93C136.174 20.2601 136.287 20.4774 136.268 20.9122C136.268 22.3324 136.55 23.3759 137.113 24.0425C137.677 24.6802 138.541 24.999 139.705 24.999C140.851 24.999 141.696 24.7236 142.24 24.1729C142.804 23.5933 143.086 22.7092 143.086 21.5209C143.086 20.9702 143.02 20.4919 142.888 20.0862C142.757 19.6514 142.532 19.2746 142.212 18.9558C141.893 18.6079 141.461 18.2601 140.916 17.9123L136.832 15.2168C135.93 14.6081 135.207 13.956 134.662 13.2603C134.118 12.5357 133.733 11.7097 133.507 10.7822C133.282 9.85468 133.169 8.79675 133.169 7.60839C133.188 5.14472 133.723 3.26074 134.775 1.95644C135.827 0.652147 137.395 0 139.48 0C140.945 0 142.184 0.318827 143.198 0.956481C144.231 1.56515 145.001 2.47816 145.508 3.6955C146.015 4.88386 146.213 6.37656 146.1 8.17358C146.062 8.6953 145.95 8.95616 145.762 8.95616H143.086C142.973 8.95616 142.888 8.89819 142.832 8.78226C142.776 8.66632 142.757 8.46343 142.776 8.17358C142.832 7.01421 142.56 6.1012 141.959 5.43456C141.376 4.73894 140.541 4.39113 139.451 4.39113C138.494 4.39113 137.771 4.65199 137.282 5.1737C136.794 5.69542 136.55 6.478 136.55 7.52144C136.55 8.07214 136.616 8.56487 136.747 8.99964C136.878 9.40542 137.104 9.78222 137.423 10.13C137.761 10.4778 138.212 10.8401 138.775 11.2169L142.804 13.869C143.724 14.4487 144.447 15.1008 144.973 15.8255C145.518 16.5211 145.903 17.3326 146.128 18.2601C146.372 19.1876 146.485 20.289 146.466 21.5644C146.466 24.086 145.912 26.0424 144.804 27.4337C143.696 28.7959 141.94 29.4771 139.536 29.4771Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M166.26 29.4771C163.98 29.4771 162.239 28.5637 161.036 26.7371C159.832 24.9104 159.23 22.1851 159.23 18.5613V0.530323C159.23 0.176774 159.331 0 159.531 0H162.184C162.294 0 162.376 0.0441938 162.431 0.132581C162.485 0.220967 162.513 0.353548 162.513 0.530323V18.4729C162.513 20.5058 162.823 22.082 163.442 23.2016C164.062 24.2917 165.001 24.8368 166.26 24.8368C167.518 24.8368 168.457 24.2917 169.077 23.2016C169.697 22.082 170.007 20.5058 170.007 18.4729V0.530323C170.007 0.176774 170.107 0 170.308 0H172.961C173.179 0 173.289 0.176774 173.289 0.530323V18.6497C173.289 22.1557 172.678 24.8368 171.456 26.6929C170.235 28.549 168.502 29.4771 166.26 29.4771Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M186.247 29.4771C186.043 29.4771 185.941 29.2971 185.941 28.937V0.540039C185.941 0.180013 186.043 0 186.247 0H192.078C194.466 0 196.206 0.750053 197.298 2.25016C198.391 3.72026 198.937 5.88041 198.937 8.73062C198.937 10.8008 198.64 12.5559 198.048 13.996C197.474 15.4061 196.613 16.3812 195.466 16.9212V17.0112L199.936 28.847C200.01 29.027 200.02 29.1771 199.964 29.2971C199.927 29.4171 199.844 29.4771 199.714 29.4771H196.632C196.465 29.4771 196.336 29.3571 196.243 29.1171L192.05 17.7313H189.274V28.937C189.274 29.2971 189.162 29.4771 188.94 29.4771H186.247ZM189.274 13.456H191.939C193.217 13.456 194.142 13.0959 194.716 12.3759C195.308 11.6558 195.605 10.5007 195.605 8.91063C195.605 7.35052 195.336 6.24044 194.799 5.58039C194.262 4.92035 193.355 4.59032 192.078 4.59032H189.274V13.456Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M6.79592 29.4771C4.59978 29.4771 2.91377 28.5799 1.73789 26.7855C0.579296 24.9622 0 22.2851 0 18.7542V10.7663C0 7.20647 0.587942 4.52937 1.76383 2.73499C2.93971 0.911662 4.61708 0 6.79592 0C8.28307 0 9.56271 0.405183 10.6348 1.21555C11.707 2.02592 12.5024 3.18358 13.0212 4.68855C13.54 6.19352 13.7129 7.97343 13.54 10.0283C13.5227 10.173 13.4881 10.3177 13.4362 10.4624C13.4016 10.5782 13.3325 10.6361 13.2287 10.6361H10.7127C10.5051 10.6361 10.41 10.4624 10.4273 10.1151C10.4619 8.34967 10.1766 6.98941 9.57135 6.03434C8.98341 5.05032 8.07556 4.55831 6.8478 4.55831C5.65462 4.55831 4.72948 5.07926 4.07236 6.12116C3.43254 7.16306 3.11264 8.74038 3.11264 10.8531V18.624C3.11264 20.7367 3.43254 22.314 4.07236 23.3559C4.72948 24.3978 5.65462 24.9188 6.8478 24.9188C8.11014 24.9188 9.04393 24.4268 9.64917 23.4427C10.2544 22.4298 10.5138 21.0695 10.4273 19.362C10.41 19.0147 10.5051 18.841 10.7127 18.841H13.2028C13.393 18.841 13.5054 19.0436 13.54 19.4488C13.661 21.4747 13.4535 23.2402 12.9174 24.7451C12.3987 26.2501 11.6119 27.4222 10.557 28.2615C9.51947 29.0719 8.26577 29.4771 6.79592 29.4771Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M26.6955 29.4771C26.4766 29.4771 26.3672 29.2971 26.3672 28.937V0.540039C26.3672 0.180013 26.4766 0 26.6955 0H29.6209C29.8398 0 29.9492 0.180013 29.9492 0.540039V24.7067H37.7998C38.0386 24.7067 38.158 24.8868 38.158 25.2468V28.937C38.158 29.2971 38.0386 29.4771 37.7998 29.4771H26.6955Z",
                            fill: "white"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M51.5843 29.4771C51.3709 29.4771 51.2888 29.2821 51.3381 28.892L56.6566 0.405029C56.7059 0.13501 56.8126 0 56.9767 0H60.1284C60.309 0 60.4239 0.13501 60.4731 0.405029L65.8163 28.892C65.8491 29.0721 65.8409 29.2221 65.7917 29.3421C65.7589 29.4321 65.6932 29.4771 65.5947 29.4771H62.9847C62.8205 29.4771 62.7138 29.3421 62.6646 29.0721L59.4882 10.5757C59.3241 9.58568 59.1599 8.61061 58.9958 7.65054C58.848 6.66047 58.7003 5.6704 58.5526 4.68033H58.5033C58.3556 5.6404 58.1996 6.61547 58.0355 7.60554C57.8878 8.5656 57.7318 9.52567 57.5677 10.4857L54.4652 29.0271C54.4159 29.3271 54.301 29.4771 54.1205 29.4771H51.5843ZM54.9576 23.3116L55.524 18.9013H61.5073L62.0983 23.3116H54.9576Z",
                            fill: "white"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: copyrightText
                })
            ]
        })
    });
};
FooterCopyright.propTypes = {
    copyrightText: (prop_types_default()).string
};
FooterCopyright.defaultProps = {
    copyrightText: "Lorem Ipsum \xa9 2022 Lorem Ipsum. All rights reserved."
};
/* harmony default export */ const FooterCopyright_FooterCopyright = (FooterCopyright);

;// CONCATENATED MODULE: ./components/common/footer/index.js








const FooterWrapper = styled_components_cjs/* default.footer.withConfig */.ZP.footer.withConfig({
    componentId: "sc-fd3a36a5-0"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 24px;
  background-color: ${(props)=>props.backgroundColor ? props.backgroundColor : "white"};
`;
const FooterItemsContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
    componentId: "sc-fd3a36a5-1"
})`
  width: 45%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const Footer = ({ items ,  })=>{
    const { data: { data  } , data: { textrights  }  } = items;
    return /*#__PURE__*/ jsx_runtime.jsx(FooterWrapper, {
        backgroundColor: "#0B3954",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterItemsContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(FooterCopyright_FooterCopyright, {
                    copyrightText: "CLAROSUR \xa9 2023 , Inc. Todos los derechos reservados."
                }),
                /*#__PURE__*/ jsx_runtime.jsx(FooterList_FooterList, {
                    title: "clarosur",
                    items: items
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SocialLinks_SocialLinks, {
                    socialTitle: " "
                })
            ]
        })
    });
};
Footer.propTypes = {
};
Footer.defaultProps = {
};
/* harmony default export */ const common_footer = (Footer);

;// CONCATENATED MODULE: ./utils/seo.js


const getAlternates = ({ alternate_languages , sitename  })=>{
    return alternate_languages.map((page, i)=>/*#__PURE__*/ _jsx("link", {
            hrefLang: page.lang,
            rel: "alternate",
            href: `${sitename}${linkResolver(page)}/`
        }, i));
};
// Open Graph tags
const getMetaTags = ({ description , author , title  })=>[
        {
            name: `description`,
            content: description || dummy("")
        },
        {
            name: `twitter:card`,
            content: `summary`
        },
        {
            name: `twitter:creator`,
            content: "@clarosur"
        },
        {
            name: `twitter:title`,
            content: title || dummy("")
        },
        {
            name: `twitter:description`,
            content: description || dummy("")
        },
        {
            property: `og:title`,
            content: title || dummy("")
        },
        {
            property: `og:description`,
            content: description || dummy("")
        },
        {
            property: `og:url`,
            content: "https://clarosur.cl"
        },
        {
            property: `og:type`,
            content: `website`
        },
        {
            name: `og:image`,
            content: "https://images.prismic.io/clarosur/ac375b05-4a63-492c-87ad-b65f2bb080f4_SOCIAL-MEDIA.png"
        },
        {
            name: `og:image:alt`,
            content: "clarosur.cl"
        },
        {
            name: `og:image:width`,
            content: "1200"
        },
        {
            name: `og:image:height`,
            content: "630"
        },
        {
            name: `og:site_name`,
            content: "clarosur-city"
        },
        {
            name: `viewport`,
            content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        },
        {
            name: `keywords`,
            content: "Transforma tu flota hacia un futuro sostenible con nuestras asesor\xedas en proyectos de electromovilidad. Descubre c\xf3mo recambiar tus veh\xedculos de gasolina o bencina por opciones el\xe9ctricas eficientes y amigables con el medio ambiente. Nuestro equipo de expertos te guiar\xe1 en cada paso del proceso, desde la evaluaci\xf3n inicial hasta la implementaci\xf3n exitosa. \xa1Convi\xe9rtete en l\xedder de la revoluci\xf3n el\xe9ctrica y optimiza tus recursos hoy mismo!"
        }, 
    ].map((items, i)=>/*#__PURE__*/ jsx_runtime.jsx("meta", {
            ...items
        }, `meta-${i}`));
const dummy = (content = "")=>[
        {
            text: content,
            type: "heading 1",
            spans: []
        }, 
    ];
const getTitle = ({ type , title  })=>title.replace(/['"]+/g, "");

;// CONCATENATED MODULE: ./components/common/Layout.js








/**
 * The default layout for all pages.
 */ const Body = styled_components_cjs/* default.body.withConfig */.ZP.body.withConfig({
    componentId: "sc-cb9559b6-0"
})`
  background-color:${(props)=>props.theme.colors.secondary};
`;
const Layout = (props)=>{
    const { children , header , footer , page , activeDocMeta  } = props;
    const title = page?.data?.seoTitle || "clarosur.cl";
    const description = page?.data?.seodescription || "-";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: `${activeDocMeta.sitename}${(0,prismicio/* linkResolver */.kG)(page)}`
                    }),
                    getMetaTags({
                        description,
                        title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Body, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containers/* PageContainer */._z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(Header, {
                            header: header,
                            pagename: page ? page.uid ? page.uid : page.slugs[0] : "Home",
                            lang: page.lang || "es-cl",
                            activeDocMeta: activeDocMeta
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime.jsx(common_footer, {
                            items: footer
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;