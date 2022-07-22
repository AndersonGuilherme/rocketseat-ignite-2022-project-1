import styles from './Comment.module.css';
import { Avatar } from '../Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/AndersonGuilherme.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.author}>
							<strong>Anderson Guilherme de Souza</strong>
							<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
								Cerca há 1h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>
					<p>Muito bom Devon, parabéns!! 👌👌</p>
				</div>
				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
