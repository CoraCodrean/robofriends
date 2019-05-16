import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input 
			className='tc dib br3 pa1 ma1 grow bw2 shadow-5 .fixed'
			type='search' 
			placeholder='search robot'
			onChange = {searchChange} />
		</div>
	)
}

export default Searchbox;


