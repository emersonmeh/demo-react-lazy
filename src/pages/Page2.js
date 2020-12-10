import React, {lazy, Suspense, useState} from 'react';
import BButton from '../components/Button';
import Loading from '../components/Loading';

const TTable = lazy(() => import('../components/Table').then(module => ({default: module.TTable}) ));
const TTable2 = lazy(() => import('../components/Table2').then(module => ({default: module.TTable2}) ));
const TTable3 = lazy(() => import('../components/Table3').then(module => ({default: module.TTable3}) ));


const Page2 = () => {
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
                <div className="page2_wrapper">
                    <Suspense fallback={<Loading />}>
                        <TTable />
                    </Suspense>
                </div>
            )}
            <br />
            {showTable2 && (
                <div className="page2_wrapper">
                    <Suspense fallback={<Loading />}>
                        <TTable2 />
                    </Suspense>
                </div>
            )}
            {showTable3 && (
                <div className="page2_wrapper">
                    <Suspense fallback={<Loading />}>
                        <TTable3 />
                    </Suspense>
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

export default Page2;