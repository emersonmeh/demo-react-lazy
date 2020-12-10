import React, {useState} from 'react';
import BButton from '../components/Button';

import { TTable } from '../components/Table';
import { TTable2 } from '../components/Table2';
import { TTable3 } from '../components/Table3';

const Page1 = () => {

    const [showTable, setShowTable] = useState(false);
    const [showTable2, setShowTable2] = useState(false);
    const [showTable3, setShowTable3] = useState(false);

    const handleClick = (event) => {
        setShowTable(true);
    };

    const handleClick2 = (event) => {
        setShowTable2(true);
    };

    const handleClick3 = (event) => {
        setShowTable3(true);
    };

    return (
        <div>
            {showTable && (
                <div className='page1_wrapper'>
                    <TTable />
                </div>
            )}
            {showTable2 && (
                <div className="page2_wrapper">
                    <TTable2 />
                </div>
            )}
            {showTable3 && (
                <div className="page2_wrapper">
                    <TTable3 />
                </div>
            )}
            <div>
                <BButton text="Show me" onClick={handleClick} />
                <BButton text="Show me 2" onClick={handleClick2} />
                <BButton text="Show me 3" onClick={handleClick3} />
            </div>
        </div>
    )
}

export default Page1;
