import React from "react";
import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";

interface Props {
  title: string;
  label: string;
  imageUrl: string;
  studentCount: string;
}

const InfoCard = (props: Props) => {
  const { title, label, imageUrl, studentCount } = props;

  return (
    <Card css={{ margin: "0 5px" }}>
      <Card.Header css={{ position: "absolute", top: 5 }}>
        <Col>
          <Text
            size={12}
            weight={"bold"}
            transform="uppercase"
            color="#ffffffAA"
          >
            {label}
          </Text>
          <Text h4 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image src={imageUrl}></Card.Image>
      <Card.Footer
        isBlurred
        css={{ position: "absolute", bgBlur: "#0f111466", bottom: 0 }}
      >
        <Row>
          <Col>
            <Text color="#d1d1d1" size={18}>
              {studentCount} Students
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color={"primary"}>
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Enroll in Course
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default InfoCard;
