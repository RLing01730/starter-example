import Image from 'next/image';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "../app/ui/home.module.css";
import { lusitana } from '../app/ui/fonts.js';

export default function Page() {
  return (
    <main className={styles.main}>
      <AcmeLogo />
    </main>
  );
}
