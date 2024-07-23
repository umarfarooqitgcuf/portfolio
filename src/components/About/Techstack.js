import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava, DiAndroid, DiApple, DiAppstore, DiDatabase, DiDocker, DiSwift,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiApple />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAppstore />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiSwift />
        </Col>
    </Row>
  );
}

export default Techstack;
