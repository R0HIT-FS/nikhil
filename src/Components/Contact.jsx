import React from 'react'
import GalleryWithMinimap from './GalleryWithMinimap/GalleryWithMinimap'

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1543096222-72de739f7917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1541519481457-763224276691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1516575150278-77136aed6920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1627298855952-b75008bae685?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1510706019500-d23a509eecd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxtb2RlbHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1515213038193-95fd9133fc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtb2RlbHN8ZW58MHx8MHx8fDA%3D",

];

const Contact = () => {
  return (
    <div className='ppthin '>
        {/* <h1 className='text-black text-9xl text-center uppercase title'>Contact</h1> */}
        <GalleryWithMinimap images={images}/>
        {/* <div className='w-full h-screen bg-red-300'></div> */}
    </div>
  )
}

export default Contact