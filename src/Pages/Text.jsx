import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Pagination } from '../component';

function Text() {
    const dispatch = useDispatch();
    // const textItems = useSelector((state) => state.text.textItems);
    const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
    const {name} = useParams()

    const [TEXT,setTEXT] = React.useState([])                 //  текст
    const [currentPage,setCurrentPage] = React.useState(1)   //  текущая страница
    const [textForPage] = React.useState(30)                //  количество выводимых строк

    //const nameBOOK = items.find((BOOK)=>BOOK.id===1)

    React.useEffect(() => {
          const getText = async()=>{
            if(name === "Немёртвый бывший генерал"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/FormerGeneralIsUndeadKnight`)
              setTEXT(TEXT.data)
            }else if(name === "Повелитель"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/Overlord`)
              setTEXT(TEXT.data)
            }else if(name === "Каждый возвращается домой"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/EveryoneElseisaReturnee`)
              setTEXT(TEXT.data)
            }else if(name === "Поднятие уровня в одиночку"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/Ialonelevelup`)
              setTEXT(TEXT.data)
            }else if(name === "Защита Подземелья"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/DungeonDefense`)
              setTEXT(TEXT.data)
            }else if(name === "Точка зрения Всеведущего читателя"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/OmniscientReadersViewpoint`)
              setTEXT(TEXT.data)
            }else if(name === "Ранкер который живет второй раз"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/SecondLifeRanker`)
              setTEXT(TEXT.data)
            }else if(name === "Буря Звёздной Войны"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/TempestoftheStellarWar`)
              setTEXT(TEXT.data)
            }else if(name === "Добро пожаловать в класс превосходства"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/ClassroomoftheElite`)
              setTEXT(TEXT.data)
            }else if(name === "Мастер-охотник Kей"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/MasterHunterK`)
              setTEXT(TEXT.data)
            }else if(name === "Да будет благословен этот прекрасный мир!"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/God'sBlessingonThisWonderfulWorld!`)
              setTEXT(TEXT.data)
            }else if(name === "Владея Ничем"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/PossessingNothing`)
              setTEXT(TEXT.data)
            }else if(name === "Злая семейка герцога Грида"){
              const TEXT = await axios.get(`hhttps://ranobe-room.onrender.comEvilLike`)
              setTEXT(TEXT.data)
            }else if(name === "86 — Восемьдесят шесть"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/EightySix`)
              setTEXT(TEXT.data)
            }else if(name === "Гримгар Пепла и Иллюзий"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/Grimgal`)
              setTEXT(TEXT.data)
            }else if(name === "Легендарный механик"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/TheLegendaryMechanic`)
              setTEXT(TEXT.data)
            }else if(name === "Рай монстров"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/MonsterParadise`)
              setTEXT(TEXT.data)
            }else if(name === "Слава Королю!"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/HailTheKing`)
              setTEXT(TEXT.data)
            }else if(name === "Воинственный Бог Асура"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/MartialGodAsura`)
              setTEXT(TEXT.data)
            }else if(name === "Первый Орден"){
              const TEXT = await axios.get(`https://ranobe-room.onrender.com/TheFirstOrder`)
              setTEXT(TEXT.data)
            }
            
          }
          getText()
    }, []);

    const lastTextIndex = currentPage * textForPage                    //  последний индекс элемента
    const firtTextIndex = lastTextIndex - textForPage                 //  первый индекс элемента
    const currentTextPage = TEXT.slice(firtTextIndex,lastTextIndex)  //  текущая страница с текстом 

    const paginat = pageIndex => setCurrentPage(pageIndex)
    const nextText = () => setCurrentPage(next => next+1)
    const prevText = () => setCurrentPage(prev => prev-1)
    
  return (
    <div className='TextInBook'>
      <div className='container'>

            <div className='title'>{name}</div>

         <div className='content'>
           {
            currentTextPage.map((obj,index) => (
              <p key = {index} className='text'>{obj.text}</p>
             ))        
           }
         </div>

          <Pagination 
          textForPage={textForPage} 
          totalTEXT={TEXT.length} 
          paginat = {paginat} 
          nextText={nextText} 
          prevText={prevText}
          currentPage = {currentPage}
          id = {id}
          
          />
           
      </div>
    </div>
    
  )
}

export default Text