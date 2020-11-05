import React from 'react';
import {Card ,Container,Row , Col} from 'react-bootstrap';
import styles from './Cards.module.css';

// how to countup the numbers of the card 
import CountUp from 'react-countup';


const Cards = ({ data }) =>{
    // console.log(confirmed , recovered , deaths , lastUpdate);
    // console.log(props);
    // how to check is it data from api is fetched or not.....
    // lastUpdate contain the real formate of date time so for human 
    let check = data.length;
    var confirmed ;
    var recovered;
    var deaths;
    var lastUpdate;

    if(check > 12){

      let n = data.length;
        // console.log (data[n - 1].Confirmed);

        confirmed = data[n - 1].Confirmed;
        recovered = data[n - 1].Recovered;
        deaths = data[n - 1].Deaths;
        lastUpdate = data[n - 1].Date;

    }
    else{
      confirmed = data.confirmed;
      recovered = data.recovered;
      deaths = data.deaths;
      lastUpdate = data.lastUpdate;
    }


    if(!confirmed){
        return 'Loading......';
    }
    return (
        <Container fluid className = {styles.container}>
          <Row xs={12} className={styles.row}>
            <Col xs={12 } md= {4} >
              <Card className ={ styles.infected}>
                <Card.Img variant="top" src= {require('../../images/infected2.jpg')} />
                <Card.Body>
                  <Card.Title >Infected</Card.Title>
                  <CountUp start = {0} end = {confirmed} duratin ={2.5} separator ="," className={styles.count_up1} />
                  <Card.Text>Number of active cases of COVID-19 </Card.Text>
                </Card.Body>
                <Card.Footer className = {styles.footer}>
                  <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleDateString()}
                  </medium>
                  <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleTimeString()}
                  </medium>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className ={ styles.recovered}>
                <Card.Img variant="top" src= {require('../../images/infected.jpg')} /> 
                <Card.Body>
                  <Card.Title>Recovered</Card.Title>
                  <CountUp start = {0} end = {recovered} duratin ={2.5} separator ="," className={styles.count_up2} />
                  <Card.Text> Number of recovred from COVID-19</Card.Text>
                </Card.Body>
                <Card.Footer className = {styles.footer}>
                <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleDateString()}
                </medium>
                <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleTimeString()}
                </medium>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className ={ styles.deaths}>
                <Card.Img variant="top" src= {require('../../images/image4.jpg')} />
                <Card.Body>
                  <Card.Title>Deaths</Card.Title>
                  <CountUp start = {0} end = {deaths} duratin ={2.5} separator ="," className={styles.count_up3} />
                  <Card.Text> Number of deaths due to COVID-19 </Card.Text>
                </Card.Body>
                <Card.Footer className = {styles.footer}>
                  <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleDateString()}
                  </medium>
                  <medium className="text-muted">
                    {new Date(lastUpdate).toLocaleTimeString()}
                  </medium>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
       
    )
}
export default Cards;