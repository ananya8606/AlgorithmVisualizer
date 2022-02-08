import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerIcons from "./FontAwesome";

registerIcons();

const DATA = [
  {
    href: "https://github.com/",
    icon: ["fab", "github"],
    label: "Github"
  },
  {
    href: "https://www.linkedin.com/in//",
    icon: ["fab", "linkedin"],
    label: "LinkedIn"
  },
  {
    href: "...",
    icon: ["fas", "file-alt"],
    label: "Resume"
  },
  {
    href: "mailto:",
    icon: ["fas", "paper-plane"],
    label: "Email me"
  }
];

const Icon = ({ href, icon, label }) => {
  return (
    <span className="button">
      <a href={href} target="_self" rel="noopener noreferrer">
        <FontAwesomeIcon className="icon" icon={icon} size="3x" />
        <span className="icon_title">{label}</span>
      </a>
    </span>
  );
};

class Buttons extends Component {
  render() {
    return (
      <div>
        {DATA.map(props => (
          <Icon {...props} />
        ))}
      </div>
    );
  }
}

export default Buttons;
