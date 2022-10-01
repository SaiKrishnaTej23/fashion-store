import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getMenAsync, selectMen } from "../../app/store/fashion.store";
import DisplayItem, { Product } from "../../components/DisplayItem";
import './Men.css';


const Men = () => {
    const dispatch = useAppDispatch();
    const men: Product[] = useAppSelector(selectMen);
    console.log(men);
    useEffect(() => {
        dispatch(getMenAsync());
    }, [dispatch])
    return <div className="men-content">
        {
            men.map(man =>  {
                return <DisplayItem product={man} key={man.displayImages[0]} />;
            })
        }
    </div>
}

export default Men;