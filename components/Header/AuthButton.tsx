
import { Bell } from "react-feather"
import { getCurrentUser, signIn } from 'aws-amplify/auth';
import { useState, useEffect } from "react"
import Link from 'next/link';

const AuthButton = () => {
    
    const [user, setUser] = useState<any>(undefined)

    useEffect(() => {
        (async () => {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                setUser({
                    username,
                    userId,
                    ...signInDetails
                })
            } catch (e) {
                setUser(undefined)
            }
        })()
    }, [])

    return (
        <>
            {user ?
                <>
                    <button className="p-1.5 rounded-full text-gray-700 hover:bg-gray-200" aria-label="Notifications">
                        <Bell size={20} />
                    </button>

                    <button className="flex items-center p-1 rounded-full text-gray-700 hover:bg-gray-200" aria-label="User profile">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            JP
                        </div>
                    </button>
                </> :
                <Link href="/account">
                    <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                        <span className="font-bold">Sign In</span>
                    </button>
                </Link>

            }
        </>
    )
}

export default AuthButton