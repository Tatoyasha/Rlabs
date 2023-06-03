import React from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import image1 from '../assets/WebDev.jpg';
import image2 from '../assets/AppDev.jpg';
import image3 from '../assets/WebDesign.jpg';
export default function AboutTeam() {
    const {tID} = useParams('tID')
    // console.log(tID)
    const teamData = [
        {
          id: 1,
          image: image1,
          title: 'Команда Веб-розробки',
          text: 'Наша команда Веб-розробки - це творчі та технологічні експерти, які працюють разом, щоб створити веб-рішення, що перетворюють ваші ідеї на реальність. Ми зосереджені на розробці веб-сайтів, веб-додатків та інших цифрових продуктів, які не тільки вражають візуально, але й надають вам потужні функціональні можливості. Від макетування і програмування до оптимізації та тестування, ми забезпечуємо повний цикл розробки, працюючи від задуму до випуску продукту. Наша мета - забезпечити ваш успіх у цифровому світі, створюючи веб-рішення, які викликають захоплення та приносять реальну користь вашому бізнесу.',
        },
        {
          id: 2,
          image: image2,
          title: 'Команда розробки додатків',
          text: 'Наша команда розробки додатків - це група талановитих програмістів та творчих майстрів дизайну, які зосереджені на створенні мобільних додатків, які змінюють спосіб, яким ми взаємодіємо з технологією. Ми спеціалізуємося на розробці додатків для різних платформ, таких як iOS та Android, і забезпечуємо їх високу якість, безпеку та ефективність. Від ідеї до реалізації, ми працюємо в напрямку створення додатків, які надають цінність вашим користувачам і допомагають вам досягти вашої мети. Приєднуйтесь до нашої команди розробки додатків, і ми перетворимо ваші ідеї на сучасні технологічні рішення, які перетворять світ.',
        },
        {
          id: 3,
          image: image3,
          title: 'Команда Веб-Дизайну',
          text: "Наша команда Веб-Дизайну - це колектив талановитих дизайнерів, які працюють в різних напрямках творчості, щоб створити унікальні та привабливі веб-дизайни, які надихають вашу аудиторію. Ми розуміємо, що ваш веб-сайт або додаток є обличчям вашого бренду, і ми прагнемо створити дизайн, який відображає вашу унікальність, цінності та впізнаваність. Ми враховуємо всі аспекти веб-дизайну - від композиції та колориту до навігації та користувацького досвіду - для створення дизайну, який привертає увагу, залишає слід в пам'яті і викликає позитивні емоції. Разом ми можемо підняти ваш бренд на новий рівень з нашим творчим дотиком у світі Веб-Дизайну",
        },
      ];
      const team = teamData.filter((team) => team.id === Number(tID))[0]
  return (
    <Card className='m-4' bg='light' border='none'>
        <Card.Img
         variant="top"
         style={{maxHeight: "100vh", margin:'3 3 3 3'}}
         
         src={team.image}/>
         
         <Card.Body>
            <Card.Title>{team.title}</Card.Title>
            <Card.Text>{team.text}</Card.Text>
         </Card.Body>
    </Card>
  )
}

