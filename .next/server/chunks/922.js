"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
;// CONCATENATED MODULE: ./components/Header.js


//Remember that component names should always start with a Capital letter.
/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/ 
const linkStyle = {
    marginRight: 15
};
const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "jsx-82f39076c6304bbc" + " " + "navbar",
                /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-82f39076c6304bbc" + " " + "max-width",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-82f39076c6304bbc" + " " + "logo",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                className: "jsx-82f39076c6304bbc",
                                children: [
                                    "Portfo",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-82f39076c6304bbc",
                                        children: "lio"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "jsx-82f39076c6304bbc" + " " + "menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-82f39076c6304bbc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "jsx-82f39076c6304bbc",
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-82f39076c6304bbc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "jsx-82f39076c6304bbc",
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-82f39076c6304bbc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/projects",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "jsx-82f39076c6304bbc",
                                            children: "Projects"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-82f39076c6304bbc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "jsx-82f39076c6304bbc",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "82f39076c6304bbc",
                children: '.navbar.jsx-82f39076c6304bbc{width:100%;padding:20px 0;font-family:"Ubuntu",sans-serif;background:hsl(242,19%,5%)}.max-width.jsx-82f39076c6304bbc{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.logo.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc{color:#fff;font-size:35px;font-weight:600}.navbar.jsx-82f39076c6304bbc .logo.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc span.jsx-82f39076c6304bbc{color:hsl(342,92%,46%);-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.navbar.sticky.jsx-82f39076c6304bbc .logo.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc span.jsx-82f39076c6304bbc{color:#fff}.navbar.jsx-82f39076c6304bbc .menu.jsx-82f39076c6304bbc li.jsx-82f39076c6304bbc{padding:20px 10px 5px 10px;list-style:none;display:inline-block}.navbar.jsx-82f39076c6304bbc .menu.jsx-82f39076c6304bbc li.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc{display:block;color:#fff;font-size:18px;font-weight:500;margin-left:25px;-webkit-transition:color.3s ease;-moz-transition:color.3s ease;-o-transition:color.3s ease;transition:color.3s ease}.navbar.jsx-82f39076c6304bbc .menu.jsx-82f39076c6304bbc li.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc:hover,.navbar.sticky.jsx-82f39076c6304bbc .menu.jsx-82f39076c6304bbc li.jsx-82f39076c6304bbc a.jsx-82f39076c6304bbc:hover{color:hsl(342,92%,46%)}'
            })
        ]
    })
;
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/MyLayout.js

/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/ 
/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */ 


const layoutStyle = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    textDecoration: "none",
    color: "#fff"
};
/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */ const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://kit.fontawesome.com/36c1d4a9bc.js",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        src: "https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.js",
                        strategy: "onload",
                        onLoad: ()=>console.log(`script loaded correctly, window.FB has been populated`)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    })
;
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;