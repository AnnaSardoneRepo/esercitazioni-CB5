import './Button.css';

const buttonVariantMap = {
    primary: 'text-xl',
    secondary: 'text-sm',
    disabled:'text-xs'
  }

  



  export function Button(props) {
   
    console.log(props);

const {
        children = "labelChildren", 
        variant = "none",
        ...remainAttributes
        
    } = props;

    const log = ()=>{
        console.log("")
      }
      
  
   return(
    <button
        aria-label="click"
        // className="Button"
        className={`Button Button--variant-${variant} ${buttonVariantMap[variant] ?? ''}`}
        onClick={log}
        
        {...remainAttributes}
        >
            {children}
            
    </button>
   )
  }