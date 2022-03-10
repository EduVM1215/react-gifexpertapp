import { useEffect, useState } from "react";
import {getGifs} from '../Helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

    //los efectos no pueden ser async
    useEffect(() => {
      getGifs(category)
          .then(imgs => {             
            setState({
                data: imgs,
                loading: false
            });
          })
    }, [category]);

  return state; //{data[], loading:true}
};
