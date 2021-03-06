import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserContainer from '../components/userPage/UserContainer';
import isObjectEmpty from '../helpers/isObjectEmpty';

export default function User() {
  const router = useRouter();
  let loggedUser = {};
  if (process.browser) {
    loggedUser = JSON.parse(localStorage.getItem('loggedUser')) ?? {};
  }
  useEffect(() => {
    if (isObjectEmpty(loggedUser)) {
      router.push('/404');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Personal Blog </title>
      </Head>
      {!isObjectEmpty(loggedUser) ? (
        <UserContainer
          firstName={loggedUser.firstName}
          lastName={loggedUser.lastName}
        />
      ) : null}
    </div>
  );
}
