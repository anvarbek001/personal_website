import style from './contact.module.css'

const Cotact = () => {
  return (
    <div className={style['container']}>
      <h1 style={{color:'white' , textAlign:'center'}}>Contact</h1>
        <div className={style['container_item']} style={{display:'flex', justifyContent:'space-around'}}>
          <div className={style['box1']}>
            <a className={style['icon1']} href="https://t.me/Anvarbek_Ergashev"><i class="fa-brands fa-telegram"></i></a>
          </div>
          <div className={style['box2']}>
            <a className={style['icon2']} href="https://www.instagram.com/anvar_sen"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div className={style['box3']}>
            <a className={style['icon3']} href="https://www.youtube.com/@Web_developer227"><i class="fa-brands fa-youtube"></i></a>
          </div>
          <div className={style['box4']}>
            <a className={style['icon4']} href="https://www.ergashevanvarbek00700@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          </div>
        </div>
    </div>
  )
}

export default Cotact