import Image from 'next/image';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`flex items-center gap-[100px]`}>
      <div className={`flex-1 flex flex-col gap-[50px]`}>
        <h1 className={`text-[72px] gradient`}>Better design for your digital products.</h1>
        <p className={`text-[24px] font-[300]`}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={`flex-1 flex flex-col gap-[50px]`}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
