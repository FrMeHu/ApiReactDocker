import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


                  // Variables a usar
function Tarjeta({ title, text, imgSrc }) { 
  return (
  <Card style={{ width: '18rem'}}>
    
                           {/* Imagen */}
  <Card.Img variant="top" src={imgSrc} /> 
  <Card.Body> 
             {/* Titulo */}
    <Card.Title>{title}</Card.Title>

            {/* Texto  */}
    <Card.Text>{text}</Card.Text>

  <Button variant="primary">Leer más</Button> 
  </Card.Body> 
  </Card>
  );
 } 
  export default Tarjeta;