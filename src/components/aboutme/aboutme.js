import style from './aboutme.module.css'

const AboutMe = () => {
  return (
    <div className={style['container']}>
        <div className={style['image-container']}>
        <div className={style['animated-icon']}>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
            <span className={style['circle']}></span>
        </div>
      </div>
      <div className={style['text-container']}>
        <h2 className={style['title']}>About Me</h2>
        <p className={style['description']}>
              Hello! I'm <span style={{color: 'red'}}>Anvarbek Ergashev</span> Frontend Developer.
              I created this website to share my journey into the world of web development and showcase what I've learned along the way. Now I'm delving deeper into the essentials of frontend development, mastering HTML, CSS, JavaScript, and ReactJs, among other technologies, and constantly expanding my skills.
              The reason I love coding is the joy of creating something from scratch and creating user-friendly interfaces that make a difference. Every step of this journey has been exciting and through this site I would like to share my experiences and the projects I have worked on.
              You'll find a personal blog where I post coding tips and insights, as well as my thoughts on the latest technologies I'm learning. This site serves as a reflection of my growth, learning, and accomplishments as I continue to develop my skills.
              As a frontend developer, I'm still learning and developing, but I'm always eager to discover new things and share what I know with others. If you're on the same path or want to collaborate, feel free to get in touch!
        </p>
      </div>
    </div>
  )
}

export default AboutMe