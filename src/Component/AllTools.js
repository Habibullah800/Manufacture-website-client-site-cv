import React, { useEffect, useState } from 'react';
import AllTool from './AllTool';

const AllTools = () => {

    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allTool')
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
                        tools.map(tool => <AllTool
                            key={tool.id}
                            tool={tool}

                        ></AllTool>)
                    }
                </div>

            </div>

        </div>
    );
};

export default AllTools;