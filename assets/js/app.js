const cl =console.log;
const moviecontainer=document.getElementById('moviecontainer')


const setRating=(rating) =>{
	if (rating >=7){
		return ' badge-success '
	}else if (rating >=5 && rating< 7){
		return ' badge-warning'
	}else{
		return ' badge-danger'
	}
}

let result=' '
movieArray.forEach(movie =>{
	result+=`<div class="col-md-4  mb-4">
			       <div class="card">
			<figure class="moviecard mb-0">
			<!-- <-----------img ------------------> 
			<img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}"
			title="${movie.title}"
			alt="${movie.title}">

		<figcaption>
			 <div class="titleInfo">
			    <div class="row">
			        <div class="col-10">
			           <h3>
					   ${movie.title|| movie.original_title}
					   </h3>
			               </div>
			                  <div class="col-2">
			  
			 
		              	<h3><span class="badge${setRating(movie.vote_average)}">*${movie.vote_average}</span> </h3>
			       </div>
			    </div>
			  </div>
			  
			  <div class="overview">
			  <h5>
			  ${movie.title}
			  </h5>
			  <p>  
			  ${movie.overview} 
			  </p>
			</figcaption>
		  </figure>
		 </div>
	   </div>
	</div>
	</div>` 
})

moviecontainer.innerHTML= result
