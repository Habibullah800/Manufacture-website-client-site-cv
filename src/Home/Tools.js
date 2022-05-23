import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold m-6 text-center'>Our Tools</h2>
            <div className='title'>

                <hr></hr>

                <div className='service-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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