// export interface Game {
//     background_image:string;
//     name:string;
//     released:string;
//     metacritic_url: string;
//     website: string;
//     description: string;
//     metacritic: number;
//     genres: Array<Genre>;
//     parent_platforms: Array<ParentPlatform>;
//     publishers: Array<Publishers>;
//     ratings: Array<Rating>;
//     screenshots: Array<Screenshots>;
//     trailers: Array<Trailer>;

// }
// export interface APIResponse<T> {
//     results: Array<T>;
// }

// interface Genre{
//     name:string
// }
// interface ParentPlatform {
  
//     platform: {
//       name: string;
     
//     }
  
// } 
// interface Publishers {
//     name: string;
//   }
// interface Rating {
//     count:number;
//     id:number;
//     title:string;

// }

// interface Screenshots {
//     image: string;
//   }
  
//   interface Trailer {
//     data: {
//       max: string;
//     };
//   }

  



  //sdsadsad

  export interface Game {
    id:string;
    background_image:string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    description_raw:string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
   // ratings: Array<Rating>;
    rating: number;
    rating_top:number;
    screenshots: Array<Screenshots>;
    video: Array<Trailer>;
  }
  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  interface Genre {
    name: string;
  }
  
  interface ParentPlatform {
    platform:{
      name: string;
      slug:string;
    };
  }
  
  interface Publishers {
    name: string;
  }
  
  // interface Rating {
  //   id: number;
  //   count: number;
  //   title: string;
  // }
  
  interface Screenshots {
    image: string;
  }
  
  interface Trailer {
    data: {
      max: string;
    };
  }