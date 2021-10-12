import './Home.css';
import React, { useState } from 'react';
import UserBox from './UserBox';
import Groups from './Groups';
import Messages from './Messages/Messages';
import MonthlyGuards from './MonthlyGuards';

function Home() {
    const [showMonthlyGuards, setShowMonthlyGuards] = useState(false)
    
    return (
        <div className="home">          
        {showMonthlyGuards ? <MonthlyGuards setShowMonthlyGuards={setShowMonthlyGuards} /> : null}
            <div className="home__aside">
                <div className="home__aside_content">
                    <UserBox setShowMonthlyGuards={setShowMonthlyGuards} />
                    <Groups />
                </div>
            </div>
            <Messages />
        </div>
    )
}

export default Home
