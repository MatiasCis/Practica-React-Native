interface Person { 
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    
}

interface Address {
        country: string,
        houseNo: number
    }

export const ObjectsLiterals = () => {

    const person: Person ={
        age: 37,
        firstName: "Fernando",
        lastName: "Herrera",
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }

  return (
   
    <>
    
    <h3>Objetos literales</h3>
    <pre>
        {JSON.stringify( person, null, 2)}
    </pre>
    
    </>
  )
}
