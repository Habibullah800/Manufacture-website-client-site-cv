import React from 'react';

const Navbar = ({ children }) => {
    return (<div>



        <div class="drawer drawer-end">

            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col mb-36">

                <div class="w-full navbar bg-base-100 ">


                    <div class="flex-1 ">
                        <ul class="menu menu-horizontal">

                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                    <div class="flex-none px-2 mx-2 text-xl font-bold">Tools Plus</div>

                    <div class="flex-none">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side mt-16 ">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

            </div>

        </div>









    </div>
    );
};

export default Navbar;