import { useEffect, useState } from 'react'
import {useSearchParams} from 'next/navigation'
import { useRouter } from 'next/router'
import styles from '../styles/counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const SearchParams = useSearchParams();
    const isUser = SearchParams.get( 'username')
    const router = useRouter();

    useEffect(()=> {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
        <main className='{styles.main}'>
            <div>counter page</div>
            <div>welcome {isUser}</div>

            <div>{number}</div>

            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
        </main>
            
        </>
    )
}

