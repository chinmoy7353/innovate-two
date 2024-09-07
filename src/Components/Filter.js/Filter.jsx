import React, { useState } from 'react'
import Dada from '../../assets/Foods/dada.jpeg'
import Dosa3 from '../../assets/Foods/dosa3.jpg'
import Dosa2 from '../../assets/Foods/dosa2.jpeg'
const Filter = () => {
    const Data = [
        {
            id:1,
            image:Dosa3,
            name:'dada',
            category:'Dada Noodles',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id:2,
            image:Dada,
            name:'maggi',
            category:'maggi Noodles',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id:3,
            image:Dosa2,
            name:'maggi',
            category:'maggi Noodles',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
    ]


    const [item, setItem] = useState(Data)

    const filterItem = (cateItem)=>{
        const updateItem = Data.filter((item)=>{
            return item.category === cateItem
        })
        setItem(updateItem)
    }
    
  return (
    <div className='filter-area mt-[100px]'>
      <div className="container mx-auto">
        <div className="row">
            <ul className='flex justify-center items-center'>
            
                <li className='ml-8 bg-green-500 py-[10px] px-[20px] cursor-pointer'>all</li>
                <li onClick={()=> filterItem('Dada Noodles')} className='ml-8 bg-green-500 py-[10px] px-[20px] cursor-pointer'>dada</li>
                <li onClick={()=> filterItem('maggi Noodles')} className='ml-8 bg-green-500 py-[10px] px-[20px] cursor-pointer'>maggi</li>
                <li className='ml-8 bg-green-500 py-[10px] px-[20px] cursor-pointer'>subway</li>
                <li className='ml-8 bg-green-500 py-[10px] px-[20px] cursor-pointer'>indian spicy</li>
            </ul>
        </div>

        <div className="row">
            {
                item.map((data)=> (
                    <div className="item" key={data.id}>
                        <img src={data.image} alt="" />
                    </div>
                )) 
            }
        </div>
      </div>
    </div>
  )
}

export default Filter
