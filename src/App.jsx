import Banner from "./components/Banner"

const welcome = "Ola Mundo!"

function Number(){
  return(
    <>
      <h2>Numeros Primarios</h2>
    </>
  )
}

function Nome(props){
  return(
    <>
      <h3> Boa noite, {props.texto}!</h3>
      <p>Hoje é {props.dia} </p>
    </>
  )
}

function App() {
  return (
    <>
      <h1>{welcome}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, soluta assumenda! Animi enim dignissimos quae ut! Dolore error aperiam alias asperiores molestiae magni ipsum, sunt accusamus nemo modi distinctio dolor quidem laborum eum explicabo molestias hic pariatur id repellendus ipsam vitae. Minus veritatis natus sed doloremque! Autem sit, eligendi minima delectus obcaecati quasi aspernatur voluptatum impedit! Omnis, eum velit reprehenderit qui inventore quae provident minus deleniti, quibusdam quam, perspiciatis vel fugiat doloremque? Excepturi quaerat iure distinctio at beatae consectetur error dignissimos libero molestias odio consequatur eius reprehenderit alias necessitatibus voluptas aliquid porro exercitationem rem quam temporibus facere, deleniti et! Ratione ex aliquam sint molestias cupiditate, error animi dolore quia alias, eius veritatis! Accusamus possimus optio quis nisi eos excepturi molestiae ut, pariatur perspiciatis voluptas atque eveniet, id voluptates voluptate, sit blanditiis corrupti libero. Omnis explicabo pariatur animi error dolorem! In ea perferendis, consectetur, cumque minus odit sint, illo eaque consequuntur officia aliquid veniam! Labore fugit consequatur laborum doloribus est illo repellendus consequuntur sapiente doloremque voluptatibus temporibus nisi voluptatem, inventore officiis eveniet vero ab consectetur alias non necessitatibus debitis cupiditate saepe numquam! Nihil molestias ut cum maxime alias dolorum neque suscipit, sit ex dolor corrupti ea doloremque tempore eaque! Vitae, molestiae!</p>
      <Number />
      <br />
      <Nome texto="Joao" dia="terça"/>
      <Nome texto="Matheus" dia="05"/>

      <br />
      <Banner site="Wikipedia" texto="Cachorro adestrado" />
    </>
  )
}

export default App
