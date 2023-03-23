import React from 'react'
import { useNavigate } from 'react-router';

export default function Home() {
    const nav = useNavigate();
  return (
    <>
    <div>Homssssssse</div>
    <button onClick={() =>nav('/search') }>go to Search</button>
    </>
  )
}
