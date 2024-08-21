import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalaceBox from '@/components/TotalBalaceBox';
import React from 'react';

const Home = () => {
  const loggedIn = { firstName: 'Adnan', lastName: ' jsm', email: 'adnanafridi2007@gmail.com'};

  return (
    <div>
      <section className='home'>
        <div className="home-content">
          <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
          </header>

          RECENT TRANSACTION
        </div>


        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50}, {currentBalance:400.50}]}
        />
      </section>
    </div>
  );
}

export default Home;
