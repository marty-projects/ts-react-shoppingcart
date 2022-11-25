import {useState, useEffect} from "react";

export default function useMockApi() {
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
      fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then(res => setItems(res))
      .catch(err => console.log(err))
    }, [])
    
    return{items}
}
