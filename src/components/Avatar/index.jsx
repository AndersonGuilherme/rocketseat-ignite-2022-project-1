import style from './Avatar.module.css';

export function Avatar () {
    return (
        <img 
            className={style.avatar}
            src="https://github.com/AndersonGuilherme.png"
            alt="" 
        />
    )
}