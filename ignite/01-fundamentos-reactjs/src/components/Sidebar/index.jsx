import style from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar () {
  return (
    <aside className={style.sidebar}>
        <img 
            className={style.cover} 
            src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="" 
        />
        <div className={style.profile}>
            <img 
                className={style.avatar}
                src="https://github.com/AndersonGuilherme.png"
                alt="" 
            />
            <strong>Anderson Guilherme</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#"> 
                <PencilLine size={20}/> 
                Editar seu perfil 
            </a>
        </footer>
    </aside>
  )
}