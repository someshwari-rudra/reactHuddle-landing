import React from 'react'
import "../Style.css"

const Card = ({cardData}) => {
  return (
    <>
    <div className="CardContainer">
        {
            cardData.map((currEle)=>{
                return(
                    <>
                        <div className="card">
                        <div className="Cardcontent" role="cardData">
                            <h1>{currEle.name}</h1>
                            <p>{currEle.discription}</p>
                        </div>
                        <div className="Cardimage" role="CardImage">
                        <img src={currEle.image} alt="grow" />
                        </div>
                        </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Card