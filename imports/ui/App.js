import { Template } from "meteor/templating";

import "./App.html";
import "./layouts/Nav.html";
import "./layouts/MainContainer.html";
import "./layouts/Footer.html";
import "./lib/helpers.js";

Template.nav.helpers({
  navItems: [
    { url: "/get-started/", text: "Get started" },
    { url: "/tactics/", text: "Tactics" },
    { url: "/conversation-guides/", text: "Conversation Guides" },
    { url: "/situations/", text: "Situations" },
    { url: "/science-bits/", text: "Science Bits" },
  ],
});

Template.footer.helpers({
  footerLinks: [
    { url: "/conversation-guides/", text: "Conversation Guides" },
    { url: "/tactics/", text: "Tactics" },
    { url: "/situations/", text: "Situations" },
    { url: "/science-bits/", text: "Science Bits" },
    { url: "/playbooks/", text: "Playbooks" },
  ],
  getMoreLinks: [
    { url: "/pricing", text: "Tiers & Pricing" },
    { url: "/newsletter", text: "Free newsletter" },
  ],
  resourceLinks: [
    { url: "#", text: "Help & Support" },
    { url: "/about", text: "About" },
  ],
});
