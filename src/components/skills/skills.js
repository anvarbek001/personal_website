import style from './skills.module.css'
import { getData } from '../../constants/db'

const datas = getData()

const Skills = () => {
  return (
    <div style={{height:'100vh',width:'70%',padding:'20px'}}>
        <h1>Skills</h1>
        <div className={style['container']}>
            {datas.map((data) => (
                <div className={style['box']} key={data.title}>
                        <img src={data.Image} alt="imgs" />
                        <h2>{data.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills