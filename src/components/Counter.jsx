import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {

    // useSeletctor  hook is used to access the value from the store
    // useDispatch Hook is used to access the functions inside acton
    const count = useSelector((state => state.counter.value))
    const dispatch = useDispatch();
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                <h1 style={{ fontSize: '80px', color: 'hotpink' }}>{count}</h1>
                <div className='mt-4'>
                    <button className='me-3 btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
                    <button className='me-3 btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
                    <button className=' me-3 btn btn-danger' onClick={()=>dispatch(reset())} style={{ width: '110px' }}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter
