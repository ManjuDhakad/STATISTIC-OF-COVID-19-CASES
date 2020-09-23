import React from 'react';
import {Card ,Container,Row , Col} from 'react-bootstrap';
import styles from './Cards.module.css';

// how to countup the numbers of the card 
import CountUp from 'react-countup';


const Cards = ({data :{ confirmed , recovered , deaths , lastUpdate }}) =>{
    // console.log(props);
    // how to check is it data from api is fetched or not.....
    // lastUpdate contain the real formate of date time so for human 
    if(!confirmed){
        return 'Loading......';
    }
    return (
        <Container fluid className = {styles.container}>
          <Row xs={12} className={styles.row}>
            <Col xs={12 } md= {4} >
              <Card className ={styles.card , styles.infected}>
                <Card.Img variant="top" src= {require('../../images/infected2.jpg')} />
                <Card.Body>
                  <Card.Title >Infected</Card.Title>
                  <CountUp start = {0} end = {confirmed.value} duratin ={2.5} separator ="," className={styles.count_up1} />
                  <Card.Text>Number of active cases of COVID-19 </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <medium className="text-muted">{new Date(lastUpdate).toDateString() }</medium>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className ={styles.card , styles.recovered}>
                <Card.Img variant="top" src= {require('../../images/infected.jpg')} /> 
                <Card.Body>
                  <Card.Title>Recovered</Card.Title>
                  <CountUp start = {0} end = {recovered.value} duratin ={2.5} separator ="," className={styles.count_up2} />
                  <Card.Text> Number of recovred from COVID-19</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <medium className="text-muted">{new Date(lastUpdate).toDateString() }</medium>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className ={styles.card , styles.deaths}>
                <Card.Img variant="top" src= {require('../../images/image4.jpg')} />
                <Card.Body>
                  <Card.Title>Deaths</Card.Title>
                  <CountUp start = {0} end = {deaths.value} duratin ={2.5} separator ="," className={styles.count_up3} />
                  <Card.Text> Number of deaths by COVID-19 </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <medium className="text-muted">{new Date(lastUpdate).toDateString() }</medium>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
       
    )
}
export default Cards;