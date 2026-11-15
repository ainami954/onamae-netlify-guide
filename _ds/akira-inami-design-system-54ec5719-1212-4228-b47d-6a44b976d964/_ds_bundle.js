/* @ds-bundle: {"format":4,"namespace":"AkiraInamiDesignSystem_54ec57","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"BigNumeral","sourcePath":"components/social/BigNumeral.jsx"},{"name":"CTABar","sourcePath":"components/social/CTABar.jsx"},{"name":"CheckList","sourcePath":"components/social/CheckList.jsx"},{"name":"ComparisonTable","sourcePath":"components/social/ComparisonTable.jsx"},{"name":"DeviceFrame","sourcePath":"components/social/DeviceFrame.jsx"},{"name":"Eyebrow","sourcePath":"components/social/Eyebrow.jsx"},{"name":"Headline","sourcePath":"components/social/Headline.jsx"},{"name":"IconFeature","sourcePath":"components/social/IconFeature.jsx"},{"name":"PhotoSlot","sourcePath":"components/social/PhotoSlot.jsx"},{"name":"PostCanvas","sourcePath":"components/social/PostCanvas.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"aed4c0d5efa7","components/core/Icon.jsx":"faf975fcdb11","components/social/BigNumeral.jsx":"10f9811dce44","components/social/CTABar.jsx":"3181e2026b16","components/social/CheckList.jsx":"451a5bbf590c","components/social/ComparisonTable.jsx":"4ae3350fbd39","components/social/DeviceFrame.jsx":"fbed43299968","components/social/Eyebrow.jsx":"0ca8b128ebbc","components/social/Headline.jsx":"f9ac7a30bb63","components/social/IconFeature.jsx":"5ceb730befd8","components/social/PhotoSlot.jsx":"0a8445cce5be","components/social/PostCanvas.jsx":"c7100c8cceb1","ui_kits/instagram-posts/PostsA.jsx":"98d98c3d9f63","ui_kits/instagram-posts/PostsB.jsx":"1299fcb2d445"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AkiraInamiDesignSystem_54ec57 = window.AkiraInamiDesignSystem_54ec57 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 22px',
      background: dark ? 'var(--navy-800)' : 'var(--white)',
      color: dark ? 'var(--white)' : 'var(--navy-800)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 48,
  color = 'currentColor',
  strokeless = false,
  style
}) {
  const url = `https://unpkg.com/lucide-static@0.460.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMask: `url(${url}) center/contain no-repeat`,
      mask: `url(${url}) center/contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/social/BigNumeral.jsx
try { (() => {
function BigNumeral({
  value,
  size = 'var(--fs-numeral)',
  color = 'currentColor',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: size,
      lineHeight: .78,
      color,
      ...style
    }
  }, value);
}
Object.assign(__ds_scope, { BigNumeral });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/BigNumeral.jsx", error: String((e && e.message) || e) }); }

// components/social/CTABar.jsx
try { (() => {
function CTABar({
  children,
  tone = 'dark',
  fullBleed = false,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '22px 32px',
      background: dark ? 'var(--navy-800)' : 'var(--white)',
      color: dark ? 'var(--white)' : 'var(--navy-800)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      textAlign: 'center',
      width: fullBleed ? '100%' : 'auto',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CTABar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/CTABar.jsx", error: String((e && e.message) || e) }); }

// components/social/CheckList.jsx
try { (() => {
function CheckList({
  items,
  icon = 'circle-check',
  iconColor = 'currentColor',
  fontSize = 'var(--fs-small)',
  gap = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...style
    }
  }, items.map((it, i) => {
    const [lead, rest] = typeof it === 'string' ? [null, it] : [it.lead, it.text];
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start',
        fontSize,
        lineHeight: 'var(--lh-body)'
      }
    }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 30,
      color: iconColor,
      style: {
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, lead && /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 600
      }
    }, lead, " "), rest));
  }));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/social/ComparisonTable.jsx
try { (() => {
function ComparisonTable({
  columns,
  rows,
  tone = 'dark',
  style
}) {
  const dark = tone === 'dark';
  const line = dark ? 'var(--rule-on-dark)' : 'var(--navy-800)';
  const cell = {
    border: '2px solid ' + line,
    padding: '18px 16px',
    textAlign: 'center',
    fontSize: 'var(--fs-micro)',
    lineHeight: 1.35
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      color: dark ? 'var(--white)' : 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      background: dark ? 'var(--white)' : 'var(--navy-800)',
      color: dark ? 'var(--navy-800)' : 'var(--white)',
      fontWeight: 500,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: cell
  }, v))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/social/DeviceFrame.jsx
try { (() => {
function DeviceFrame({
  kind = 'tablet',
  width = 560,
  children,
  style
}) {
  const phone = kind === 'phone';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      boxSizing: 'border-box',
      background: '#111',
      borderRadius: phone ? 44 : 'var(--radius-device)',
      padding: phone ? 14 : 22,
      boxShadow: 'var(--shadow-device)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      height: phone ? 18 : 14,
      alignItems: 'center',
      marginTop: -8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9,
      background: '#333'
    }
  }), !phone && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9,
      background: '#333'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: phone ? 30 : 14,
      overflow: 'hidden',
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { DeviceFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/DeviceFrame.jsx", error: String((e && e.message) || e) }); }

// components/social/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'currentColor',
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      lineHeight: 1.3,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/social/Headline.jsx
try { (() => {
const sizes = {
  xl: 'var(--fs-h1)',
  lg: 'var(--fs-h2)',
  md: 'var(--fs-h3)'
};
function Headline({
  children,
  size = 'lg',
  align = 'center',
  color = 'currentColor',
  as: Tag = 'h2',
  style
}) {
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-display)',
      fontWeight: 400,
      fontSize: sizes[size] || size,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-headline)',
      textAlign: align,
      color,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Headline.jsx", error: String((e && e.message) || e) }); }

// components/social/IconFeature.jsx
try { (() => {
function IconFeature({
  icon,
  lead,
  children,
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 16,
      textAlign: align,
      fontSize: 'var(--fs-small)',
      lineHeight: 'var(--lh-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 60
  }), /*#__PURE__*/React.createElement("div", null, lead && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, lead, " "), children));
}
Object.assign(__ds_scope, { IconFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/IconFeature.jsx", error: String((e && e.message) || e) }); }

// components/social/PhotoSlot.jsx
try { (() => {
function PhotoSlot({
  src,
  label = 'Portrait photo',
  fade = 'none',
  style
}) {
  const fades = {
    right: 'linear-gradient(90deg, transparent 60%, var(--white))',
    left: 'linear-gradient(270deg, transparent 60%, var(--white))',
    none: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: src ? `url(${src}) center/cover` : 'linear-gradient(160deg, var(--blush-100), var(--blush-200))',
      ...style
    }
  }, !src && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--fs-micro)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: fades[fade]
    }
  }));
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/social/PostCanvas.jsx
try { (() => {
const arcs = c => `radial-gradient(circle at 108% -8%, transparent 38%, ${c} 38.3%, ${c} 40.5%, transparent 40.8%), radial-gradient(circle at -18% 118%, transparent 46%, ${c} 46.3%, ${c} 48.5%, transparent 48.8%), linear-gradient(90deg, transparent 63%, ${c} 63%, ${c} 64.6%, transparent 64.6%), linear-gradient(0deg, transparent 22%, ${c} 22%, ${c} 23.6%, transparent 23.6%)`;
function PostCanvas({
  tone = 'light',
  motif = true,
  frame = false,
  size = 1080,
  children,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      overflow: 'hidden',
      boxSizing: 'border-box',
      background: dark ? 'var(--surface-dark)' : 'var(--surface-light)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, motif && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: arcs(dark ? 'var(--motif-on-dark)' : 'var(--motif-on-light)'),
      pointerEvents: 'none'
    }
  }), frame && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'var(--inset-frame)',
      border: '3px solid ' + (dark ? 'var(--rule-on-dark)' : 'var(--rule-on-light)'),
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { PostCanvas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PostCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-posts/PostsA.jsx
try { (() => {
const {
  PostCanvas,
  Headline,
  Eyebrow,
  BigNumeral,
  CheckList,
  IconFeature,
  ComparisonTable,
  CTABar,
  DeviceFrame,
  PhotoSlot,
  Badge,
  Icon
} = window.AkiraInamiDesignSystem_54ec57;
function WhyHireMe() {
  return /*#__PURE__*/React.createElement(PostCanvas, null, /*#__PURE__*/React.createElement(PhotoSlot, {
    fade: "right",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 440,
      height: 972
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 400,
      right: 56,
      top: 110
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "xl"
  }, "Why Hire Me"), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginTop: 18
    }
  }, "As your web designer?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '44px 36px',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(IconFeature, {
    icon: "clock",
    lead: "Efficiency:"
  }, "I get your site up fast, letting you focus on business."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "headset",
    lead: "Support:"
  }, "Quick changes? No problem. I'm just a call away."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "sliders-horizontal",
    lead: "Customization:"
  }, "Your site will stand out with a unique design tailored just for you."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "code-xml",
    lead: "Expertise:"
  }, "I ensure your site is optimized, responsive, and functional."))), /*#__PURE__*/React.createElement(CTABar, {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, "For a hassle-free website that works, let's chat"));
}
function VsDIY() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '90px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: 14,
      marginBottom: 28
    }
  }, "Your business name"), /*#__PURE__*/React.createElement(Headline, {
    size: "lg"
  }, "Professional Web Designer vs. DIY Web Design"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sub)',
      textAlign: 'center',
      margin: '36px 0 48px',
      lineHeight: 1.25
    }
  }, "Craftsmanship or Chaos:", /*#__PURE__*/React.createElement("br", null), "Choose Your Web Adventure!"), /*#__PURE__*/React.createElement(ComparisonTable, {
    columns: ['Feature', 'Web Designer', 'DIY Web Design'],
    rows: [['Skill Level', 'Website-level expertise', 'Hopeful Googling'], ['Time', 'Quick and easy', 'Slow and stressful'], ['Quality', 'Flawless finish', 'Fingers crossed'], ['Support', 'Backup just a call away', 'DIY = Hours on YouTube'], ['Outcome', 'Your site dazzles', 'Your site… Confused?']]
  })));
}
function SevenReasons() {
  const items = [['Too Common:', 'Templates leave you risk having a site that looks like countless others.'], ['Limited Customization:', 'Templates offer limited options for modifications, hindering your brand\'s unique needs.'], ['Generic SEO:', 'Templates often come with generic SEO setups, which can hurt your search engine ranking.'], ['Hard to Update:', 'Updating a template can break other parts of your site if not done carefully.'], ['Lack of Support:', 'Template support is usually generic and not tailored to specific issues you may face.'], ['Inefficient Conversions:', 'Templates aren\'t optimized for your specific audience.'], ['Time Consuming:', 'Tweaking a template to meet your needs can be more time-consuming than starting from scratch.']].map(([lead, text]) => ({
    lead,
    text
  }));
  return /*#__PURE__*/React.createElement(PostCanvas, {
    tone: "dark",
    motif: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 300,
      right: 52,
      top: 150,
      bottom: 52,
      borderTop: '3px solid var(--rule-on-dark)',
      borderRight: '3px solid var(--rule-on-dark)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 120,
      top: 520,
      bottom: 52,
      width: 300,
      borderLeft: '3px solid var(--rule-on-dark)',
      borderBottom: '3px solid var(--rule-on-dark)'
    }
  }), /*#__PURE__*/React.createElement(BigNumeral, {
    value: "7",
    style: {
      position: 'absolute',
      left: 24,
      top: -24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 330,
      right: 90,
      top: 200
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "lg",
    align: "left"
  }, "reasons to avoid website templates"), /*#__PURE__*/React.createElement(Eyebrow, {
    align: "left",
    style: {
      marginTop: 26,
      maxWidth: 420
    }
  }, "\u2026and hire a professional web designer instead")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      right: 90,
      top: 450
    }
  }, /*#__PURE__*/React.createElement(CheckList, {
    items: items,
    fontSize: "17px",
    gap: 14
  })));
}
Object.assign(window, {
  WhyHireMe,
  VsDIY,
  SevenReasons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-posts/PostsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-posts/PostsB.jsx
try { (() => {
const {
  PostCanvas,
  Headline,
  Eyebrow,
  BigNumeral,
  CheckList,
  IconFeature,
  CTABar,
  DeviceFrame,
  PhotoSlot,
  Badge,
  Icon
} = window.AkiraInamiDesignSystem_54ec57;
function Onboarding() {
  const steps = [['Initial Consultation:', 'We start with a meeting to discuss your website\'s needs, goals, and any specific challenges you face.'], ['Proposal Review:', 'You\'ll receive a detailed proposal outlining the scope of work, timeline, and costs for your approval.'], ['Agreement and Setup:', 'Once you agree to the terms, we set up your account and gather access to necessary website systems and tools.'], ['Kick-off Meeting:', 'We have a kick-off meeting to introduce you to your support team, finalize any initial requirements, and set communication protocols.'], ['Ongoing Communication:', 'Regular updates and check-ins are scheduled to keep you informed.']].map(([lead, text]) => ({
    lead,
    text
  }));
  return /*#__PURE__*/React.createElement(PostCanvas, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 380,
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 430,
      right: 60,
      top: 80
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "My 5-step"), /*#__PURE__*/React.createElement(Headline, {
    size: "xl",
    align: "left",
    style: {
      marginTop: 18
    }
  }, "Onboarding Process"), /*#__PURE__*/React.createElement(CheckList, {
    icon: null,
    items: steps,
    fontSize: "18px",
    gap: 16,
    style: {
      marginTop: 36
    }
  })), /*#__PURE__*/React.createElement(CTABar, {
    tone: "light",
    style: {
      position: 'absolute',
      left: 430,
      right: 60,
      bottom: 60
    }
  }, "Let's start your web design journey"));
}
function Security() {
  return /*#__PURE__*/React.createElement(PostCanvas, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 130,
      right: 130,
      top: 150,
      bottom: 110,
      border: '6px solid var(--navy-800)',
      padding: '90px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: -62,
      transform: 'translateX(-50%)',
      background: 'var(--navy-800)',
      width: 110,
      height: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 58
  })), /*#__PURE__*/React.createElement(Headline, {
    size: "md"
  }, "Is Your Web Designer Prioritizing Security?"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontWeight: 600,
      fontSize: 22,
      margin: '18px 0 30px'
    }
  }, "Ensure your website is Secure by Design!"), /*#__PURE__*/React.createElement(CheckList, {
    iconColor: "var(--navy-800)",
    fontSize: "18px",
    gap: 12,
    items: ['SSL/TLS Encryption for data protection.', 'Implement strong user authentication.', 'Validate inputs to prevent attacks.', 'HTTPS redirection for secure connections.', 'Set secure cookies to protect user sessions.', 'Update software regularly to prevent vulnerabilities.']
  })), /*#__PURE__*/React.createElement(CTABar, {
    style: {
      position: 'absolute',
      left: 130,
      right: 130,
      bottom: 110,
      fontSize: 15,
      letterSpacing: '.04em',
      textTransform: 'none'
    }
  }, "Trust a web designer who incorporates Security by Design principles."));
}
function FirstStep() {
  return /*#__PURE__*/React.createElement(PostCanvas, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 110px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Let's connect"), /*#__PURE__*/React.createElement(Headline, {
    size: "xl",
    style: {
      marginTop: 14
    }
  }, "The First Step to Your Dream Website"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px 70px',
      marginTop: 60
    }
  }, /*#__PURE__*/React.createElement(IconFeature, {
    icon: "mail",
    lead: "Initial Contact:"
  }, "Get in touch with us via email, phone, or our website contact form."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "clipboard-list",
    lead: "Introduction:"
  }, "Share your business and website goals, so we can understand your needs."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "thumbs-up",
    lead: "Follow-Up:"
  }, "Our team will contact you to discuss your project in more detail."), /*#__PURE__*/React.createElement(IconFeature, {
    icon: "clipboard-check",
    lead: "Proposal:"
  }, "We'll provide a custom proposal outlining our strategy, timeline, and costs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 56,
      lineHeight: 1.4
    }
  }, "Let's start the conversation about your dream website! Reach out today.")));
}
function Wireframe() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    tone: "dark",
    frame: true
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark",
    style: {
      position: 'absolute',
      left: 90,
      top: 26,
      fontSize: 14
    }
  }, "Web design terminology"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 100,
      top: 300,
      width: 470
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "xl",
    align: "left"
  }, "wireframe"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      margin: '14px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, "noun."), " /\u02C8w\u012Brfr\u0101m/"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.45
    }
  }, "In web design, a wireframe is a visual blueprint representing a website's basic structure and layout. It focuses on functionality, navigation, and content organization without detailed visual elements like colors, fonts, or images.")), /*#__PURE__*/React.createElement(DeviceFrame, {
    kind: "phone",
    width: 330,
    style: {
      position: 'absolute',
      right: 110,
      top: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 640,
      background: 'var(--paper)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [30, 90, 60, 120, 60, 140].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: h,
      background: 'var(--mist)'
    }
  })))));
}
function FiveQuestions() {
  const qs = [['What is your design process?', 'Understand their approach to design and ensure it aligns with your vision.'], ['Can you provide examples of your work?', 'Assess their experience and expertise by reviewing past portfolios.'], ['How do you ensure website security and performance?', 'A designer should prioritize security and site speed.'], ['Do you offer ongoing support and maintenance?', 'Determine if they provide long-term assistance.'], ['How do you measure website success?', 'Ensure they prioritize key performance indicators.']];
  return /*#__PURE__*/React.createElement(PostCanvas, null, /*#__PURE__*/React.createElement(BigNumeral, {
    value: "5",
    color: "var(--navy-800)",
    style: {
      position: 'absolute',
      left: -20,
      top: 30,
      fontSize: 280
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 190,
      right: 60,
      top: 60
    }
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "md",
    align: "left"
  }, "Essential Questions to Ask Before Hiring a Web Designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 20,
      marginTop: 12
    }
  }, "Make the right choice for your business!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      top: 330,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontSize: 19,
      lineHeight: 1.4
    }
  }, qs.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, q), " ", a))), /*#__PURE__*/React.createElement(CTABar, {
    style: {
      position: 'absolute',
      left: 60,
      right: 60,
      bottom: 60,
      fontSize: 15,
      letterSpacing: '.04em',
      textTransform: 'none'
    }
  }, "Find the perfect web designer for your project by asking these questions."));
}
Object.assign(window, {
  Onboarding,
  Security,
  FirstStep,
  Wireframe,
  FiveQuestions
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-posts/PostsB.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BigNumeral = __ds_scope.BigNumeral;

__ds_ns.CTABar = __ds_scope.CTABar;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.DeviceFrame = __ds_scope.DeviceFrame;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.IconFeature = __ds_scope.IconFeature;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.PostCanvas = __ds_scope.PostCanvas;

})();
