import React from 'react'
import { useEffect, useState } from 'react'

function WhichPost({posts}) {
    localStorage.clear();
  let pages = [0];
  let numberOfPage = 1;
  // let whichPage = 0;
  const [whichPage, setWhichPage] = useState(0)
  useEffect(() => {
    setWhichPage(localStorage.getItem('whichPage'))
    return () => {
      setWhichPage(0)
    }
  }, [localStorage.getItem('whichPage')])
  const howManyPages = ()=>{
    for (let i = 0; i < posts.length; i++){
      if((i+1)%4 == 0){
        pages.push(numberOfPage)
        numberOfPage++
      }
    }
    localStorage.setItem('whichPage',whichPage)
    return pages
  }
  function changePage(index){
    localStorage.setItem('whichPage',index)
  }
    return (<>
        {
          posts.length>3?(
            <div className='blog-list__other-posts'>
              <span>poprzednia</span>
                {
                  howManyPages().map((element,index)=>(
                    <button key={index} onClick={()=>changePage(element)}>
                      {element}
                    </button>
                  ))
                }
              <span>następna</span>
            </div>
          ):''
        }</>
    )
}

export default WhichPost
