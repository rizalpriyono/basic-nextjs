import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="container-404">
      <p className="number-404">404</p>
      <h4 className="text-404">Whoops... Page Not Found !!!</h4>
      <button className="button-404" type="button" onClick={handleBack}>
        Go Home
      </button>
    </div>
  );
}
