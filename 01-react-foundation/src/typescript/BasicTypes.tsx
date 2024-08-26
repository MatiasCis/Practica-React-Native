

export const BasicTypes = () => {
  const name: string = 'Fernando';
  const age: number = 37;
  const isActive: boolean = true;

  const powers:string[] = ['React','ReactNative','Angular','Vue','Qwik'];  
  /* no se sabe el tipo de dato, el 'any', puede contener cualquier tipo de dato */


  return (
    <>
    <h3>Tipos basicos</h3>
 
    {name} {age} {isActive ? 'true' : 'false'}
    <br />
    {powers.join(', ')}
    </>
  )
}
