import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect from root to the landing page
  redirect('/landing_page');
}