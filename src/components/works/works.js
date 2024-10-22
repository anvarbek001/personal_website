import style from './works.module.css'
import img11 from '../../constants/works/work1/image1.png'
import img12 from '../../constants/works/work1/image2.png'
import img13 from '../../constants/works/work1/image3.png'
import img21 from '../../constants/works/work2/image1.png'
import img22 from '../../constants/works/work2/image2.png'
import img31 from '../../constants/works/work3/image1.png'
import img32 from '../../constants/works/work3/image2.png'
import img41 from '../../constants/works/work4/image1.png'
import img42 from '../../constants/works/work4/image2.png'
import img43 from '../../constants/works/work4/image3.png'
import img44 from '../../constants/works/work4/image4.png'
import img45 from '../../constants/works/work4/image5.png'
import { useState } from 'react';

const Works = () => {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
      <div className={style['container']}>
        <h1 style={{textAlign: 'center'}}>My Works</h1>
        <div className={style['boxs']}>
          <div className={style['box']}>
              <img src={img11} alt="work1" />
              <button className={style['look']} onClick={() => setModal(true)}>toLook</button>
          </div>
          <div className={style['box']}>
              <img src={img21} alt="work1" />
              <button className={style['look']} onClick={() => setModal2(true)}>toLook</button>
          </div>
          <div className={style['box']}>
              <img src={img31} alt="work1" />
              <button className={style['look']} onClick={() => setModal3(true)}>toLook</button>
          </div>
          <div className={style['box']}>
              <img src={img41} alt="work1" />
              <button className={style['look']} onClick={() => setModal4(true)}>toLook</button>
          </div>
        </div>

        {modal && <div className={style['modal']}>
          <div className={style['modal_item']}>
            <img src={img11} alt="work1" />
            <img src={img12} alt="work2" />
            <img src={img13} alt="work3" />
          </div>
          <button className={style['hide']} onClick={() => setModal(false)}>hide</button>
        </div>}
        {modal2 && <div className={style['modal']}>
          <div className={style['modal_item']}>
            <img src={img21} alt="work1" />
            <img src={img22} alt="work2" />
          </div>
          <button className={style['hide']} onClick={() => setModal2(false)}>hide</button>
        </div>}
        {modal3 && <div className={style['modal']}>
          <div className={style['modal_item']}>
            <img src={img31} alt="work1" />
            <img src={img32} alt="work2" />
          </div>
          <button className={style['hide']} onClick={() => setModal3(false)}>hide</button>
        </div>}
        {modal4 && <div className={style['modal']}>
          <div className={style['modal_item']}>
            <img src={img41} alt="work1" />
            <img src={img42} alt="work2" />
            <img src={img43} alt="work1" />
            <img src={img44} alt="work2" />
            <img src={img45} alt="work2" />
          </div>
          <button className={style['hide']} onClick={() => setModal4(false)}>hide</button>
        </div>}
      </div>
    )
}

export default Works