function InfoPanel({ breaks }) {
    return (
        <div className='panel'>
            <div className='panelButton'>
                <div
                    id='workFinal1'
                    className={breaks !== true ? 'workFinal' : 'workFinal1'}
                >
                    <p id='work' className='acvtive'>
                        Work
                    </p>
                </div>
                <div
                    id='breakFinal1'
                    className={breaks !== true ? 'breakFinal' : 'breakFinal1'}
                >
                    <p id='break' className='desactive'>
                        Break
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoPanel;
