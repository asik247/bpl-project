import React from 'react';
import flagImg from '../../assets/flag.png'
import grupImg from '../../assets/grup.png'
const Player = ({ player,handleChoosePlayer }) => {
    // console.log(player,);
    const { id, img, name, country, rating, batting, bowling, price } = player;
    return (
        <div>
            <div className="card bg-base-100 p-4 w-full shadow-sm ">
                <figure>
                    <img className="w-full h-[200px] object-cover"
                        src={img}
                        alt="Shoes"
                    />
                </figure>
                {/* <div className="card-body flex">
       
         
          </div> */}
                <div className="flex items-center gap-2 my-1 ">
                    <img className="w-[20px] h-[20px]" src={grupImg} alt="" /> <p className="card-title">{name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={flagImg} alt="" /> <p className="font-semibold">{country}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Ratting</p>
                    <span className="font-semibold">{rating}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">{batting}</p>
                    <p className="font-semibold">{bowling}</p>
                </div>

                <div className="card-actions flex justify-between items-center">
                    <p className="font-semibold">Price:${price}</p>
                    <button onClick={()=>handleChoosePlayer(player)} className="btn">Choose player</button>
                </div>

            </div>
        </div>
    );
};

export default Player;
/**
 * {
    "id": 12,
    "img": "https://i.ibb.co.com/99hTYBDW/images-8.jpg",
    "name": "MS Dhoni",
    "country": "India",
    "rating": 97,
    "batting": "Right-hand bat",
    "bowling": "Right-arm medium",
    "price": 1450000
}
 */