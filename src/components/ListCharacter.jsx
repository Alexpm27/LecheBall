import Character from "./Character";

function ListCharacter(){
    const Characters = [
        {
            id: "top",
            name: "Hit",
            description: "Una buena forma de comenzar a establecer una lista con los personajes más poderosos de Dragon Ball es tomar como punto de partida el Torneo del Poder, ya que muchos personajes de la franquicia aparentemente compiten en él en igualdad de condiciones. Hit el Infalible, también conocido como el Asesino Legendario es el as del Equipo del Universo 6. No es ni de lejos tan poderoso como otros personajes que conforman esta lista, pero es un ser absurdamente seguro de sí mismo. Ni siquiera presta atención a otras peleas del torneo, teniendo plena confianza en sus poderes. Hit es capaz de matar de un solo golpe, algo que técnicamente no puede usar en ese torneo. También es un as del salto temporal, que llega a poner en aprietos incluso a Jiren.",
            image: "/img/hit.webp"
        },
        {
            name: "Toppo",
            description: "Es el líder de las Tropas del Orgullo, es decir, los guerreros de la justicia del Universo 11. Es un individuo muy poderoso gracias a su habilidad e intelecto. Fue uno de los primeros participantes del Torneo de la Fuerza, y también uno de los primeros en ser candidato a Dios de la Destrucción. Toppo posee un aura divina, un tipo de ki con el que puede experimentar un aumento de poder. Su cuerpo está rodeado de energía de la destrucción, y es tan ágil y conoce tantas técnicas que puede llegar a enfrentarse a Son Goku Super Saiyan sin necesidad de utilizar toda su fuerza. No obstante, en dicha pelea, Goku acaba sorprendiéndole, transformándose en Supersaiyan Azul. Toppo responde aumentando su poder de forma significativa, pero el combate acaba siendo interrumpido, por lo que jamás llegamos a conocer los límites de este personaje.", 
            image: "/img/toppo.webp"
        }
        ,
        {
            name: "Cell Max",
            description: "Cell es el último villano icónico que regresa a Dragon Ball en la película Dragon Ball Super: Super Hero. A diferencia de Freezer, que estaba muerto, y de Broly, que anteriormente no era canon, este nuevo y mejorado Cell no es el mismo Cell que Gohan mató durante la saga anterior centrada en este personaje.  Cell Max fue creado por el Dr. Hedo utilizando datos incompletos y difíciles de entender del Dr. Gero. Esto hace que Cell Max ni siquiera tenga la capacidad de regenerarse. A pesar de ello, el Dr. Hedo consiguió crear villano mucho más potente que el original.Sin embargo, no hemos colocado a este personaje más arriba, y hay un motivo bastante evidente. Debido a que fue liberado antes de tiempo, Cell Max no se encuentra en su forma completa. El propio equipo creativo de la película considera que de haber estado al 100%, este bioandroide sería totalmente imparable —ni siquiera Broly habría podido con él—. Debido a este problema, Cell Max carece de cualquier atisbo de control de su poder, algo que ya ocurrió con Broly en su día. Este personaje pasará a la historia de Dragon Ball como un bioandroide que tenía no solo gran fortaleza, sino también una envidiable defensa. Sus atributos le permiten sobrevivir a golpes críticos o de gran envergadura como el ataque autodestructivo de Gamma Número 2",
            image: "/img/cellmax.webp"
        }
        ,
        {
            name: "Vegeta",
            description: "Todo el mundo es fan de Vegeta. Tiene unos poderes realmente descomunales, pero está condenado a ser el eterno segundón. Su capacidad de luchar es inusual, pero siempre está por detrás de Goku. Aún así, este personaje ha ido evolucionando a lo largo de los años, aumentando sus capacidades al mismo tiempo que el manga iba introduciendo personajes más y más poderosos. Su forma Super Saiyan Blue es una prueba de ello, pues es capaz de fisionar energía.",
            image: "/img/vegeta.webp"
        }
        ,
        {
            name: "Broly",
            description: "El poder de Broly es ilimitado, por lo que jamás conoceremos sus límites reales. En Dragon Ball Super: Broly, el personaje no para de evolucionar, convirtiéndose en un guerrero realmente poderoso. El saiyajin lucha y absorbe energía de forma automática, sin llegar a conocerse a sí mismo. Aún así, Goku y Vegeta pudieron detenerlo, pero se vieron obligados a fusionarse para lograrlo. Aún así, Broly pierde. No por sus poderes, sino por su inexperiencia a la hora de combatir. De haber controlado sus poderes, probablemente habría barrido a Gogeta.",
            image: "/img/broly.webp"
        }
        ,
        {
            name: "Jiren",
            description: "Formado en el Universo 11, Jiren hizo todo lo posible por demostrar que era el personaje con más poder de todos los universos de Dragon Ball. Jiren es un personaje poco hablador y muy introvertido. Esto se debe a sus experiencias pasadas. Sus padres murieron asesinados, y él fue entrenado por Gitchen. Entrenó duramente, forjó varias alianzas y sobreestimó su fuerza. Cuando el malhechor regresó, su maestro y varios de sus aliados muerieron en combate. Ninguno quiso acompañar a Jiren a vengar su muerte, haciendo que este personaje dejara de confiar en los demás.Por ese motivo, Jiren se presenta al Torneo de la Fuerza. Su objetivo es obtener el premio, las Superesferas del Dragón, para así resucitar a su maestro. Solo consideró a Son Goku como un oponente digno para él.",
            image: "/img/jiren.webp"
        }
        ,
        {
            name: "Goku",
            description: "Goku es el mortal más poderoso de todos. Aunque su poder no estaba muy alejado del de Broly o el de Jiren, esto cambia radicalmente cuando consigue dominar a la perfección el ultrainstinto, logrando que su cuerpo no rechace el poder. A partir de ahí, las capacidades de nuestro protagonista evolucionan a pasos agigantados, colocándose en una más que generosa posición en este top.",
            image: "/img/goku.webp"
        }
        ,
        {
            name: "Dioses de la destruccion",
            description: "No conocemos a fondo a estos personajes, pero los que tienen nombre, es decir, los que hemos podido conocer, son realmente poderosos. Están por debajo de los Ángeles y todo lo que conocemos sobre estos seres se lo debemos a ellos. Su poderes no tienen barreras. Son fuertes, controlan la magia y también son extremadamente inteligentes. Una prueba de ello sería Lord Beerus, que consigue equilibrar la población del Universo 7 destruyendo lo que consideraba ‘planetas inútiles’.",
            image: "/img/dioses.webp"
        }
        ,
        {
            name: "Angeles",
            description: "Instruyen a los Dioses de la Destrucción y también los protegen. No obstante, no todos ellos tienen el mismo poder ni conocemos sus habilidades por separado. Lo que sí sabemos es que usan el ultra instinto sin esfuerzo alguno, prueba más que sobrada de las capacidades que tienen estos personajes del multiverso de Dragon Ball.",
            image: "/img/angeles.webp"
        }
        ,
        {
            name: "Sumo Sacerdote",
            description: "Este personaje fue introducido en el episodio 55 de Dragon Ball Super. Es el encargado de recibir las visitas en el planeta de Rey de Todo. Sus hijos son Vados y Whis. El Sumo Sacerdote posee grandes habilidades dadas tanto por sus ancestros como por Dios. Durante mucho tiempo fue mano derecha del Omni-Rey, personaje que confió en él para absolutamente todo. Según algunas teorías de los fans, El Sumo Sacerdote no solo sería el padre de los ángeles, sino también el único personaje capaz de matarlos, ya que en el propio episodio donde se presenta Daishinkan se revela que los ángeles sí pueden morir, justo al contrario de como se creía hasta ese momento.",
            image: "/img/sacerdote.webp"
        }
        ,
        {
            name: "Zeno",
            description: "Zeno es uno de los personajes más misteriosos de todo Dragon Ball, y también el más poderoso de todos los que hemos visto. No se sabe de dónde viene ni cómo se convirtió en lo que es. Lo único que se conoce de él es la información aportada por el Sumo Sacerdote. El nombre en japonés de este personaje significa ‘Todopoderoso’ y fue capaz de sobrevivir a la destrucción de un universo sin recibir daños. Sin embargo, este personaje no está vinculado a la creación, sino más bien a todo lo contrario. Destruyó seis universos de una pataleta, y, aunque tiene un comportamiento infantil, los Dioses de la Destrucción y Kai Supremo lo tratan con gran miedo y respeto. Todo lo contrario a lo que hace Goku, que lo trata como un bebé, lo zarandea y le pone motes, poniendo al universo en peligro sin darse cuenta.",
            image: "/img/zeno.webp"
        }
    ]

    return (
        Characters.map((Characters) =>{
            return <Character id={Characters.id} name={Characters.name} description={Characters.description}
             img={Characters.image} />
        })
    )


}export default ListCharacter