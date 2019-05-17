import React from 'react';

const Card = ({id, name}) => {
	return (
		<div className='tc dib br3 pa1 ma1 grow bw2 shadow-5'>
			<img alt='robo' src={`https://robohash.org/${id}?bgset=bg3&&size=300x300`}/>
			<div>
				<h2> {name} </h2>
			</div>
		</div>
	)
}

const Cardlist = ({robots}) => {
	return (
		<div > 
			{
				 robots.map((user,i) => {
					return (
						 <Card 
							id ={robots[i].id}
							key={robots[i].id} 
							name = {robots[i].name}
					/>)
				}) 

			}
		</div>
	)
}

export default Cardlist;