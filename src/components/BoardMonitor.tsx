import React, {useState} from 'react';

export default function BoardMonitor() {
    const [boardLimitDetails, updateBoardLimitDetails] = useState("Loading board details...");

    return (
        <div id='content' className='board-monitor-content power-up-content content'>
            <div className='resource-container container'>
                <h2 className='heading'>Let's see how your board's doing</h2>
                <div className='resource-info'>
                    {boardLimitDetails}
                </div>
            </div>
        </div>
    );
}