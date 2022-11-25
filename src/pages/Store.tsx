import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import useMockApi from "../hooks/useMockApi"

export function Store() {

const {items} = useMockApi()

    return ( 
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map(item => ( 
        <Col key={item.id}>
            <StoreItem {...item}/>
        </Col>
      ))}
    </Row>
    </>
    )
}