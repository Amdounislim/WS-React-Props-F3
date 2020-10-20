import React from 'react'
import {Card, Col, Image} from 'react-bootstrap'

const UserCard = ({student:{name, email, src}}) => {
    return (
        <div className="profile-card">
            
        <Card
          style={{
            width: "18rem",
            height: "25rem",
            marginRight: "30px",
            marginBottom: "20px",
            marginTop: "30px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "transparent",
            boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)"
          }}
        >
          <Card.Header
            style={{
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              backgroundColor: "#277fa5",
              height: "13rem"
            }}
          />
          <Col>
            <Image
              src={src}
              roundedCircle
              style={{
                height: "150px",
                width: "150px",
                position: "relative",
                bottom: "80px",
                border: "10px solid white",
                backgroundColor: "transparent"
              }}
            />
          </Col>
          <Card.Body style={{ position: "relative", bottom: "90px" }}>
            <Card.Title style={{ margin: "0", color: "#505151" }}>
              {name}
            </Card.Title>
            <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
              {email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default UserCard
