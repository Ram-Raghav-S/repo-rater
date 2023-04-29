import { Flex, Spacer, IconButton, Icon } from "@chakra-ui/react";
import { FaGithub, FaQuestion } from "react-icons/fa";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <Flex
      as="nav"
      className="navbar"
      align="center"
      justify="space-between"
      paddingX="1rem"
      height="3rem"
      boxShadow="sm"
    >
      <span className="title">{title}</span>
      <Spacer />
      <a href="https://github.com/Ram-Raghav-S/repo-rater" target="_blank">
        <IconButton
          aria-label="GitHub repository"
          icon={<Icon className="github-icon" as={FaGithub} />}
          size="lg"
          variant="ghost"
          marginRight="1rem"
        />
      </a>
      <IconButton
        aria-label="Help"
        icon={<Icon className="help-icon" as={FaQuestion} />}
        size="lg"
        variant="ghost"
      />
    </Flex>
  );
};

export default NavBar;
