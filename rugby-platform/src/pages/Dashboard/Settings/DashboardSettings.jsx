import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout.jsx'

function DashboardSettings() {
    return(
        <DashboardLayout>

            <div>

                <p className='text-green-400 font-bold uppercase tracking-widest mb-2'>
                    Settings
                </p>

                <h1 className='text-5x1 font-black mb-10'>
                    Platform Settings
                </h1>

                <div className='grid grid-cols-1 x1:grid-cols-2 gap-8'>

                    <div className='bg-zinc-900 border border-zinc-800 rounded-3x1 p-8'>

                        <h2 className='text-2x1 font-bold mb-6'>
                            Profile Settings
                        </h2>

                        <div className='space-y-6'>

                            <div>

                                <label className='block mb-2 text-zinc-400'>
                                    Full Name
                                </label>

                                <input
                                type='text'
                                placeholder='Arthur Tardin'
                                className='w-full bg-zinc-950 border border-zinc-800 rounded-x1 p-4 outline-none
                                focus:border-green-400 transition' />

                            </div>

                            <div>

                                <label className='block mb-2 text-zinc-400'>
                                    Email
                                </label>

                                <input
                                type='email'
                                placeholder='arthur@email.com'
                               className='w-full bg-zinc-950 border border-zinc-800 rounded-x1 p-4 outline-none
                                focus:border-green-400 transition' />

                            </div>

                            <button
                            className='bg-green-400 text-black px-6 py-4 rounded-x1 font-black hover:scale-105
                            transition'>
                                Save Changes
                            </button>
                            
                        </div>

                    </div>

                    <div className='bg-zinc-900 border border-zinc-800 rounded-3x1 p-8'>

                        <h2 className='text-2x1 font-bold mb-6'>
                            Platform Preferences
                        </h2>

                        <div className='space-y-6'>

                            <div className='flex intems-center justify-between'>

                                <span>
                                    Dark Mode
                                </span>

                                <input type='checkbox' defaultChecked />

                            </div>

                            <div className='flex intems-center justify-between'>

                                <span>
                                    Email Notifications
                                </span>

                                <input type='checkbox' defaultChecked />

                            </div>

                            <div className='flex intems-center justify-between'>

                                <span>
                                    Automatic Match Reports
                                </span>

                                <input type='checkbox' />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    )
}

export default DashboardSettings