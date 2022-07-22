import style from './Avatar.module.css';

export function Avatar({src}) {
	return <img className={style.avatar} src={src} alt="" />;
}
