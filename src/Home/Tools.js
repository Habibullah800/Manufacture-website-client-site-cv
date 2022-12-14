import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://hidden-plateau-53735.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h2 className='text-2xl  m-6 text-center text-accent'>Our Tools</h2>
            <div className='title mx-auto'>
                <hr></hr>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tools.map(tool => <Tool
                            key={tool.id}
                            tool={tool}

                        ></Tool>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tools;