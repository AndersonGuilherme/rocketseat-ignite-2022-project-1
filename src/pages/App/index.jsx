import { useState } from 'react';
import { Header } from '../../components/Header';
import { Post } from '../../components/Post';

import styles from './App.module.css';
import '../../global.css';

import { Sidebar } from '../../components/Sidebar';

function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post body="This is a sample post." author="Author" />
					<Post body="This is a sample post." author="Author" />
					<Post body="This is a sample post." author="Author" />
				</main>
			</div>
		</>
	);
}

export default App;
