import React,{useState,useEffect} from 'react';
import Article from './Article';
import articles from './data';
import Moon from './Moon';
import Sun from './Sun';

const getStorageTheme = ()=>{
  // let initial state of the theme be light-theme
  let theme = 'light-theme'
//  gets the value of the theme 
  if(localStorage.getItem('theme')){
    // after geting the theme,
    // theme=the value gotten from localStorage
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const [datas,setDatas] = useState(articles)

const toggleTheme = ()=>{
  if(theme ==='light-theme'){
    setTheme('dark-theme')
  } else {
    setTheme('light-theme')
  }
}

useEffect(() => {
  // set the class name of the root html to theme
document.documentElement.className = theme;
// the localStorage setitem carries two parameters, the name variable which is the key and the value


localStorage.setItem('theme',theme)
}, [theme]);



  return <main>
<nav>
  <div className="nav-center">
    <h1>overrated</h1>
    <button onClick={toggleTheme} className='btn' >
{theme === 'light-theme'?<Sun/>:<Moon/>}
    </button>
  </div>
</nav>
    <section className='articles'>
      {datas.map((data,index)=>{
        return  <Article key={index} {...data} />
      })}
    </section>
 
  </main>;
}

export default App;
