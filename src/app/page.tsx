import ActiveLabel from './components/activeLabel';
import NotActiveLabel from './components/notActiveLabel';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
