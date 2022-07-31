import {useState,useRef,useEffect} from "react"

export function userInputTagHook(initial){
  const [value, setValue] = useState(initial);
  const onChange = val=>setValue(val);
  const clearFields = ()=>setValue(initial);
  return [value, onChange,clearFields];
}

//хук примонтируем ссылку  отслеживания состояния на отправку запроса на сервер (mounted отслеживает соостояние)
//припервом рендеринге отработка useEffect с установкой mounted в true
export function useMountedRef(){
  const mounted = useRef(false);
  useEffect(()=>{    
    return (()=> mounted.current= false)
  });
  return mounted;
}
