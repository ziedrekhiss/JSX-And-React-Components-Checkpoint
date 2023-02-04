import React from 'react'

export default function Videogrid() {

    const urlList = [
      {
        src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `CSS-in-JS — Max Stoiber`,
      },
      {
        src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Modern Forms in React — Erik Rasmussen`,
      },
      {
        src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Engineering led design — Lauren Argenta`,
      },
      {
        src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Rethinking Design Practices — Mark Dalgleish`,
      },
      {
        src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Rethinking Design Practices — Mark Dalgleish`,
      },
      {
        src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Rethinking Design Practices — Mark Dalgleish`,
      },
      {
        src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Rethinking Design Practices — Mark Dalgleish`,
      },
      {
        src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
        title: `Rethinking Design Practices — Mark Dalgleish`,
      },
    ];

  return (
    <div style={{padding:'50px'}}>
      <div className='row'>
        {urlList.map(
          el=>(
            <div className='col-3' style={{marginBottom:'50px'}}>
              <iframe classname='row' src={el.src} style={{borderRadius:'5%', height:'150px'}} ></iframe>
              <h6 className='row' style={{margin:'10px', fontSize:'22px'}}>{el.title}</h6>
            </div>
          )
        )}
      </div>
    </div>
  )
}
