import '../assets/styles/intro.css'
import imgIntro from '../assets/img/Dragon-Ball-los-mas-poderosos.webp'
function Intro(){
    return(
        <>
        <h1>Los personajes más fuertes de Dragon Ball </h1>
        <img src={imgIntro} alt="" />
        <p id='intro' className="introc"><mark>Dragon Ball es una de los manganimes más populares</mark>, y más vendidos, de todo el mundo, siendo una franquicia que ha pasado a formar parte de la cultura popular con personajes más que reconocibles a nivel general.
        La franquicia comenzó a publicarse en 1984, y hasta el día de hoy sigue lanzando tomos mensuales para su nueva serie conocida como «Dragón Ball», la cual se estrenó en el 2015, y que también ha sido escrita por el mangaka Masashi Kishimoto.
        Una de las características más notables de Dragón Ball, son sus personajes que se sitúan entre los más poderosos  de la historia del anime y el manga. Pero, es obvio que están esos sujetos que tienen un poder superior al resto de sus homólogos.<br/> <br/>Clasificar el poder de los personajes de Dragon Ball no es tarea fácil. Ordenar en un ranking personajes que incluso no han combatido entre ellos puede ser una tarea realmente agotadora. Además, requiere interpretar toda obra canon del Universo Dragon Ball, tanto el anime como el manga de Toriyama, por no hablar de que antes de hacer una lista hay que establecer unas cuantas reglas, como, por ejemplo, no contabilizar las fusiones, ya que suponen una transformación temporal. Dicho esto, aquí va una interpretación a grandes rasgos de lo que podrían ser los personajes más poderosos del Universo Dragon Ball. </p>
        </>
    )
}export default Intro;