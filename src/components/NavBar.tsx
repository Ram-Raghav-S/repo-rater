import {
  Flex,
  Spacer,
  IconButton,
  Icon,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaQuestion } from "react-icons/fa";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

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
        onClick={onOpen}
      />
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <p>
                Repo-Rater is a web app that helps you evaluate the quality and
                health of a GitHub repository. Simply enter the repository name
                and owner in the search bar, and Repo-Rater will analyze the
                repository's code and metadata, and generate a report with
                information on its size, activity, contributors, issues, and
                more.
              </p>
              <br></br>
              <p>
                Whether you're a developer, a manager, or a user, Repo-Rater can
                help you assess the quality and health of a GitHub repository,
                and make informed decisions based on data and insights.{" "}
              </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default NavBar;
