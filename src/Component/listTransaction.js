import React from "react";
import {Row, Col, Dropdown, DropdownButton,} from "react-bootstrap"

export default function ListTransaction({item}) {
    return (
        <div style={{backgroundColor:"#2B2B2B"}}>
            <Row>
                <Col>1</Col>
                <Col>Winter</Col>
                <Col>Bca.jpg</Col>
                <Col>26/hari</Col>
                <Col>Active</Col>
                <Col>Approve</Col>
                <Col className="mb-3">
                    <DropdownButton variant="secondary">
                        <Dropdown.Item >Approve</Dropdown.Item>
                        <Dropdown.Item >Cancel</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <hr />
            </Row>
        </div>
    )
}